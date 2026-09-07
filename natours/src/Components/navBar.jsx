import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="flex w-full h-16 bg-secondary items-center p-10">
      <ul className="flex justify-between items-center w-full text-primary">
        <li>
          <Link to="/" className="uppercase text-base font-light">
            <img
              src="/logo-white.png"
              alt="Natours Adventure Tours"
              className="h-8 w-auto"
              width={120}
              height={36}
              loading="eager"
            />
          </Link>
        </li>
        <li>
          <div className="flex gap-7 items-center">
            <Link
              to="#"
              className="uppercase text-base font-light cursor-pointer"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="uppercase text-base font-light border border-primary rounded-3xl px-8 py-2.5 cursor-pointer hover:bg-primary hover:text-secondary transition-colors"
            >
              Sign up
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
