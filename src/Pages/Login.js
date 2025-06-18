import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js'; // Adjust the path
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();



  // method to login

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to homepage
    } catch (err) {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <h2>Welcome Back 👋</h2>
        <p>Log in to continue your property journey</p>

        <form onSubmit={handleLogin} className="login-form">
          {error && <p className="error">{error}</p>}

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

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
