import React from "react";
import "./valueCard.css";

interface ValueCardProps {
  icon: string;
  title: string;
  highlight: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  highlight,
  description,
}) => (
  <div className="value-item">
    <img src={icon} alt={title} className="value-icon" />
    <div className="value-text">
      <p className="value-title">
        {title} <strong>{highlight}</strong>
      </p>
      <p className="value-description">{description}</p>
    </div>
  </div>
);

export default ValueCard;
