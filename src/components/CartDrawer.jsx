// src/components/CartDrawer.jsx
import React from "react";
import { FiTrash2, FiX, FiCreditCard } from "react-icons/fi";

const CartDrawer = ({ open, onClose, items = [], onRemove, onClear, onPurchase }) => {
  if (!open) return null;

  const total = items.reduce((s, it) => s + (it.cost || 0) * (it.qty || 1), 0);

  return (
    <div className="cart-drawer" role="dialog" aria-modal="true">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h3>Cart</h3>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost" onClick={onClear}>Clear</button>
          <button className="btn btn-ghost" onClick={onClose} title="Close"><FiX /></button>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="kicker-small">Your cart is empty.</p>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map(it => (
              <div key={it.id} className="cart-item" style={{ alignItems: "center" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <img src={it.image} alt={it.name} style={{ width: 72, height: 48, objectFit: "cover", borderRadius: 6 }} />
                  <div>
                    <div style={{ fontWeight: 800 }}>{it.name}</div>
                    <div style={{ fontSize: 13, color: "#555" }}>₹{it.cost.toLocaleString()}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ fontWeight: 700 }}>x{it.qty || 1}</div>
                  <button className="btn" onClick={() => onRemove(it.id)} title="Remove"><FiTrash2 /></button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, borderTop: "1px solid #eee", paddingTop: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ fontWeight: 700 }}>Total</div>
              <div style={{ fontWeight: 800 }}>₹{total.toLocaleString()}</div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn" onClick={onPurchase} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FiCreditCard /> Purchase
              </button>
              <button className="btn btn-ghost" onClick={onClose}>Continue</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
