import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Team.css";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
}

interface TextoTitulo {
  titulo: string;
  highlight: string;
  subtitle: string;
  subtitleHighlight: string;
}

interface TeamProps {
  members: TeamMember[];
  text: TextoTitulo;
}

const Team: React.FC<TeamProps> = ({ members, text }) => {
  return (
    <section className="team-section">
      <div className="team-grid">
        <div className="team-card team-header-block">
          <p className="team-lead">{text.titulo}</p>
          <h2 className="team-title">
            <strong>{text.highlight}</strong>
          </h2>
          <p className="team-subtitle">{text.subtitle}</p>
          <p className="team-highlight-green">{text.subtitleHighlight}</p>
        </div>

        {members.map((member) => (
          <div key={member.id} className="team-card">
            <img
              src={member.photoUrl}
              alt={member.name}
              className="team-image"
            />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="team-swiper-wrapper">
        <div className="team-header-block">
          <p className="team-lead">{text.titulo}</p>
          <h2 className="team-title">
            <strong>{text.highlight}</strong>
          </h2>
          <p className="team-subtitle">{text.subtitle}</p>
          <p className="team-highlight-green">{text.subtitleHighlight}</p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-prev-custom",
            prevEl: ".swiper-button-next-custom",
          }}
          className="team-swiper"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="team-image"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-custom-buttons">
          <button className="swiper-button-prev-custom">←</button>
          <button className="swiper-button-next-custom">→</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
