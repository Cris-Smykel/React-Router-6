import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Vans from "./vans/Vans";
import Van from "./vans/van/Van";
import Layout from "./Layout";
import Host from "./host/Host";
import HostHome from "./host/HostHome";
import Income from "./host/income/Income";
import Reviews from "./host/reviews/Reviews";
import HostVans from "./host/vans/Vans";
import HostVan from "./host/vans/HostVan";
import LayoutVan from "./host/vans/LayoutVan";
import Details from "./host/vans/Details";
import Pricing from "./host/vans/Pricing";
import Photos from "./host/vans/Photos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />

          <Route path="host" element={<Host />}>
            <Route index element={<HostHome />} />

            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<LayoutVan />}>
              <Route index element={<HostVan />} />
              <Route path="details" element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
