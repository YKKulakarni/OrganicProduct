import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import owlIcon1 from '../asset/Images/icon1.png';
import owlIcon2 from '../asset/Images/icon2.png';
import owlIcon3 from '../asset/Images/icon3.png';

const options = {
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  items: 3,
  dots: false,
  nav: false,
  center: false,
  autoWidth: false,
};

const owlItems = [
  {
    icon: owlIcon3,
    name: "Curated Product",
    desc: "Perfect for self-care rituals, with pure ingredients",
  },
  {
    icon: owlIcon2,
    name: "Original Product",
    desc: "100% organic, no additives, chemicals, or artificial fragrances.",
  },
  {
    icon: owlIcon1,
    name: "Secure Payments",
    desc: "Simple, quick, and seamless checkout process",
  },
];

function Owl() {
  return (
    <div className="owlCar">
      <OwlCarousel className="owl-theme" {...options}>
        {owlItems.map((item, index) => (
          <div key={index} className="item">
            <img src={item.icon} alt="Preview" />
            <div className="owl-text">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default Owl;
