import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/CartSlice";
const plants = [
  // Organize by category (3+), every plant must have id, name, price, img, category
  {
    id: "pothos",
    name: "Golden Pothos",
    price: 18,
    img: "/images/pothos.jpg",
    category: "Tropical",
  },
  {
    id: "monstera",
    name: "Monstera",
    price: 32,
    img: "/images/monstera.jpg",
    category: "Tropical",
  },
  {
    id: "birdsnest",
    name: "Bird's Nest Fern",
    price: 24,
    img: "/images/birdsnest.jpg",
    category: "Tropical",
  },
  {
    id: "bhhedge",
    name: "Blue Hedera",
    price: 27,
    img: "/images/bh.jpg",
    category: "Tropical",
  },
  {
    id: "areca",
    name: "Areca Palm",
    price: 40,
    img: "/images/areca.jpg",
    category: "Tropical",
  },
  {
    id: "peace",
    name: "Peace Lily",
    price: 22,
    img: "/images/peace.jpg",
    category: "Tropical",
  },
  {
    id: "spider",
    name: "Spider Plant",
    price: 14,
    img: "/images/spider.jpg",
    category: "Air-purifying",
  },
  {
    id: "snake",
    name: "Snake Plant",
    price: 19,
    img: "/images/snake.jpg",
    category: "Air-purifying",
  },
  {
    id: "rubber",
    name: "Rubber Plant",
    price: 25,
    img: "/images/rubber.jpg",
    category: "Air-purifying",
  },
  {
    id: "bamboo",
    name: "Lucky Bamboo",
    price: 13,
    img: "/images/bamboo.jpg",
    category: "Air-purifying",
  },
  {
    id: "boston",
    name: "Boston Fern",
    price: 18,
    img: "/images/boston.jpg",
    category: "Air-purifying",
  },
  {
    id: "dracaena",
    name: "Dracaena",
    price: 20,
    img: "/images/dracaena.jpg",
    category: "Air-purifying",
  },
  {
    id: "succ-1",
    name: "Echeveria",
    price: 10,
    img: "/images/echeveria.jpg",
    category: "Succulents",
  },
  {
    id: "succ-2",
    name: "Jade Plant",
    price: 13,
    img: "/images/jade.jpg",
    category: "Succulents",
  },
  {
    id: "succ-3",
    name: "Aloe Vera",
    price: 12,
    img: "/images/aloe.jpg",
    category: "Succulents",
  },
  {
    id: "succ-4",
    name: "Haworthia",
    price: 11,
    img: "/images/haworthia.jpg",
    category: "Succulents",
  },
  {
    id: "succ-5",
    name: "String of Pearls",
    price: 18,
    img: "/images/string.jpg",
    category: "Succulents",
  },
  {
    id: "succ-6",
    name: "Sedum",
    price: 9,
    img: "/images/sedum.jpg",
    category: "Succulents",
  },
];

const grouped = plants.reduce((acc, plant) => {
  acc[plant.category] = acc[plant.category] || [];
  acc[plant.category].push(plant);
  return acc;
}, {});

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const inCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>
      <h2>Browse Plants</h2>
      {Object.keys(grouped).map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div className="plant-category">
            {grouped[cat].map((plant) => (
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
                  onClick={() => dispatch(addToCart(plant))}
                  disabled={inCart(plant.id)}
                >
                  {inCart(plant.id) ? "Added" : "Add to Cart"}
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
