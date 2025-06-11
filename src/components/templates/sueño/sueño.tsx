import React from "react";
import "./sueño.css";

export interface SueñoTexto {
  titulo: string;
  highlight: string;
  subtitle: string;
}

export interface SueñoBloque {
  id: string;
  imageUrl: string;
  heading: string;
  highlight: string;
  description: string;
  boldText?: string;
  reverse?: boolean;
}

interface SueñoProps {
  text: SueñoTexto;
  bloques: SueñoBloque[];
}

const Sueño: React.FC<SueñoProps> = ({ text, bloques }) => {
  return (
    <section className="sueno-section">
      <div className="sueno-header">
        <h2>
          {text.titulo} <strong>{text.highlight}</strong>
        </h2>
        <p className="sueno-subtitle">{text.subtitle}</p>
      </div>

      {bloques.map((bloque) => (
        <div
          key={bloque.id}
          className={`sueno-bloque ${bloque.reverse ? "reverse" : ""}`}
        >
          <img src={bloque.imageUrl} alt="" className="sueno-image" />
          <div className="sueno-text">
            <h3>
              {bloque.heading}{" "}
              <span className="sueno-highlight-green">{bloque.highlight}</span>
            </h3>
            {bloque.boldText && (
              <p className="sueno-bold-text">{bloque.boldText}</p>
            )}
            <p>{bloque.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Sueño;
