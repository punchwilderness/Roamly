function TourCard({ tour }) {
  return (
    <div className="bg-primary overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-72">
        <img
          src={`http://localhost:3000/img/tours/${tour.imageCover}`}
          alt={tour.name}
          className="h-full w-full object-cover"
        />

        {/* Gradient */}
        <div className="from-secondary/70 absolute inset-0 bg-gradient-to-t to-transparent" />

        {/* Difficulty */}
        <span className="bg-accent text-primary absolute top-5 right-5 rounded-full px-4 py-1 text-sm font-semibold uppercase">
          {tour.difficulty}
        </span>

        {/* Name */}
        <h3 className="text-primary absolute bottom-6 left-6 text-3xl font-bold">{tour.name}</h3>
      </div>

      {/* Details */}
      <div className="p-6">
        <p className="text-secondary/70 line-clamp-3">{tour.summary}</p>

        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-secondary font-semibold">{tour.duration} days</p>

            <p className="text-secondary/70">{tour.maxGroupSize} people max</p>
          </div>

          <div className="text-right">
            <p className="text-tertiary text-2xl font-bold">${tour.price}</p>

            <p className="text-secondary/70">per person</p>
          </div>
        </div>

        <button className="bg-tertiary text-primary hover:bg-tertiary/80 mt-6 w-full rounded-full py-3 font-semibold transition">
          View Tour
        </button>
      </div>
    </div>
  );
}

export default TourCard;
