import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link className="text-lg text-blue-500 font-bold" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg text-blue-500 font-bold" to={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
