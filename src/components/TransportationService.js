import React from "react";
import { useNavigate } from "react-router-dom";
import "./TransportationService.css";
import tour from "./Assets/tour.webp";
import WCintegration from "./WCintegration";

const TransportationService = () => {
  const navigate = useNavigate();

  const handleWhatsAppMessage = () => {
    navigate("/handleWhatsAppMessage");
  };

  return (
    <div className="transportation-service">
      <section className="service-header">
        <h1>Transportation Services</h1>
        <img src={tour} alt="TourImage" />
        <p>Comfortable, reliable, and stress-free transportation for your tour.</p>
      </section>

      <section className="transportation-options">
        <h2>Our Transportation Options</h2>
        <div className="options-grid">
          <div className="option-card">
        <img src={tour} alt="TourImage" />
            <h3>Private Car</h3>
            <p>Enjoy a luxurious and private experience with our chauffeured cars.</p>
          </div>
          <div className="option-card">
        <img src={tour} alt="TourImage" />
            <h3>Minibus</h3>
            <p>Perfect for small groups, our minibuses ensure a comfortable journey.</p>
          </div>
          <div className="option-card">
        <img src={tour} alt="TourImage" />
            <h3>Bus</h3>
            <p>Ideal for large groups, our buses are spacious and equipped with modern amenities.</p>
          </div>
        </div>
      </section>

      <section className="customer-benefits">
        <h2>Why Choose Our Transportation?</h2>
        <ul>
          <li>Professional and courteous drivers.</li>
          <li>Clean and well-maintained vehicles.</li>
          <li>Flexible schedules tailored to your itinerary.</li>
          <li>Affordable pricing with no hidden fees.</li>
        </ul>
      </section>

      <section className="customer-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"The private car service was top-notch! The driver was punctual and friendly."</p>
            <span>- John D.</span>
          </div>
          <div className="testimonial">
            <p>"The bus was clean, spacious, and perfect for our group. Highly recommend!"</p>
            <span>- Anna K.</span>
          </div>
          <div className="testimonial">
            <p>"I loved the minibus service. It was comfortable and made our trip so smooth."</p>
            <span>- Maria L.</span>
          </div>
        </div>
      </section>

      <div className="service-footer">
        <link to="/Contact">
        <button className="cta-button" onClick={handleWhatsAppMessage}>
          BookNow
        </button></link>
      </div>
    </div>
  );
};

export default TransportationService;
