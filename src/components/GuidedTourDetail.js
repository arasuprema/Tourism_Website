import React from "react";
import { useNavigate } from "react-router-dom";
import "./GuidedTourDetail.css";

const GuidedTourDetail = () => {
  const navigate = useNavigate();

  const handleBackToBooking = () => {
    navigate("/book-now");
  };

  return (
    <div className="guided-tour-details">
      <section className="details-header">
        <h1>Guided Tour Details</h1>
        <p>Experience the best of Paris with our exclusive guided tours.</p>
      </section>

      <section className="tour-features">
        <h2>Why Choose Our Tour?</h2>
        <ul>
          <li>Professional and experienced local guides.</li>
          <li>Exclusive access to top attractions.</li>
          <li>Comfortable transport throughout the tour.</li>
          <li>Small groups for a personalized experience.</li>
          <li>Flexible itineraries to suit your interests.</li>
        </ul>
      </section>

      <section className="customer-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"This was the trip of a lifetime! The guide was knowledgeable and friendly."</p>
            <span>- Sarah J.</span>
          </div>
          <div className="testimonial">
            <p>"I loved every moment of the tour. The small group made it so much better."</p>
            <span>- Mark W.</span>
          </div>
          <div className="testimonial">
            <p>"Amazing experience! The itinerary was perfect, and the food was incredible."</p>
            <span>- Emily R.</span>
          </div>
        </div>
      </section>

      <section className="additional-info">
        <h2>Additional Information</h2>
        <p>
          Our tours are designed for all age groups, and we ensure you experience Paris like a local.
          Whether you’re interested in art, history, or cuisine, we’ve got you covered.
        </p>
      </section>

      <div className="details-footer">
        <link to="/Contact"></link>
        <button className="cta-button" onClick={handleBackToBooking}>
          Back to Booking
        </button>
      </div>
    </div>
  );
};

export default GuidedTourDetail;
