import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', form);
    alert('Booking submitted! We will contact you soon.');
    setForm({ fullName: '', email: '', checkIn: '', checkOut: '', guests: 1 });
  };

  return (
    <section className="booking-wrapper">
      <div className="booking-card">
        <div className="property-summary">
          <img
            src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1600&q=80"
            alt="Property"
          />
          <div className="property-details">
            <h2>Modern Beach Villa</h2>
            <p>Entebbe, Uganda</p>
            <p><strong>$120</strong> / night</p>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <h3>Book Your Stay</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Check-In</label>
          <input
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            required
          />
          <label>Check-Out</label>
          <input
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            required
          />
          <label>Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </section>
  );
};

export default BookingPage;
