import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Package.css";
import img1 from "../Assets/img1.webp";
import img2 from "../Assets/img2.webp";
import img3 from "../Assets/img3.webp";
import img4 from "../Assets/img4.webp";
import img5 from "../Assets/img5.webp";
import img6 from "../Assets/img6.webp";
import phone from "../Assets/phone.webp";
import location from "../Assets/location.webp";
import { handleCall } from "../Components/WCintegration";

const packages = [
  {
    id: 1,
    placeName: "Beach Paradise",
    prices:"$1200",
    price: "$1000/night",
    rooms: 3,
    guests: 6,
    activities: ["Swimming", "Campfire", "River Access"],
  },
  {
    id: 2,
    placeName: "Mountain Escape",
    prices:"$1300",
    price:"$1000/night",
    rooms: 2,
    guests: 4,
    activities: ["Hiking", "Campfire", "River Access"],
  },
  {
    id: 3,
    placeName: "Forest Retreat",
    prices:"$1800",
    price: "$1500/night",
    rooms: 4,
    guests: 8,
    activities: ["Safari", "Campfire", "River Access"],
  },
  {
    id: 4,
    placeName: "Desert Adventure",
    prices:"$1800",
    price: "$1500/night",
    rooms: 5,
    guests: 10,
    activities: ["Camel Ride", "Campfire", "Sand Surfing"],
  },
  {
    id: 5,
    placeName: "Lake House",
    prices:"$2000",
    price: "$1800/night",
    rooms: 2,
    guests: 5,
    activities: ["Boating", "Campfire", "Fishing"],
  },
  {
    id: 6,
    placeName: "City Lights",
    prices:"$2000",
    price: "$1800/night",
    rooms: 3,
    guests: 6,
    activities: ["Nightlife", "Dining", "Shopping"],
  },
];

const images = [img1, img2, img3, img4, img5, img6];

const Package = () => {
  return (
    <div className="package-container">
      <div className="heading-section">
        <h2 className="heading">Exclusive Stay Packages</h2>
        <p className="description">
          Explore our exclusive stay packages offering unmatched experiences and luxurious accommodations tailored for you.
        </p>
      </div>

      <div className="package-grid-container">
        {packages.map((pkg, index) => (
          <div key={pkg.id} className="package-grid-item">
              <div className="image-container">
                <img src={images[index]} alt={pkg.placeName} />
                <p classname="price-detail">{pkg.prices}</p>
                <p classname="price-detail">{pkg.price}</p>
              </div>
              <div className="details">
                <div className="top-section">
                  <h3 className="place-name">{pkg.placeName}</h3>
                  <div className="icons">
                    <img src={phone} alt="Call Icon" className="icon" onClick= {handleCall()} />
                    <img src={location} alt="Location Icon" className="icon" />
                  </div>
                </div>
            <Link to={`/PackageDetail/${pkg.id}`} state={{ package: pkg }} className="link">
                <p className="package-info">
                  Rooms: {pkg.rooms} | Guests: {pkg.guests}</p>
                <p className="activities">{pkg.activities.join(" | ")}</p>
            </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
