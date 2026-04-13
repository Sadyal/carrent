import React from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({
  id,
  image,
  title,
  specs,
  onClick, // external control (SOLID)
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (onClick) {
      onClick(id);
    } else {
      navigate(`/car-detail/${id}`);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="model-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={title} className="car-image" />

      <h3 className="model-title">{title}</h3>

      <div className="rent-specs">
        {specs.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className="actions">
        <button
          className="btn primary"
          onClick={handleButtonClick}
        >
          Rent Now
        </button>

        <button
          className="btn secondary"
          onClick={handleButtonClick}
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;