import React from "react";
import Slider from "react-slick";
import "../../style.css";

const importAll = (r) => r.keys().map(r);

const certImages = importAll(
  require.context("../../Assets/certs", false, /\.(png|jpe?g|svg)$/)
);

function CertCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    fade: false,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    className: "cert-slider",
    swipe: true,
    swipeToSlide: true
  };

  return (
    <div className="cert-container">
      <h2 className="cert-heading">
        My <strong className="purple">Certifications</strong>
      </h2>
      <div className="cert-carousel">
        <Slider {...settings}>
          {certImages.map((img, idx) => (
            <div className="cert-item" key={idx}>
              <div className="cert-card">
                <img
                  src={img}
                  alt={`Certification ${idx + 1}`}
                  className="cert-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CertCarousel;
