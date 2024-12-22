import React from 'react';
import './card.css'; // You can add custom styling in this file.

const Card = ({ title, content, image }) => {

  return (
    
    <div className="card">
      <img src={image} alt="Card Image" className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
