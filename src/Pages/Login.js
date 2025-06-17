import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add Firebase authentication logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p>Log in to continue your property journey</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="login-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
