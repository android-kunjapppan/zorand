import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner max-width">
        <div>
          <div className="pill">✨ Transforming Digital Experiences</div>
          <h1>Step Into The <span>Future of Marketing</span></h1>
          <p>Immerse yourself in cutting‑edge digital strategies that captivate, convert and create lasting connections.</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Start Your Journey</a>
            <button className="btn-outline">Watch Demo</button>
          </div>

          <div className="stats">
            <div className="stat"><h3>50+</h3><p>Projects</p></div>
            <div className="stat"><h3>98%</h3><p>Success</p></div>
            <div className="stat"><h3>20M</h3><p>Reach</p></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">ROI Growth <strong>+340%</strong></div>
          <div className="floating-card card-2">Target Reach <strong>99.8%</strong></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;