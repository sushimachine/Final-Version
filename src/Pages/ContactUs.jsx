import React, { useState } from "react";
import "./ContactUsPage.css";
import LandingNav from "./Nav/LandingNav";

// --- SVG Icons (same as before) ---
const PhoneIcon = () => (
  <svg width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="icon">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.16.96.43 1.92.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.27 1.85.54 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

// (MailIcon, LocationIcon, FacebookIcon, LinkedInIcon, TwitterIcon → keep same as you had)

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", serviceType: "alumni", message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <>
    <div>
      <LandingNav />
    </div>
    <div className="contact-form">
      {status === "success" && (
        <div className="alert-success">Your message has been sent.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label>First Name</label>
            <input
              type="text" name="firstName" value={formData.firstName}
              onChange={handleChange} className="form-input" required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text" name="lastName" value={formData.lastName}
              onChange={handleChange} className="form-input" required
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email" name="email" value={formData.email}
          onChange={handleChange} className="form-input" required
        />

        <label>Phone</label>
        <input
          type="tel" name="phone" value={formData.phone}
          onChange={handleChange} className="form-input"
        />

        <label>What type of user are you?</label>
        <div className="radio-group">
          {["Alumni", "Student", "College Admin", "Other"].map((role) => (
            <label key={role} className="radio-label">
              <input
                type="radio" name="serviceType"
                value={role.toLowerCase()} checked={formData.serviceType === role.toLowerCase()}
                onChange={handleChange}
              />
              {role}
            </label>
          ))}
        </div>

        <label>Message</label>
        <textarea
          name="message" rows="3" value={formData.message}
          onChange={handleChange} className="form-input" required
        ></textarea>

        <button type="submit" className="submit-btn">Send</button>
      </form>
    </div>
    </>
  );
}

function ContactInfoPanel() {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>Our team will get back to you within 24 hours.</p>
      <div className="info-items">
        <div><PhoneIcon /> +0123 4567 8910</div>
        <div>📧 hello@flowbase.com</div>
        <div>📍 102 Street 2714 Don</div>
      </div>
      <div className="social-links">
        <a href="#">🌐 FB</a>
        <a href="#">💼 LinkedIn</a>
        <a href="#">🐦 Twitter</a>
      </div>
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="contact-page">
      <div className="header">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <div className="contact-container">
        <ContactInfoPanel />
        <ContactForm />
      </div>
    </div>
  );
}
