import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import POViewList from "./components/POViewList";
function App() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <div className="name">Estore</div>
        <div className="Header-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="cart">Cart</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/product/:product_id" element={<POViewList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
