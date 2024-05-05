import React, { useState } from 'react';
import './signup.css';

const SignupPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (email && username && password) {
      alert(`Account created for ${username}`);
      onClose(); // Close the popup on successful signup
    } else {
      setError('All fields are required.');
    }
  };

  return (
    isOpen && (
      <div className="signup-popup-overlay">
        <div className="signup-popup">
          <button className="close-button" onClick={onClose}>
            &times; {/* Unicode symbol for a close button */}
          </button>
          <h2>Sign Up</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default SignupPopup;
