import React, { useState } from "react";
import './Style.css'

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo">
            <a href="/home">

            <img src="/Images/Logo.png" alt="Site Logo" height="90vh" width="110vh"/>
            </a>
        </div>

        {/* Desktop Menu */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <a href="#mission">Our Mission</a>
          <a href="/faqs">FAQ's</a>
          <a href="#whyus">Why Us</a>
          <a href="/contactus">Contact</a>
          <a href="/Login" className="login-btn">Login</a>
        </div>

        {/* Mobile Toggle Button */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default LandingNav;
