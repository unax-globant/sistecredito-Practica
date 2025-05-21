import React from "react";

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
    <img src={icon} alt={title} />
    <h3>{title}</h3>
    <strong>{highlight}</strong>
    <p>{description}</p>
  </div>
);

export default ValueCard;
