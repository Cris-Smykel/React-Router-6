import { Outlet } from "react-router-dom";
import NavHost from "./NavHost";

export default function Host() {
  return (
    <main>
      <NavHost />

      <Outlet />
    </main>
  );
}
