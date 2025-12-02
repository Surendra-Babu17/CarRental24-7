// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ user, cartCount, onCartToggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title">JK  CAR Vehicles Hub</h1>

        <div
          className="cart-box"
          role="button"
          title="Open cart"
          onClick={onCartToggle}
          style={{ cursor: "pointer" }}
        >
          <FiShoppingCart style={{ verticalAlign: "middle", marginRight: 8 }} />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>

      <div className="nav-right">
        <Link className="nav-link" to="/" style={{border:"black"}}>Home</Link>
        <Link className="nav-link" to="/rent" href>Cars</Link>

        {user ? (
          <span className="nav-user">{user.userName}</span>
        ) : (
          <Link className="nav-link" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
