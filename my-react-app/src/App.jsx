import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Products from "../src/pages/Products";
import Contact from "../src/pages/Contact";
import ColorPicker from "./pages/ColorPicker";
import TodoList from "../src/pages/TodoList";

import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar";

import { ColorProvider } from "../src/contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/colorpicker" element={<ColorPicker />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
