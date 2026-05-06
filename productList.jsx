import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/CartSlice";

const categories = {
  Tropical: [
    {
      id: "pothos",
      name: "Golden Pothos",
      price: 18,
      img: "/images/pothos.jpg",
    },
    {
      id: "monstera",
      name: "Monstera",
      price: 32,
      img: "/images/monstera.jpg",
    },
    {
      id: "birdsnest",
      name: "Bird's Nest Fern",
      price: 24,
      img: "/images/birdsnest.jpg",
    },
    { id: "areca", name: "Areca Palm", price: 40, img: "/images/areca.jpg" },
    { id: "peace", name: "Peace Lily", price: 22, img: "/images/peace.jpg" },
    { id: "bhhedge", name: "Blue Hedera", price: 27, img: "/images/bh.jpg" },
  ],
  "Air-purifying": [
    {
      id: "spider",
      name: "Spider Plant",
      price: 14,
      img: "/images/spider.jpg",
    },
    { id: "snake", name: "Snake Plant", price: 19, img: "/images/snake.jpg" },
    {
      id: "rubber",
      name: "Rubber Plant",
      price: 25,
      img: "/images/rubber.jpg",
    },
    {
      id: "bamboo",
      name: "Lucky Bamboo",
      price: 13,
      img: "/images/bamboo.jpg",
    },
    { id: "boston", name: "Boston Fern", price: 18, img: "/images/boston.jpg" },
    {
      id: "dracaena",
      name: "Dracaena",
      price: 20,
      img: "/images/dracaena.jpg",
    },
  ],
  Succulents: [
    {
      id: "succ-1",
      name: "Echeveria",
      price: 10,
      img: "/images/echeveria.jpg",
    },
    { id: "succ-2", name: "Jade Plant", price: 13, img: "/images/jade.jpg" },
    { id: "succ-3", name: "Aloe Vera", price: 12, img: "/images/aloe.jpg" },
    {
      id: "succ-4",
      name: "Haworthia",
      price: 11,
      img: "/images/haworthia.jpg",
    },
    {
      id: "succ-5",
      name: "String of Pearls",
      price: 18,
      img: "/images/string.jpg",
    },
    { id: "succ-6", name: "Sedum", price: 9, img: "/images/sedum.jpg" },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemIDs = cartItems.map((i) => i.id);

  return (
    <div>
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
