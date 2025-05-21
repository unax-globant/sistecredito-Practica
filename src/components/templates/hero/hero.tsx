import React from "react";
import "./Hero.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface HeroProps {
  title: string;
  heroText: string;
  button: ButtonProps;
  imageSrc: string;
  imageAlt?: string;
}

const Hero = ({ title, heroText, button, imageSrc, imageAlt }: HeroProps) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__title">{title}</h2>
        <p className="hero__text">{heroText}</p>
        <button className="hero__button" onClick={button.onClick}>
          {button.label}
        </button>
      </div>
      <div className="hero__image">
        <img src={imageSrc} alt={imageAlt || "Imagen decorativa"} />
      </div>
    </section>
  );
};

export default Hero;
