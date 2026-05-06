import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1 className="landing-title">Paradise Nursery</h1>
      <button className="landing-btn" onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
