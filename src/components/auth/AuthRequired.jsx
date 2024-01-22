import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const isLogged = false;

  const currentRoute = useLocation().pathname;

  if (isLogged) {
    if (currentRoute === "/login") {
      return <Navigate to={"/"} />;
    }
    return <Outlet />;
  }

  if (!isLogged && currentRoute === "/login") {
    return <Outlet />;
  }

  return <Navigate to={"login"} />;
}
