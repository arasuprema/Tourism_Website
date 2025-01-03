import React from "react";
import "./CSS/HomeSection3.css";
import transportation from '../Assets/transportation.webp';
import hotel from '../Assets/hotel.webp';
import tour from '../Assets/tour.webp';
import transport from '../Assets/transport.webp';
import swim from '../Assets/swim.webp';
import img1 from '../Assets/img1.webp';
import img2 from '../Assets/img2.webp';
import img3 from '../Assets/img3.webp';
import img4 from '../Assets/img4.webp';
import img5 from '../Assets/img5.webp';
import img6 from '../Assets/img6.webp';
const HomePage = () => {
  const services = [
    {
      id: 1,
      name: "Stay Package",
      description: "Relax and unwind with our curated stay packages.",
      image: hotel,
    },
    {
      id: 2,
      name: "Guided Tours",
      description: "Experience the best attractions with expert guides.",
      image: tour,
    },
    {
      id: 3,
      name: "Transportation",
      description: "Hassle-free transport options for your convenience.",
      image: transport,
    },
    {
      id: 4,
      name: "Adventure Activities",
      description: "Exciting adventures to make your trip unforgettable.",
      image: swim,
    },
  ];

  return (
    <div className="Homepage-container">
      {/* Home2 */}
      <h3 className="Home2-heading">Why Choose Us</h3>
          <p className="Home2-description">
            Discover why we are the best choice for your travel needs. With
            top-notch services and customer satisfaction as our priority, your journey is in good hands.
          </p>
      <div className="Home2-container">
      
        <div className="Home2-left">
          <div className="Home2-services-grid">
            {services.map((service) => (
              <div key={service.id} className="Home2-service-card">
                <img src={service.image} alt={service.name} className="Home2-service-image" />
                <h4 className="Home2-service-name">{service.name}</h4>
                <p className="Home2-service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="Home2-right">
          <img src={img6} alt="Tourism" className="Home2-image" />
        </div>
      </div>

      {/* Home3 */}
      <div className="Home3-container">
        <div className="Home3-top">
          <div className="Home3-image">
            <img src={img1} alt="Modern Bedroom Design" className="Home3-image1" />
            <img src={img2} alt="Modern Bedroom Design" className="Home3-image2" />
          </div>
          <div className="Home3-text">
            <h2>We Help You Explore the World</h2>
            <p>
              Embark on unforgettable journeys with our expert travel services. 
              Whether you're seeking serene landscapes, cultural landmarks, or thrilling adventures, 
              we ensure your travel experience is seamless and memorable.
            </p>
            <ul>
              <li>
                <strong>Personalized Itineraries:</strong> Tailored travel plans to match your preferences.
              </li>
              <li>
                <strong>World-Class Hospitality:</strong> Experience comfort and luxury at every step.
              </li>
              <li>
                <strong>Exclusive Deals:</strong> Enjoy great savings on premium packages.
              </li>
            </ul>
            <button className="Home3-btn">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
