import React from "react";
import "./values.css";
import ValueCard from "../../molecules/ValueCard";

interface ValueItem {
  icon: string;
  title: string;
  highlight: string;
  description: string;
}

interface ValuesProps {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDetails: string;
  imageSrc: string;
  values: ValueItem[];
}

const Values = ({
  sectionTitle,
  sectionSubtitle,
  imageSrc,
  values,
  sectionDetails,
}: ValuesProps) => {
  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-image">
          <img src={imageSrc} alt="App preview" height={600} width={450} />
        </div>

        <div className="values-content">
          <h2 className="values-title">
            {sectionTitle} <br />
            <strong>{sectionSubtitle}</strong>
          </h2>
          <h5>{sectionDetails}</h5>

          {values.map((value, idx) => (
            <ValueCard key={idx} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
