import { Link } from "react-router-dom";

export default function NavHost() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/host/income">Income</Link>
        </li>
        <li>
          <Link to="/host/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/host/vans"> Vans </Link>
        </li>
      </ul>
    </nav>
  );
}
