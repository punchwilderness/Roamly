import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="bg-secondary/20 fixed top-0 left-0 z-50 w-full border-b border-white/10 backdrop-blur-lg">
      <nav className="mx-auto hidden max-w-7xl items-center justify-center px-6 py-6 md:flex md:justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/img/logo.png" alt="Roamly Logo" className="h-10 w-auto" />
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
      {/* Mobile Menu Button */}
      <nav
        className={`relative flex h-20 items-center justify-between overflow-hidden px-6 transition-all duration-500 ease-in-out md:hidden ${menuOpen ? 'h-dvh' : 'h-20'} `}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-primary absolute transition-all duration-500 ease-in-out ${
            menuOpen ? 'top-6 left-1/2 -translate-x-1/2' : 'right-6'
          } `}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <Link
          to="/"
          className={`flex items-center ${menuOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        >
          <img src="/img/logo.png" alt="Roamly Logo" className="h-10 w-auto" />
        </Link>
        <div
          className={`absolute inset-0 top-20 z-40 flex items-center justify-center transition-all duration-500 ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          } `}
        >
          <div
            className={`flex h-full w-full flex-col items-center justify-evenly transition-all duration-300 ${
              menuOpen
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-8 opacity-0'
            } `}
          >
            <a
              href="/"
              className="text-secondary text-3xl font-semibold transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="/tours"
              className="text-secondary text-3xl font-semibold transition"
              onClick={() => setMenuOpen(false)}
            >
              Tours
            </a>

            <a
              href="#about"
              className="text-secondary text-3xl font-semibold transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <button
              className="border-secondary text-secondary mt-3 rounded-full border px-10 py-5 text-3xl transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </button>

            <button
              className="bg-tertiary text-primary mt-3 rounded-full px-8 py-5 text-3xl font-semibold transition"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
