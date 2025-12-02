// src/pages/Rent.jsx
import React from "react";
import CarsList from "../components/CarsList";

const Rent = ({ cart, addToCart, removeFromCart, clearCart }) => {
  return (
    <div style={{ padding: 24 }}>
      <h2>Available Cars</h2>
      <CarsList onAddToCart={addToCart} />

      <div style={{ marginTop: 28 }}>
        <h3>Your Cart ({cart.length})</h3>
        {cart.length === 0 ? (
          <p className="kicker">No cars in cart.</p>
        ) : (
          <>
            {cart.map(c => (
              <div key={c.id} className="cart-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{c.name}</div>
                  <div style={{ fontSize: 13 }}>₹{c.cost.toLocaleString()}</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn" onClick={() => removeFromCart(c.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <button className="btn btn-ghost" onClick={clearCart}>Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Rent;
