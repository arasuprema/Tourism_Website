import React from 'react';
import { Link } from 'react-router-dom';
import wicon from './Assets/wicon.webp';
import cicon from './Assets/cicon.webp';
import food from './Assets/food.webp';
import swim from './Assets/swim.webp';
import chess from './Assets/chess.webp';
import './PackageDetail.css'; // Make sure to add your CSS for styling

const PackageDetail = () => {
  return (
    <div className="package-detail-container">
      {/* Heading */}
      <h2 className="package-detail-heading">Discover The Benefits</h2>
      <h4 className="package-detail-heading">Our Stay Packgae</h4>

      {/* Grid of 5 Categories */}
      <div className="package-category-grid">
        <div className="package-category">
          <h3>Camping Tent</h3>
          <p>₹1700/ Per Person</p>
        </div>
        <div className="package-category">
          <h3>Camping Tent</h3>
          <p>₹1700/ Per Person</p>
        </div>
        <div className="package-category">
          <h3>Rooms without AC</h3>
          <p>₹2100/ Per Person</p>
        </div>
        <div className="package-category">
          <h3>AC Room</h3>
          <p>₹2200/ Per Person</p>
        </div>
        <div className="package-category">
          <h3>Tent in front of Swimming Pool</h3>
          <p>₹1900/ Per Person</p>
        </div>
      </div>

      {/* Big Containers for Package Details */}
      <div className="package-details-container">
        <div className="package-detail-item">
          <img src={food} alt="Food Image"/>
          <h3>BreakFast</h3>
          <p>
            (Idli - sambar, poha, Bread - Jam Tea - coffee) or (Puri - Bhaji, upama, Bread - Jam Tea - Coffee)</p>
          <h3>Lunch Buffet</h3>
          <p>
          (Veg & non-veg) UNLIMITED. (Salad, curd, Chapati, 2 type of veg Sabji, white Rice, jeera Rice, Dal, sweet)</p>
          <h3>Dinner Buffet</h3>
          <p>
          (Veg & non-veg) UNLIMITED. ( Salad, chapati, 2 type veg Sabji, white Rice, Masala Rice, Dal, & Chicken curry)</p>
          <p>Evening Tea or Coffee</p>
        </div>
        <div className="package-detail-item">
        <img src={chess} alt="game Image"/>
          <h3>Indoor Activities</h3>
          <ul><li><p>Morning Nature Walk.</p></li>
          <li><p>Bonfire/Campfire</p></li>
          <li><p>Swimming pool</p></li>
          <li><p>Badminton </p>	 </li>
          <li><p>Volley Ball</p></li>
          <li><p>Archery </p></li>
          <li><p>Dartboard</p> </li>
          <li><p>Chess</p></li>
          <li><p>Ludo</p></li>
          </ul>
        </div>
        <div className="package-detail-item">
        <img src={swim} alt="Swim Image"/>

          <h3>Adventure Water Games</h3>
          <ul><li><p>Boating</p></li>
          <li><p>Swimming</p></li></ul>
          <h3>Sightseeing’s Ticket Basis</h3>
          <ul><li><p>Backwater.</p></li>
          <li><p>Disney Park.</p></li>
          <li><p>Crocodile park.</p></li>
          </ul>  
        </div>
        <div className="package-detail-item">
          <h3>Note</h3>
          <ul><li><p>	Children below the Age 5 years are allowed free of cost.</p></li>
          <li><p>Children between the age of 5-10 years will be charged 50%</p></li>
          <li><p>Children above the age of 10 years will be considered as Adults and will be charged full.</p></li>
          <li><p>Sight seeing & Transportation are not included in package.</p></li>
          <li><p>No cancellation. No amount will be refunded.</p></li>
          </ul>  
        </div>
      </div>
      <div className="get-in-touch-container">
        <Link to="/Contact" className="get-in-touch-button">Get in Touch</Link>
      </div>
    </div>
  );
};

export default PackageDetail;
