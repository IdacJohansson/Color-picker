import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import Gallery from "../src/pages/Gallery";
import Calculator from "../src/pages/Calculator";
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/colorpicker" element={<ColorPicker />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ColorProvider>
  );
}

export default App;
