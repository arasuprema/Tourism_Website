import React from 'react';
import './CSS/WCintegration.css';
import wicon from '../Assets/wicon.webp';
import cicon from '../Assets/cicon.webp';

// Exporting handleWhatsAppMessage
export function handleWhatsAppMessage(actionType) {
  const baseWhatsappUrl = "https://api.whatsapp.com/send?phone=+123456789";

  if (actionType === "default") {
    const message = "Hi! Welcome to Tourism service. How can we assist you today?";
    window.open(`${baseWhatsappUrl}&text=${encodeURIComponent(message)}`, "_blank");
  } else if (actionType === "bookNow") {
    const message = "Hello! Thanks for choosing Tourism Service. Please confirm the details to proceed with your booking.";
    window.open(`${baseWhatsappUrl}&text=${encodeURIComponent(message)}`, "_blank");
  } else {
    console.error("Invalid action type passed to handleWhatsAppMessage");
  }
}

// Define and export handleCall function
export function handleCall() {
  const phoneNumber = "1234567890"; // Replace with actual number
  window.location.href = `tel:${phoneNumber}`;
}

// Default export for the WCintegration component
const WCintegration = () => {
  return (
    <div className="interaction-container">
      <button className="call-button" onClick={handleCall}>
        <img src={cicon} alt="Call Icon" />
      </button>
      <button className="whatsapp-button" onClick={() => handleWhatsAppMessage("default")}>
        <img src={wicon} alt="WhatsApp Icon" />
      </button>
    </div>
  );
};

export default WCintegration;
