import Counter from '../common/Counter';

function Stats() {
  const stats = [
    {
      number: 10000,
      suffix: '+',
      label: 'Happy Travelers',
    },
    {
      number: 120,
      suffix: '+',
      label: 'Destinations',
    },
    {
      number: 500,
      suffix: '+',
      label: 'Tours Completed',
    },
    {
      number: 4,
      suffix: '.9',
      label: 'Average Rating',
    },
  ];

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-primary text-4xl font-bold md:text-5xl">
              <Counter value={stat.number} />
              {stat.suffix}
            </h3>

            <p className="text-primary/70 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
