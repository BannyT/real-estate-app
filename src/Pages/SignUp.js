import React, { useState } from 'react';
import './SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  
  // signup functions
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setLoading(false);
  };

  return (
    <section className="signup-section">
      <div className="signup-card">
        <h2>Create Account 📝</h2>
        <p>Join us and explore amazing properties</p>

        <form onSubmit={handleSignUp} className="signup-form">
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
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
