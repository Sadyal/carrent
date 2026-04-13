import React from "react";
import "./CarDetails.css";
import { useCarDetails } from "../hooks/useCarDetails";

const CarDetails = () => {
  const { car } = useCarDetails();

  if (!car) return <h2 className="not-found">Car Not Found</h2>;

  return (
    <div className="car-details-page">
      <div className="car-hero">
        <div className="car-image-wrapper">
          <img src={car.image} alt={car.title} />
        </div>

        <h1 className="car-title">{car.title}</h1>

        <div className="car-specs">
          {car.specs.map((item, index) => (
            <span key={index} className="spec-chip">
              {item}
            </span>
          ))}
        </div>

        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default CarDetails;