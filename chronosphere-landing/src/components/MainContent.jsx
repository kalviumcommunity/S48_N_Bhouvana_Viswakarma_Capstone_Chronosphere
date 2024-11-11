import React from 'react';
import './MainContent.css';
import WatchImage from './WatchImage';

function MainContent() {
  return (
    <div className="main-content">
      <div className="header">
        <h1 className="brand-name">ChronoSphere</h1>
        <p className="tagline">Where Every Second Counts</p>
      </div>
      <div className="watch-section">
        <WatchImage />
      </div>
      <div className="cta-section">
        <p className="cta-text">Explore the world of watches at just one place.</p>
        <button className="cta-button">Join Now</button>
      </div>
      <div className="features-section">
        <ul className="features-list">
          <li>Premium Quality</li>
          <li>Timeless Design</li>
          <li>Exclusive Collection</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
console.log('MainContent component rendered');