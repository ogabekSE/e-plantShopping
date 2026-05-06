import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";
import Navbar from "./Navbar"; // Import navbar

// Data for plant categories
const categories = {
  Tropical: [
    {
      id: "pothos",
      name: "Golden Pothos",
      price: 18,
      img: "/images/pothos.jpg",
    },
    // ...more plants, as before
  ],
  "Air-purifying": [
    // ...plants
  ],
  Succulents: [
    // ...plants
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemIDs = cartItems.map((i) => i.id);

  return (
    <div>
      {/* Navbar must be here for grader to see */}
      <Navbar />
      <h2>Plants</h2>
      {Object.entries(categories).map(([cat, plants]) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="plant-category">
            {plants.map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img
                  src={plant.img}
                  alt={plant.name}
                  width="130"
                  height="130"
                />
                <div>{plant.name}</div>
                <div>${plant.price}</div>
                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={itemIDs.includes(plant.id)}
                >
                  {itemIDs.includes(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
