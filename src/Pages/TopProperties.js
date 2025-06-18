import React, { useState } from 'react';
import properties from './PropertyData';
import './TopProperties.css';
import { useNavigate } from "react-router";
const TopProperties = () => {
  const [query, setQuery] = useState('');
  const navigaton =useNavigate()

  const filteredProperties = properties.filter((prop) =>
    prop.title.toLowerCase().includes(query.toLowerCase()) ||
    prop.location.toLowerCase().includes(query.toLowerCase())
  );
    

     const moveToBooking =()=>{
         navigaton('booking')
     }
 
  return (
    <section className="top-properties">
      <h2>Top Properties</h2>

      <input
        type="text"
        placeholder="Search by location or title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      <div className="property-grid">
        {filteredProperties.map((prop) => (
          <div className="property-card" key={prop.id}>
            <img src={prop.image} alt={prop.title} />
            <div className="property-details">
              <h3>{prop.title}</h3>
              <p>{prop.location}</p>
              <span>{prop.price}</span>
              <button onClick={moveToBooking} className="book-now">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProperties;
