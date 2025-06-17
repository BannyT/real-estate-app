import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: '✅',
    title: 'Verified Listings',
    description: 'All properties are thoroughly vetted to ensure safety, quality, and comfort.',
  },
  {
    icon: '⚡',
    title: 'Instant Booking',
    description: 'Book your next stay in just a few clicks with our fast and secure system.',
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'Our friendly team is always here to help — day or night.',
  },
  {
    icon: '💰',
    title: 'Affordable Rates',
    description: 'Enjoy premium stays at competitive prices, with no hidden fees.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
