import React from 'react';
import './CSS/GallerySection2.css';
import Image1 from '../Assets/pic_8.webp';  // Corrected path
import Image2 from '../Assets/pic_9.webp';  // Corrected path
import Image3 from '../Assets/pic_10.webp';  // Corrected path
import Image4 from '../Assets/pic_11.webp';  // Corrected path
import Image5 from '../Assets/pic_12.webp';  // Corrected path
import Image6 from '../Assets/pic_13.webp';  // Corrected path

const images = [Image1,Image2,Image3,Image4,Image5,Image6];

const Gallery2 = () => {
  return (
    <div className="gallery-containers">
      <h1 className="gallery-title">Our Tourist Place Photos</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-images" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery2;

