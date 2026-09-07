function About() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Text Content */}
        <div>
          <p className="text-accent font-semibold tracking-[0.3em] uppercase">About Us</p>

          <h2 className="text-secondary mt-4 text-4xl font-bold md:text-5xl">
            Experience The World Like Never Before
          </h2>

          <p className="text-secondary/70 mt-6 text-lg leading-relaxed">
            We create unforgettable adventures that connect travelers with the most beautiful places
            on Earth. From mountains to oceans, every journey is designed to create lifelong
            memories.
          </p>

          <div className="mt-8 space-y-5">
            <Feature title="Expert Guides" text="Travel with experienced local guides." />

            <Feature title="Amazing Destinations" text="Discover hidden gems around the world." />

            <Feature title="Safe Adventures" text="Your safety is our highest priority." />
          </div>
        </div>

        {/* Image Side */}
        <div className="relative h-[500px]">
          <img
            src="/src/assets/img/about-1.jpg"
            className="absolute top-0 left-10 h-96 w-72 rounded-3xl object-cover shadow-xl"
          />

          <img
            src="/src/assets/img/about-2.jpg"
            className="absolute right-10 bottom-0 h-96 w-72 rounded-3xl object-cover object-[35%_25%] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="bg-tertiary text-primary flex h-12 w-12 items-center justify-center rounded-full font-bold">
        ✓
      </div>

      <div>
        <h3 className="text-secondary text-xl font-bold">{title}</h3>

        <p className="text-secondary/70">{text}</p>
      </div>
    </div>
  );
}

export default About;
