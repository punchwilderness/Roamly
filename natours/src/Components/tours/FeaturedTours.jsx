import TourCard from './TourCard';
import useTours from '../../hooks/useTours';

function FeaturedTours() {
  const { data, isLoading, error } = useTours();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong</p>;

  const tours = data.data.tours;

  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-accent tracking-widest uppercase">Explore</p>

          <h2 className="text-secondary mt-3 text-4xl font-bold md:text-5xl">Popular Tours</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;
