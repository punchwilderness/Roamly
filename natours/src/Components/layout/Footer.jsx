import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary text-primary border-primary/10 border-t">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <img src="/img/logo.png" alt="Roamly Logo" className="h-10 w-auto" />
            </Link>

            <p className="text-primary/70 mt-5 max-w-md">
              Discover breathtaking destinations and unforgettable experiences with carefully
              crafted tours around the world.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="text-primary/70 hover:text-tertiary transition-all duration-300 hover:-translate-y-1"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="#"
                className="text-primary/70 hover:text-tertiary transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="text-primary/70 hover:text-tertiary transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="text-primary/70 hover:text-tertiary transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="text-primary/70 hover:text-tertiary transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold">Company</h3>

            <ul className="text-primary/70 space-y-3">
              <li>
                <Link to="/about" className="hover:text-tertiary transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/careers" className="hover:text-tertiary transition">
                  Careers
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-tertiary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-semibold">Explore</h3>

            <ul className="text-primary/70 space-y-3">
              <li>
                <Link to="/tours" className="hover:text-tertiary transition">
                  Tours
                </Link>
              </li>

              <li>
                <Link to="/destinations" className="hover:text-tertiary transition">
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="/reviews" className="hover:text-tertiary transition">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 font-semibold">Support</h3>

            <ul className="text-primary/70 space-y-3">
              <li>
                <Link to="/contact" className="hover:text-tertiary transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-tertiary transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-tertiary transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-primary/10 text-primary/60 mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>© 2026 Roamly. All rights reserved.</p>

          <p>Built with React • Node.js • MongoDB</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
