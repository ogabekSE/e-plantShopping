import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <button
          className="get-started-button"
          onClick={() => (window.location.href = "/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt={item.name} width="60" />
          <div>{item.name}</div>
          <div>Unit: ${item.price}</div>
          <div>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({ id: item.id, quantity: item.quantity - 1 }),
                )
              }
              disabled={item.quantity === 1}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({ id: item.id, quantity: item.quantity + 1 }),
                )
              }
            >
              +
            </button>
          </div>
          <div>Total: ${(item.price * item.quantity).toFixed(2)}</div>
          <button
            className="cart-item-delete"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Delete
          </button>
        </div>
      ))}
      <div>
        <strong>Cart Total: ${total.toFixed(2)}</strong>
      </div>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button
        className="get-started-button"
        onClick={() => (window.location.href = "/")}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
