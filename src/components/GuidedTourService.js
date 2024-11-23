import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GuidedTourService.css";
import handleWhatsAppMessage from "./WCintegration";
// import transportation from "./Assets/transportation.jpg";

const GuidedTourService = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="guided-tour-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore the Wonders</h1>
          <p>Join our expert-led guided tour to experience the magic of the City of Lights.</p>
          <button className="cta-button" onClick={handleWhatsAppMessage}>
            Book Now
          </button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <h2>Tour Highlights</h2>
        <ul>
          <li>Visit the Eiffel Tower and take a Seine River Cruise</li>
          <li>Explore the Louvre Museum with a professional guide</li>
          <li>Discover hidden gems in Montmartre</li>
          <li>Taste authentic French cuisine in local restaurants</li>
        </ul>
      </section>

      {/* Itinerary Section */}
      <section className="itinerary-section">
        <h2>Itinerary</h2>
        <div className="itinerary-grid">
          <div className="itinerary-item">
            <h3>Day 1: Arrival & Welcome</h3>
            <p>Arrive in Paris and enjoy a welcome dinner with your tour group.</p>
          </div>
          <div className="itinerary-item">
            <h3>Day 2: Landmarks & Museums</h3>
            <p>Visit the Eiffel Tower, Notre Dame, and the Louvre Museum with a guided tour.</p>
          </div>
          <div className="itinerary-item">
            <h3>Day 3: Cultural Immersion</h3>
            <p>Explore Montmartre and experience French art and culture.</p>
          </div>
          <div className="itinerary-item">
            <h3>Day 4: Farewell</h3>
            <p>Enjoy a farewell breakfast and say goodbye to your new friends.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {[
          { question: "What is the cancellation policy?", answer: "You can cancel up to 7 days before the tour for a full refund." },
          { question: "What should I pack?", answer: "Comfortable walking shoes, weather-appropriate clothing, and a camera!" },
          { question: "Is this tour suitable for children?", answer: "Yes, the tour is family-friendly, with activities suitable for all ages." },
        ].map((faq, index) => (
          <div
            className={`faq-item ${activeFAQ === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Explore ?</h2>
        <Link to="/GuidedTourDetail">
        <button className="cta-button" onClick={handleWhatsAppMessage}>More Detail</button>
        </Link>
      </section>
    </div>
  );
};

export default GuidedTourService;
