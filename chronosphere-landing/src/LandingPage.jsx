// src/components/LandingPage.jsx

import React from 'react';
import './Navigation.css';
import './Sidebar.css';
import './components/MainContent.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-elements">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      <nav className="navigation">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </nav>
      <aside className="sidebar">
        <div className="numbers">
          <span className="active">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </div>
      </aside>
      <main className="main-content animate-on-scroll">
        <div className="watch-image animate-on-scroll">
          <img src="/path-to-watch-image.jpg" alt="Watch" />
        </div>
        <div className="content">
          <h1 className="animate-on-scroll">ChronoSphere</h1>
          <p className="slogan animate-on-scroll">WHERE EVERY SECOND COUNTS</p>
          <p className="description animate-on-scroll">
            Explore the world of watches at just one place.
          </p>
          <a href="#" className="join-button animate-on-scroll">Join Now</a>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
