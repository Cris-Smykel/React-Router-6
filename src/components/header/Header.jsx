import { Link, useLocation, NavLink } from "react-router-dom";

export default function Header() {
  const routesInfo = getRoutesInfo();

  const routesElements = routesInfo.map((route) => {
    return (
      <RouterElement
        url={route.url}
        routeName={route.routeName}
        // useLocation={useLocation}
        key={route.id}
      />
    );
  });

  return (
    <header className="bg-primary header-height p-4 pt-9 pb-9 sm:p-6">
      <div className="flex items-center justify-between max-w-6xl m-auto">
        <h2>
          <Link className="text-2xl font-bold text-black" to="/">
            #VANLIFE
          </Link>
        </h2>

        <nav>
          <ul className="flex items-center gap-4">{routesElements}</ul>
        </nav>
      </div>
    </header>
  );
}

function RouterElement(props) {
  const linkStyles =
    "text-base text-customGray font-semibold hover:text-customBlack hover:underline transition-all duration-200";

  return (
    <li>
      <NavLink
        to={props.url}
        className={({ isActive }) =>
          isActive ? `${linkStyles} underline` : linkStyles
        }
      >
        {props.routeName}
      </NavLink>
      {/* <Link
        className={`${
          useLocation().pathname.startsWith(props.url) && "underline"
        } 
        text-base text-customGray font-semibold hover:text-customBlack hover:underline transition-all duration-200`}
        to={props.url}
      >
        {props.routeName}
      </Link> */}
    </li>
  );
}

function getRoutesInfo() {
  return [
    {
      id: 1,
      url: "/host",
      routeName: "Host",
    },
    {
      id: 2,
      url: "/about",
      routeName: "About",
    },
    {
      id: 3,
      url: "/vans",
      routeName: "Vans",
    },
  ];
}
