function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/src/assets/img/hero.jpg"
          alt="Adventure landscape"
          className="object-conatins h-full w-full scale-105 object-center blur-[2px]"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="bg-secondary/60 absolute inset-0" />

      {/* Content */}
      <div className="text-primary relative z-10 max-w-4xl px-6 text-center">
        <p className="text-accent mb-6 font-semibold tracking-[0.4em] uppercase">
          Adventure Awaits
        </p>

        <h1 className="text-5xl font-bold uppercase md:text-7xl">The Adventure Of A Lifetime</h1>

        <p className="text-primary/90 mt-6 text-lg md:text-2xl">
          Discover breathtaking destinations and unforgettable journeys.
        </p>

        <button className="bg-tertiary hover:bg-tertiary/80 mt-10 rounded-full px-8 py-3 text-lg font-semibold transition">
          Discover Tours
        </button>
      </div>
    </section>
  );
}

export default Hero;
