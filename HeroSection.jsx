import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-container">
    <div className="hero-text">
      <h1 className="hero-main">Main Bold Black Text</h1>
      <p className="hero-sub">This is the greyish subtext that explains more.</p>
    </div>
    <div className="hero-image">
      <img src="your-image-path.jpg" alt="Hero" />
    </div>
  </div>
);

export default HeroSection;
