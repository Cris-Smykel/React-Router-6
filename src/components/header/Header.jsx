import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary p-4 pt-9 pb-9 sm:p-6">
      <div className="flex items-center justify-between max-w-6xl m-auto">
        <h2>
          <Link className="text-2xl font-bold text-black" to="/">
            #VANLIFE
          </Link>
        </h2>

        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="text-base text-customGray font-semibold hover:text-customBlack hover:underline transition-all duration-200"
                to="/about"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                className="text-base text-customGray font-semibold hover:text-customBlack hover:underline transition-all duration-200"
                to="/vans"
              >
                vans
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
