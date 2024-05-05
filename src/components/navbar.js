import React,{useState} from 'react';
import './navbar.css'; 
// import logo from './logo1.jpg'
import SigninPopup from './signin.js';
import SignupPopup from './signup.js'

const Navbar = () => {
    const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
    const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

    const handleOpensigninPopup = () => {
        setIsSignInPopupOpen(true);
    };
  
    const handleClosesigninPopup = () => {
        setIsSignInPopupOpen(false);
    };

    

  const handleOpenSignUpPopup = () => {
    setIsSignUpPopupOpen(true);
  };

  const handleCloseSignUpPopup = () => {
    setIsSignUpPopupOpen(false);
  };


  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                <a href="/">JobHub</a>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                </div>
                <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="/" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="/about" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                    <a href="/services" className="navbar-link">Services</a>
                </li>
                <li className="navbar-item">
                    <a href="/contact" className="navbar-link">Contact</a>
                </li>
                <button onClick={handleOpensigninPopup}>Sign In</button>
                <button onClick={handleOpenSignUpPopup}>Sign Up</button>
                <SignupPopup isOpen={isSignUpPopupOpen} onClose={handleCloseSignUpPopup} />   
                </ul>
            </div>
        </nav>
        <SigninPopup isOpen={isSignInPopupOpen} onClose={handleClosesigninPopup} />
    </>
  );
}

export default Navbar;
