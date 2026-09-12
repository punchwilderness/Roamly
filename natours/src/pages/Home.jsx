import Navbar from '../Components/layout/Navbar';
import Hero from '../Components/tours/Hero';
import FeaturedTours from '../Components/tours/FeaturedTours';
import About from '../Components/home/About';
import Stats from '../Components/home/Stats';
import Testimonials from '../Components/home/Testimonials';
import Footer from '../Components/layout/Footer';
import Newsletter from '../Components/layout/Newsletter';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedTours />
      <About />
      <Stats />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
