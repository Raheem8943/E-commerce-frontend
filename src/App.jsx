import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import POViewList from "./components/POViewList";
import Clothes from "./pages/Clothes";
import Electronics from "./pages/Electronics";
import Shoes from "./pages/Shoes";
import Miscellaneous from "./pages/Miscellaneous";
import { ShoppingBag } from "lucide-react";
function App() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <div className="W_name">Estore</div>
        <div className="Header_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <NavLink to="/cart"><ShoppingBag /></NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Clothes" element={<Clothes />}></Route>
        <Route path="/Electronics" element={<Electronics />}></Route>
        <Route path="/Shoes" element={<Shoes />}></Route>
        <Route path="/Miscellaneous" element={<Miscellaneous />}></Route>
        <Route path="/product/:product_id" element={<POViewList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
