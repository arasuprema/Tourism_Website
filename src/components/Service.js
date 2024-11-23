import React from 'react';
import {Link} from 'react-router-dom';
import tour from './Assets/tour.webp';
import hotel from './Assets/hotel.webp';
import transport from './Assets/transport.webp';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      <h2 className="page-title">Our Services</h2>
      <div className="service-list">
        <Link to="/stayPackage" className="service-item-link">
          <div className="service-item">
          <img src={hotel} alt="Hotel image" />
            <h3>Stay Package</h3>
            <p>Explore our best accommodations for a relaxing stay.</p>
          </div>
        </Link>
        <Link to="/GuidedTourService" className="service-item-link">
          <div className="service-item">
          <img src={tour} alt="Tour image" />
            <h3>Guided Tour</h3>
            <p>Join our expert-led tours to experience the best attractions.</p>
          </div>
        </Link>
        <Link to="/TransportationService" className="service-item-link">
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

