import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-secondary/20 fixed top-0 left-0 z-50 w-full border-b border-white/10 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide text-white uppercase">
          Roamly
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-white md:flex">
          <Link to="/tours" className="transition hover:text-green-300">
            Tours
          </Link>

          <a href="#about" className="transition hover:text-green-300">
            About
          </a>

          <a href="#reviews" className="transition hover:text-green-300">
            Reviews
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login" className="text-white transition hover:text-green-300">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-tertiary hover:bg-tertiary/80 rounded-full px-5 py-2 font-medium text-white transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
