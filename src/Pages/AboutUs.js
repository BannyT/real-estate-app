import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p className="subheading">
            Building bridges between people and dream properties.
          </p>
          <p>
            At <strong>StayNest</strong>, we’re redefining how people find short and long-term stays.
            From cozy apartments to luxury beach houses, we connect travelers, families, and professionals
            with beautiful homes in top destinations.
          </p>
          <p>
            Our platform is crafted with performance, security, and trust at its core. We believe in empowering hosts and creating premium experiences for guests — with transparency, comfort, and convenience.
          </p>
          <p>
            Whether you’re booking your first getaway or listing your property, our mission is to make the journey seamless and memorable.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80"
            alt="Team working together"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
