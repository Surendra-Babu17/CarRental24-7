// src/components/Cars.jsx
import React from "react";
import key from '../assets/rent.png'
const Cars = ({ car, onRent }) => {
  return (
    <div className="car-card">
      <div className="car-img-box">
        <img src={car.image} alt={car.name} className="car-image" />
      </div>

      <h3 className="car-name">{car.name}</h3>

      <p className="car-price">₹{car.cost.toLocaleString()} / day</p>

      <p className="car-info">
        ⭐ {car.rating} | {car.fuelType} | {car.color}
      </p>

      <button className="rent-btn" onClick={() => onRent(car)}>
        <img src={key} style={{ width: 20, marginRight: 6 }} />
        Rent Now
      </button>
    </div>
  );
};

export default Cars;
