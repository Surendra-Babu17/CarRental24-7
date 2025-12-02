// src/components/CarsList.jsx
import React from "react";
import Car from "./Cars";         // component single card
import carsData from "./carsData"; // default export in your file

const CarsList = ({ onAddToCart }) => {
  return (
    <div className="cars-list">
      {carsData.map(car => (
        <Car key={car.id} car={car} onRent={onAddToCart} />
      ))}
    </div>
  );
};

export default CarsList;
