import React from 'react';
import { Link } from 'react-router-dom';
import './VisionTeaser.css';

const VisionTeaser = () => {
  return (
    <div className="vision-teaser">
      <div className="vision-content">
        <div className="section-header">
          <h2 className="section-title">Our Vision & Mission</h2>
          <p className="section-subtitle">Building a brighter future for Kayamandi</p>
        </div>
        
        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
              A society where women and children can live with dignity, equality, and opportunity, 
              free from violence and poverty.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower women and children in Kayamandi through education, support services, 
              and community development programs that foster self-reliance and positive change.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3>Our Values</h3>
            <ul className="values-list">
              <li>Compassion & Empathy</li>
              <li>Integrity & Transparency</li>
              <li>Community & Collaboration</li>
              <li>Empowerment & Education</li>
              <li>Respect & Dignity</li>
            </ul>
          </div>
        </div>
        
        <div className="vision-cta">
          <Link to="/vision" className="btn btn-outline-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisionTeaser;
