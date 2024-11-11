// src/components/Sidebar.js

import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="page-numbers">
        <div className="number active">01</div>
        <div className="number">02</div>
        <div className="number">03</div>
        <div className="number">04</div>
      </div>
      <div className="decorative-circles">
        <div className="circle top-left"></div>
        <div className="circle bottom-left"></div>
      </div>
    </div>
  );
}

export default Sidebar;
