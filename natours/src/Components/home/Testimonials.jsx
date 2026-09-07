function Testimonials() {
  const reviews = [
    {
      name: 'Alex Johnson',
      role: 'Adventure Traveler',
      review: 'The best travel experience I have ever had. Everything was perfectly organized.',
    },
    {
      name: 'Emma Wilson',
      role: 'Explorer',
      review: 'Amazing destinations and professional guides. Highly recommended!',
    },
    {
      name: 'Michael Brown',
      role: 'Nature Lover',
      review: 'Beautiful places, great service, and unforgettable memories.',
    },
  ];

  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold tracking-[0.3em] uppercase">Testimonials</p>

          <h2 className="text-secondary mt-4 text-4xl font-bold md:text-5xl">What Travelers Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="text-accent text-xl">★★★★★</div>

              <p className="text-secondary/70 mt-5">"{review.review}"</p>

              <div className="mt-6">
                <h3 className="text-secondary font-bold">{review.name}</h3>

                <p className="text-secondary/60">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
