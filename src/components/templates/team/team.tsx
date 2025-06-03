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
  const Header = () => (
    <div className="team-header-block">
      <p className="team-lead">{text.titulo}</p>
      <h2 className="team-title">
        <strong>{text.highlight}</strong>
      </h2>
      <p className="team-subtitle">{text.subtitle}</p>
      <p className="team-highlight-green">{text.subtitleHighlight}</p>
    </div>
  );

  return (
    <section className="team-section">
      {/* GRID DESKTOP */}
      <div className="team-grid">
        <Header />
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

      {/* SWIPER MOBILE/TABLET */}
      <div className="team-swiper-wrapper">
        <Header />
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // opcional: para tablets más anchas
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
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
