import React from 'react';
import './WatchImage.css';
import watchImage from '../assets/watch.jpg'; // Ensure this image path is correct

function WatchImage() {
  return (
    <div className="watch-image-container">
      <img src={watchImage} alt="Luxury Watch" className="watch-image" />
    </div>
  );
}

export default WatchImage;
