import React from 'react';
import './CSS/Service.css';
import tour from '../Assets/tour.webp';
import hotel from '../Assets/hotel.webp';
import transport from '../Assets/transport.webp';
import servicebg2 from '../Assets/servicebg2.webp';
import swim from '../Assets/swim.webp';
import cultural from '../Assets/cultural.webp';
import itineraries from '../Assets/itineraries.webp';
import { handleWhatsAppMessage } from '../Components/WCintegration';

const ServicePage = () => {

  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="service-hero-section">
        <img src={servicebg2} alt="Hero" className="service-hero-image"/>
        <h2 className="service-page-title">Our Services</h2>
        <button className="service-hero-button" onClick={() => handleWhatsAppMessage("bookNow")}>
          Book Now
        </button>
      </div>
      <div className="service-hero-content"><h3>Plan Your Next Getaway Today!</h3>
        <p>
          Ready to plan your dream vacation? Contact us today or click the 'Book Now' button to start your journey. 
          Our travel consultants are here to assist you with every detail, ensuring a seamless and enjoyable experience.
        </p></div>
      {/* Service Grid */}
      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon">
            <img src={hotel} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Stay Packages</h3>
          <p className="service-description">Exclusive stay packages tailored for your comfort and budget.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={tour} alt="ServiceImage" />
          </div>
          <h3 className="service-name">City Tours</h3>
          <p className="service-description">Guided tours to explore the iconic attractions of the city.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={swim} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Adventure Activities</h3>
          <p className="service-description">Thrilling adventures including trekking, rafting, and ziplining.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={transport} alt="ServiceImage" />

          </div>
          <h3 className="service-name">Transportation Service</h3>
          <p className="service-description">Reliable car rentals and airport transfers for hassle-free travel.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={cultural} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Cultural Experiences</h3>
          <p className="service-description">Immerse yourself in the local traditions, festivals, and cuisines.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
          <img src={itineraries} alt="ServiceImage" />
          </div>
          <h3 className="service-name">Customized Itineraries</h3>
          <p className="service-description">Personalized travel plans designed to meet your unique interests.</p>
        </div>
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default ServicePage;