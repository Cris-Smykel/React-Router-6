import { Link, NavLink } from "react-router-dom";

export default function NavHost() {
  const routesInfo = getNavHostRouters();

  const routesElements = routesInfo.map((route) => {
    return (
      <NavHostRouter
        url={route.url}
        routeName={route.routeName}
        key={route.id}
      />
    );
  });

  return (
    <nav className="p-4">
      <ul className="flex gap-10 items-center">{routesElements}</ul>
    </nav>
  );
}

function NavHostRouter(props) {
  const navHostStyles = "text-bold text-black";

  return (
    <li>
      <NavLink
        end={props.url == "." && true}
        className={({ isActive }) =>
          isActive ? `${navHostStyles} underline` : navHostStyles
        }
        to={props.url}
      >
        {props.routeName}
      </NavLink>
    </li>
  );
}

function getNavHostRouters() {
  // /Host/url

  return [
    {
      id: 1,
      routeName: "Dashboard",
      url: ".",
    },
    {
      id: 2,
      routeName: "Income",
      url: "income",
    },
    {
      id: 3,
      routeName: "Reviews",
      url: "reviews",
    },
    {
      id: 4,
      routeName: "Vans",
      url: "vans",
    },
  ];
}
