import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Vans from "./vans/Vans";
import Van from "./vans/van/Van";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Van />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
