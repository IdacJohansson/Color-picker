import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home";
import Products from "../src/Pages/Products";
import Contact from "../src/Pages/Contact";
import Footer from "../src/Components/Footer";
import NavBar from "../src/Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
