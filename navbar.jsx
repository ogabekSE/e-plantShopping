import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const count = useSelector(s => s.cart.items.reduce((sum, i) => sum + i.qty, 0));
  return (
    <nav style={{display: "flex", gap: "20px", padding: "15px", background: "#e0fff0"}}>
      <Link to="/">Home</Link>
      <Link to="/products">Plants</Link>
      <Link to="/about">About Us</Link>
      <Link to="/cart">
        Cart 🛒<span style={{
          background: "#4CAF50", color: "#fff", borderRadius: "50%", padding: "2px 8px", marginLeft: 4
        }}>{count}</span>
      </Link>
    </nav>
  );
}
export default Navbar;