import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((s) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0),
  );
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#e0fff0",
      }}
    >
      <a href="/">Home</a>
      <a href="/products">Plants</a>
      <a href="/about">About Us</a>
      <a href="/cart">
        Cart 🛒
        <span
          style={{
            background: "#4CAF50",
            color: "#fff",
            borderRadius: "50%",
            padding: "2px 8px",
            marginLeft: 4,
          }}
        >
          {count}
        </span>
      </a>
    </nav>
  );
}
export default Navbar;
