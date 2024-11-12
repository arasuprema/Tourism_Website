import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';
import tour from './Assets/tour.png';
import hotel from './Assets/hotel.png';
import transport from './Assets/transport.png';

const services = [
  {
    id: 1,
    title: "Guided Tours",
    // description: "Explore the best attractions with our experienced guides.",
    icon: "fa-solid fa-person-walking"
  },
  {
    id: 2,
    title: "Hotel Bookings",
    // description: "We offer the best hotels and resorts for a comfortable stay.",
    icon: "fa-solid fa-bed"
  },
  {
    id: 3,
    title: "Transportation",
    // description: "Private and shared transport options to move around easily.",
    icon: "fa-solid fa-car"
  },

];

const ServicePage = () => {
  return (
    <div className="service-container">
      <h2 className="page-title">Our Services</h2>
    <div className="service-img">
    <img src ={tour} alt="Tourimage"></img>
      <img src ={hotel} alt="Tourimage"></img>
      <img src ={transport} alt="Tourimage"></img>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <Link to={`/service/${service.id}`} key={service.id} className="service-item-link">
            <div className="service-item">
              <i className={`${service.icon} service-icon`}></i>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
