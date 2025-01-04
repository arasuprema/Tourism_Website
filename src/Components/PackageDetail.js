import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CSS/PackageDetail.css";
import img1 from "../Assets/img1.webp";
import img2 from "../Assets/img2.webp";
import img3 from "../Assets/img3.webp";

const packages = [
  {
    id: 1,
    placeName: "Beach Paradise",
    image: "../Assets/img1.webp",
    rooms: 3,
    guests: 6,
    category: "Luxury",
    accommodationType: "Villa",
    prices:"$1200",
    price: "$1000/night",
    features: ["Free Wi-Fi", "Private Pool", "Ocean View"],
    activities: ["Swimming", "Campfire", "River Access"],
    terms:
      ["Check-in at 2 PM", "Check-out at 11 AM", "Pets not allowed.","Cancellations must be made 48 hours in advance."],
    description:
      "Experience the serene beauty of Beach Paradise with its luxurious accommodations and exclusive activities for a memorable stay.",
  },
  {
    id: 2,
    placeName: "Mountain Escape",
    image: "../Assets/img2.webp",
    rooms: 2,
    guests: 4,
    category: "Premium",
    accommodationType: "Cabin",
    prices:"$1300",
    price:"$1000/night",
    features:["Scenic Views", "Fireplace", "Hiking Trails"],
    activities:["Hiking", "Campfire", "River Access"],
    terms:["Check-in at 12 PM", "Check-out at 11 AM", "No smoking indoors.", "Cancellations must be made 72 hours in advance."],
    description:"Escape to the mountains and enjoy a relaxing retreat with picturesque views and adventurous activities.",
  },
  {
    id: 3,
    placeName: "Forest Retreat",
    image: "../Assets/img3.webp",
    rooms: 4,
    guests: 8,
    category: "Eco-Friendly",
    accommodationType: "Cottage",
    prices:"$1800",
    price: "$1500/night",
    features: ["Nature Walks", "Eco-Tourism Activities", "Solar-Powered"],
    activities: ["Safari", "Bird Watching", "River Boating"],
    terms: [
      "Check-in at 3 PM",
      "Check-out at 10 AM",
      "No loud music after 10 PM.",
      "Cancellations must be made 24 hours in advance."
    ],
    description:
      "Discover the thrill of the wilderness at Forest Retreat, where nature and luxury meet for an unforgettable experience.",
  },
  {
    id: 4,
    placeName: "Desert Adventure",
    image: "../Assets/img4.webp",
    rooms: 5,
    guests: 10,
    category: "Adventure",
    accommodationType: "Tent",
    prices:"$1800",
    price: "$1500/night",
    features: ["Camel Ride", "Star Gazing", "Bonfire Nights"],
    activities: ["Sand Surfing", "Quad Biking", "Campfire"],
    terms: [
      "Check-in at 1 PM",
      "Check-out at 10 AM",
      "Pets allowed with prior approval.",
      "Non-refundable after booking confirmation."
    ],
    description:
      "Embark on a desert adventure filled with thrilling activities and luxurious accommodations.",
  },
  {
    id: 5,
    placeName: "Lake House",
    image: "../Assets/img5.webp",
    rooms: 2,
    guests: 5,
    category: "Relaxation",
    accommodationType: "Cabin",
    prices:"$2000",
    price: "$1800/night",
    features: ["Lakefront", "Fishing Gear Provided", "Private Dock"],
    activities: ["Boating", "Fishing", "Swimming"],
    terms: [
      "Check-in at 2 PM",
      "Check-out at 11 AM",
      "Smoking only allowed in outdoor areas.",
      "Cancellations are refundable up to 48 hours before check-in."
    ],
    description:
      "Relax by the lake and enjoy peaceful surroundings, exciting water activities, and cozy stays.",
  },
  {
    id: 6,
    placeName: "City Lights",
    image: "../Assets/img6.webp",
    rooms: 3,
    guests: 6,
    category: "Urban",
    accommodationType: "Apartment",
    prices:"$2000",
    price: "$1800/night",
    features: ["City View", "Modern Amenities", "Close to Attractions"],
    activities: ["Nightlife", "Dining", "Shopping"],
    terms: [
      "Check-in at 4 PM",
      "Check-out at 11 AM",
      "No pets allowed.",
      "Early check-in available upon request."
    ],
    description:
      "Immerse yourself in the vibrant energy of the city with luxury accommodations and endless entertainment options.",
  },

];

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) {
    navigate("/"); // Redirect to home if package ID is invalid
    return null;
  }

  return (
    <div className="package-detail-container">
      {/* Hero Section */}
      <div className="pkg-hero-section">
      {pkg.id === 1 && (
        <>
          <img src={require("../Assets/img1.webp")} alt="Beach Paradise" className="hero-image" />
          <img src={require("../Assets/img2.webp")} alt="Beach Paradise 2" className="hero-image" />
          <img src={require("../Assets/img3.webp")} alt="Beach Paradise 3" className="hero-image"/>
        </>
        )}
        {pkg.id === 2 && (
          <>
          <img src={require("../Assets/img1.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img2.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img3.webp")} alt="Mountain Escape" className="hero-image" />
          </>
        )}
        {pkg.id === 3 && (
          <>
          <img src={require("../Assets/img1.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img2.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img3.webp")} alt="Mountain Escape" className="hero-image" />
          </>
        )}{pkg.id === 4 && (
          <>
          <img src={require("../Assets/img1.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img2.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img3.webp")} alt="Mountain Escape" className="hero-image" />
          </>
        )}{pkg.id === 5 && (
          <>
          <img src={require("../Assets/img1.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img2.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img3.webp")} alt="Mountain Escape" className="hero-image" />
          </>
        )}{pkg.id === 6 && (
          <>
          <img src={require("../Assets/img1.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img2.webp")} alt="Mountain Escape" className="hero-image" />
          <img src={require("../Assets/img3.webp")} alt="Mountain Escape" className="hero-image" />
          </>
        )}
        <h1 className="pkg-hero-title">{pkg.placeName}</h1>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="left-section">
          {/* Grid Section */}
          <div className="grid-container">
            <div className="grid-item">
              <h3>Accommodation Type</h3>
              <p>{pkg.accommodationType}</p>
            </div>
            <div className="grid-item">
              <h3>Rooms</h3>
              <p>{pkg.rooms}</p>
            </div>
            <div className="grid-item">
              <h3>Category</h3>
              <p>{pkg.category}</p>
            </div>
            <div className="grid-item">
              <h3>Guests</h3>
              <p>{pkg.guests}</p>
            </div>
          </div>

          {/* About Section */}
          <div className="place-description">
            <h2>About {pkg.placeName}</h2>
            <p>{pkg.description}</p>
          </div>

          {/* Pricing Details */}
          <div className="pricing-details">
            <h2>Pricing</h2>
            <p>{pkg.prices}</p>
            <p>{pkg.price}</p>
          </div>

          {/* Features */}
          <div className="features-section">
            <h2>Features</h2>
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="activities-section">
            <h2>Activities</h2>
            <ul>
              {pkg.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>

          {/* Terms and Conditions */}
          <div className="terms-section">
            <h2>Terms & Conditions</h2>
            <ul>
              {pkg.terms.map((term,index) =>(
                <li key={index}>{term}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="right-section">
          <div className="contact-form">
            <h2>Enquire Now</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
