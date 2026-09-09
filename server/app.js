const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const path = require('path');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // Vite dev server
  process.env.FRONTEND_URL, // Your deployed frontend
];

// 1) Global MiddleWares
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' });
}

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DB_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

const limiter = rateLimit({
  max: 70,
  windowMs: 60 * 60 * 10000,
  message: 'Too many request from this IP, please try again in an hour',
});

app.use('/api', limiter);

// Parese the body to json
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests without an Origin header (Postman, curl, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }),
);

// Serving static files
app.use('/', express.static(path.join(__dirname, 'public')));

// 3) Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = 'fail';
  // err.statusCode = 404;
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

// 4) Start the Server
module.exports = app;
