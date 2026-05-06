import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../features/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(({ id, name, img, qty, price }) => (
        <div key={id} className="cart-row">
          <img src={img} alt={name} width="60" height="60" />
          <div>{name}</div>
          <div>Unit: ${price}</div>
          <div>
            <button
              onClick={() => dispatch(decrementQty(id))}
              disabled={qty === 1}
            >
              -
            </button>
            <span>{qty}</span>
            <button onClick={() => dispatch(incrementQty(id))}>+</button>
          </div>
          <div>Total: ${(qty * price).toFixed(2)}</div>
          <button onClick={() => dispatch(removeFromCart(id))}>Delete</button>
        </div>
      ))}
      <div>
        <strong>Cart Total: ${total.toFixed(2)}</strong>
      </div>
      <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
