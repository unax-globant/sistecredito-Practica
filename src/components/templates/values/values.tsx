import React from "react";
import "./values.css";

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
            <div className="value-item" key={idx}>
              <img
                src={value.icon}
                alt={value.title}
                height={400}
                width={300}
                className="value-icon"
              />
              <div>
                <h3 className="value-title">
                  {value.title} <strong>{value.highlight}</strong>
                </h3>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
