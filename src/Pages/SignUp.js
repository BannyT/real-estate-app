import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // TODO: Add Firebase signup logic here
    console.log('Signing up with:', name, email, password);
  };

  return (
    <section className="signup-section">
      <div className="signup-card">
        <h2>Create Account 🏡</h2>
        <p>Join to explore exclusive property listings</p>

        <form onSubmit={handleSignUp} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
