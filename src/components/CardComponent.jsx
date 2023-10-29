// CardComponent.js
import React from "react";

const CardComponent = ({ title, rating, description, footer }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-icons-12">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`fa-solid fa-star ${
                index < rating ? "full" : "empty"
              }`}
            ></i>
          ))}
        </div>
        <p className="card-text">{description}</p>
        <p className="card-footer">{footer}</p>
      </div>
    </div>
  );
};

export default CardComponent;
