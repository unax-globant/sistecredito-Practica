import React from "react";
import "./testimonial.css";

interface TestimonialProps {
  videoSrc: string;
  quote: string;
  author: string;
  role: string;
}

const Testimonial = ({ videoSrc, quote, author, role }: TestimonialProps) => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-video-wrapper">
        <video
          className="testimonial-video"
          controls
          height={1440}
          width={1080}
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </video>
      </div>

      <div className="testimonial-quote-box">
        <p className="quote-mark">“</p>
        <p className="testimonial-quote">{quote}</p>
        <p className="quote-mark">”</p>
        <div className="testimonial-author">
          <strong>{author}</strong>
          <p>{role}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
