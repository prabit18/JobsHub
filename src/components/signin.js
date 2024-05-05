import React, { useState } from 'react';
import './signin.css'; // CSS file for styling

const SigninPopup = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = (event) => {
    event.preventDefault(); // Prevent form submission refresh
    if (username && password) {
      alert(`Signing in as ${username}`);
      onClose(); // Close the popup after successful sign-in
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    isOpen && (
      <div className="signin-popup-overlay">
        <div className="signin-popup">
          <button className="close-button" onClick={onClose}>
            &times; {/* Unicode for a close button */}
          </button>
          <h2>Sign In</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignin}>
            <div className="form-group">
              <label htmlFor="username">Username/Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default SigninPopup;
