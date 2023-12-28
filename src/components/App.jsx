import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
