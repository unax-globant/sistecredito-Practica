import React from "react";
import Slider from "react-slick";
import "./team.css";

interface Member {
  name: string;
  title: string;
  image: string;
}

interface TeamProps {
  members: Member[];
}

export default function Team({ members }: TeamProps) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="team-section">
      <div className="team-header">
        <h2>
          Así es <br />
          <strong>nuestro equipo</strong>
        </h2>
        <p>
          Más de 800 personas con un propósito en común:{" "}
          <span className="green">Hacerlo posible.</span>
        </p>
      </div>

      <div className="team-grid desktop">
        {members.map((member, idx) => (
          <div className="team-member" key={idx}>
            <img src={member.image} alt={member.name} />
            <h4>{member.name}</h4>
            <p>{member.title}</p>
          </div>
        ))}
      </div>

      <div className="team-slider mobile">
        <Slider {...settings}>
          {members.map((member, idx) => (
            <div className="team-member" key={idx}>
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
