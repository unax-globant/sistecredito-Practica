import React, { useEffect, useState } from "react";
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

interface TeamProps {
  members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="team-section">
      {isMobile ? (
        <div className="team-mobile">
          <div className="team-header-block">
            <h2 className="team-title">
              Así es <br />
              <span className="team-highlight">nuestro equipo</span>
            </h2>
            <p className="team-subtitle">
              Más de 800 personas con un propósito en común:{" "}
              <span className="highlight-green">Hacerlo posible.</span>
            </p>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
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
      ) : (
        <div className="team-grid">
          <div className="team-header-block">
            <h2 className="team-title">
              Así es <br />
              <span className="team-highlight">nuestro equipo</span>
            </h2>
            <p className="team-subtitle">
              Más de 800 personas con un propósito en común:{" "}
              <span className="highlight-green">Hacerlo posible.</span>
            </p>
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
      )}
    </section>
  );
};

export default Team;
