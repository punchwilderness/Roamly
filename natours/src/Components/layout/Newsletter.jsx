function Newsletter() {
  return (
    <section className="bg-tertiary px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-white/10 px-8 py-12 backdrop-blur-lg md:flex-row">
        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-primary text-3xl font-bold md:text-4xl">
            Ready for your next adventure?
          </h2>

          <p className="text-primary/80 mt-4 text-lg">
            Get exclusive travel deals, destination guides, and unforgettable experiences delivered
            to your inbox.
          </p>
        </div>

        {/* Form */}
        <form className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-primary text-secondary placeholder:text-secondary/50 w-full rounded-full px-6 py-3 outline-none"
          />

          <button
            type="submit"
            className="bg-secondary text-primary hover:bg-secondary/80 rounded-full px-8 py-3 font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
