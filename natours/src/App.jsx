import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Tours from './pages/Tours';
// import TourDetails from './pages/TourDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:slug' element={<TourDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} /> */}
    </Routes>
  );
}

export default App;
