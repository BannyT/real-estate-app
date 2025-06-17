import React from 'react';
import './LocationPreview.css';

const LocationPreview = () => {
  return (
    <section className="location-preview">
      <h2>Find Properties Near You</h2>
      <p>Explore stays across top locations — from beachside views to city skylines.</p>

      <div className="map-container">
        <iframe
          title="Property Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31891.813265801043!2d32.5825203!3d0.3475968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb200280d6b7%3A0x7e4a2949f92d004!2sKampala!5e0!3m2!1sen!2sug!4v1718567672650!5m2!1sen!2sug"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationPreview;
