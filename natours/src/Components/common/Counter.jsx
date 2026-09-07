import { useEffect, useState } from 'react';

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      },
    );

    const element = document.getElementById(`counter-${value}`);

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(value / 50);

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(current);
    }, 30);

    return () => clearInterval(interval);
  }, [start, value]);

  return <span id={`counter-${value}`}>{count}</span>;
}

export default Counter;
