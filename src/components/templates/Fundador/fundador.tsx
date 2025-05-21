import React from "react";
import "./fundador.css";

interface FundadorProps {
  founderImage: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
}

const Fundador = ({
  founderImage,
  title,
  subtitle,
  paragraphs,
}: FundadorProps) => {
  return (
    <section className="about">
      <div className="about__intro">
        <h2>
          <span className="span_intro">{title}</span>
          <br />
          <strong>{subtitle}</strong>
        </h2>
        {paragraphs.map((text, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: text }}></p>
        ))}
      </div>

      <div className="about__image">
        <img src={founderImage} height={600} alt="Fundador de Sistecrédito" />
      </div>
    </section>
  );
};

export default Fundador;
