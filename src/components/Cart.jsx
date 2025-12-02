import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-drawer">
      <h3>Cart Items</h3>
      {cart.map(car => (
        <div key={car.id} className="cart-item">
          <span>{car.name}</span>
          <button onClick={() => removeFromCart(car.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
