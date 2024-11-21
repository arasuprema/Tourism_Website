import React from 'react';
import { Link } from 'react-router-dom';
import tour from './Assets/tour.png';
import hotel from './Assets/hotel.png';
import transport from './Assets/transport.png';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      <h2 className="page-title">Our Services</h2>
      <div className="service-list">
        <Link to="/stay-package" className="service-item-link">
          <div className="service-item">
          <img src={hotel} alt="Hotel image" />
            <h3>Stay Package</h3>
            <p>Explore our best accommodations for a relaxing stay.</p>
          </div>
        </Link>
        <Link to="/guided-tour" className="service-item-link">
          <div className="service-item">
          <img src={tour} alt="Tour image" />
            <h3>Guided Tour</h3>
            <p>Join our expert-led tours to experience the best attractions.</p>
          </div>
        </Link>
        <Link to="/transportation" className="service-item-link">
          <div className="service-item">
          <img src={transport} alt="Transport image" />
            <h3>Transportation</h3>
            <p>Reliable transport options for your journeys.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Service;

