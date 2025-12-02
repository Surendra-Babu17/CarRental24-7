// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import Navbar from "./components/NavBar";
import CartDrawer from "./components/CartDrawer"; // new component
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rent from "./pages/Rent";

function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user")) || null; } catch { return null; }
  });
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart")) || []; } catch { return []; }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => { if (user) localStorage.setItem("user", JSON.stringify(user)); else localStorage.removeItem("user"); }, [user]);
  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);

  const addToCart = (car) => {
    setCart(prev => {
      if (prev.find(c => c.id === car.id)) {
        toast.info(`${car.name} already in cart`);
        return prev;
      }
      toast.success(`${car.name} added to cart`);
      return [...prev, { ...car, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(c => c.id !== id));
    toast.success("Removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  // Purchase handler: simple flow — clear cart and show toast
  const handlePurchase = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    // Here you could call API to place order
    toast.success("Purchase successful — Thank you!");
    setCart([]);
    setIsCartOpen(false);
  };

  const PrivateRoute = ({ children }) => (user ? children : <Navigate to="/login" replace />);

  return (
    <div className="app-container">
      <Navbar
        user={user}
        cartCount={cart.length}
        onCartToggle={() => setIsCartOpen((s) => !s)}
      />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
        onPurchase={handlePurchase}
      />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route
            path="/rent"
            element={
              <PrivateRoute>
                <Rent cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
