import React from 'react';
import './WCintegration.css';
import wicon from './Assets/wicon.png'
import cicon from './Assets/cicon.png'

const WCintegration = () => {
  const handleWhatsAppMessage = () => {
    const phoneNumber = "1234567890"; // Replace with actual number
    const message = "Hello, I would like to connect!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    const phoneNumber = "1234567890"; // Replace with actual number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="interaction-container">
      <button className="call-button" onClick={handleCall}>
      <img src={cicon}  alt="Tour image" />
      </button>
      <button className="whatsapp-button" onClick={handleWhatsAppMessage}>
      <img src={wicon}  alt="Tour image" />
      </button>
    </div>
  );
};

export default WCintegration;
