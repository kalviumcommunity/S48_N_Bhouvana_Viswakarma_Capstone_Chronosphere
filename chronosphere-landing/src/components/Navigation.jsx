import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#home" className="nav-item">Home</a>
      <a href="#contact" className="nav-item">Contact</a>
      <a href="#about" className="nav-item">About</a>
      <a href="#shop" className="nav-item">Shop</a>
    </nav>
  );
}

export default Navigation;
