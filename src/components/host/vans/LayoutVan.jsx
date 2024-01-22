import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LayoutVan() {
  const [vansData, setVansData] = useState(() => []);

  const location = useLocation();

  useEffect(() => {
    async function getData() {
      try {
        const dataResponse = await fetch("/data/vans.json");

        if (!dataResponse.ok) {
          return;
        }

        const dataToUse = await dataResponse.json();

        setVansData(dataToUse);
      } catch (error) {
        window.alert("There was an error, please, try again later.");
      }
    }

    getData();
  }, []);

  const params =
    location.state && location.state.search
      ? new URLSearchParams(location.state.search)
      : null;

  return (
    <div className="p-5 flex flex-col gap-6">
      <Link
        to={`..${location.state ? "?" + location.state.search : ""}`}
        relative="path"
        className="font-bold text-black text-lg"
      >
        Back to all vans{" "}
        {`${params ? "order by " + params.get("orderBy") : ""}`}
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              end
              className={({ isActive }) => (isActive ? "underline" : null)}
              to="."
            >
              Van
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : null)}
              to="details"
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : null)}
              to="pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : null)}
              to="photos"
            >
              Photos
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet context={{ vansData }} />
    </div>
  );
}
