import { Outlet } from "react-router-dom";

export default function AuthRequired() {
  const isLogged = false;

  if (isLogged) {
    return <Outlet />;
  }

  return <h1>User is not logged</h1>;
}
