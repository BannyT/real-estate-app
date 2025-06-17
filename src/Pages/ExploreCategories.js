import React from 'react';
import './ExploreCategories.css';

const categories = [
  { title: 'Apartments', icon: '🏢' },
  { title: 'Beach Houses', icon: '🏖️' },
  { title: 'Cabins', icon: '🏡' },
  { title: 'Luxury Villas', icon: '🏰' },
  { title: 'Treehouses', icon: '🌲' },
  { title: 'Countryside', icon: '🏞️' },
];

const ExploreCategories = () => {
  return (
    <section className="explore-categories">
      <h2>Explore Categories</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategories;
