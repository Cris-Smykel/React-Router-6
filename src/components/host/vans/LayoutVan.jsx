import { Outlet, NavLink, Link } from "react-router-dom";

export default function LayoutVan() {
  return (
    <div className="p-5 flex flex-col gap-6">
      <Link to=".." relative="path" className="font-bold text-black text-lg">
        Back to all vans
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              end
              className={({ isActive }) => isActive && "underline"}
              to="."
            >
              Van
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && "underline"}
              to="details"
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && "underline"}
              to="pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && "underline"}
              to="photos"
            >
              Photos
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
