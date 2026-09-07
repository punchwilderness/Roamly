import { useTours } from '../hooks/useTours';

function Tours() {
  const { data, isLoading, error } = useTours();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div>
      <h1>Tours Loaded</h1>
      console.log(data);
      {data.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Tours;
