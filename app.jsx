import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      <Navbar />
      {!showProducts ? (
        <div className="background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <button
            className="get-started-button"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
