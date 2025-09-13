import React, { useState } from 'react';
import LandingNav from "./Nav/LandingNav";


// --- SVG Icon Components ---
// These SVG components are used to render the icons.
const PhoneIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-indigo-300"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> );
const MailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-indigo-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> );
const LocationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-3 text-indigo-300"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> );
const FacebookIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> );
const LinkedInIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> );
const TwitterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1.2-3.1 2-4.9 2.4-2.1 1-4.5 1.4-7.1 1.2-2.2-.2-4.4-.8-6.5-1.8-1.5-.7-2.9-1.5-4.2-2.5.3 1.1.9 2.1 1.7 3 1.4 1.5 3.2 2.6 5.1 3.2 2.3.7 4.7.9 7.1.6 2.3-.3 4.5-1 6.5-2.1 1.5-.8 2.8-1.9 3.9-3.1.2.3.4.7.5 1.1.2 1.1-.1 2.3-.8 3.3-1.4 2-3.6 3.2-6.1 3.5-2.5.3-5-.1-7.2-1.2-2.5-1.2-4.6-2.9-6.2-5.1-1.3-1.8-2-3.9-2-6.2 0-2.2.8-4.3 2.1-6 1.2-1.5 2.8-2.6 4.7-3.2 2.2-.7 4.5-.8 6.8-.4 2.5.4 4.9 1.4 7 2.8 1.1.7 2.2 1.6 3.1 2.7.1-.1.3-.2.4-.3.1 0 .2-.1.3-.1.3-.1.5-.2.8-.3 1.3-.6 2.5-1.4 3.6-2.4-1 .9-2 1.7-3.1 2.5-1.1.8-2.3 1.5-3.5 2z"/></svg> );


function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "web-development",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus("success");
    setTimeout(() => setSubmissionStatus(null), 4000);
  };

  return (
  <>
  <LandingNav />
    <div className="contact-form">
      {submissionStatus && (
        <div className="alert" role="alert">
          Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-grid">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-input"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-input"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+1 234 567 890"
          />
        </div>

        <div>
          <h3 className="form-heading">
            What type of user are you?
          </h3>
          <div className="radio-group">
            {["Alumni", "Student", "College Admin", "Other"].map(
              (service) => {
                const serviceId = service.toLowerCase().replace(" ", "-");
                return (
                  <div className="radio-item" key={serviceId}>
                    <input
                      id={serviceId}
                      name="serviceType"
                      type="radio"
                      value={serviceId}
                      checked={formData.serviceType === serviceId}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <label htmlFor={serviceId} className="radio-label">
                      {service}
                    </label>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button">
            Send
          </button>
        </div>
      </form>
    </div>
  </>
  );
}

function ContactInfoPanel() {
  return (
    <div className="contact-panel">
      <div className="contact-panel-content">
        <h2>Contact Information</h2>
        <p>Our team will get back to you within 24 hours.</p>
        <div className="contact-details">
          <div className="detail-item"> <PhoneIcon /> <span>+0123 4567 8910</span> </div>
          <div className="detail-item"> <MailIcon /> <span>hello@flowbase.com</span> </div>
          <div className="detail-item"> <LocationIcon /> <span>102 Street 2714 Don</span> </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon"><FacebookIcon /></a>
          <a href="#" className="social-icon"><LinkedInIcon /></a>
          <a href="#" className="social-icon"><TwitterIcon /></a>
        </div>
       </div>
      <div className="panel-bg panel-bg-1"></div>
      <div className="panel-bg panel-bg-2"></div>
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header">
          <h1>Contact Us</h1>
          <p>Any questions or remarks? Just write us a message!</p>
        </div>
        <div className="contact-card">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
      <style>
        {`
        body {
            background-color: #f3f4f6;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
        }

        .page-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 3rem 1.5rem;
            box-sizing: border-box;
        }

        .content-wrapper {
            max-width: 80rem;
            width: 100%;
        }

        .header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .header h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1f2937;
            margin: 0;
            letter-spacing: -0.025em;
        }

        .header p {
            margin-top: 0.5rem;
            font-size: 1rem;
            color: #6b7280;
        }

        .contact-card {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 1.5rem;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            padding: 0.5rem;
        }

        @media (min-width: 768px) {
            .contact-card {
                flex-direction: row;
            }
        }

        /* --- Contact Info Panel --- */
        .contact-panel {
            width: 100%;
            background-color: #4c3a9a;
            color: white;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border-radius: 1.5rem 1.5rem 0 0;
        }

        @media (min-width: 768px) {
            .contact-panel {
                width: 33.333333%;
                border-radius: 1.5rem 0 0 1.5rem;
            }
        }

        .contact-panel-content {
            position: relative;
            z-index: 10;
        }

        .contact-panel h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .contact-panel p {
            color: #c7d2fe;
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }

        .contact-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .detail-item {
            display: flex;
            align-items: center;
            font-size: 0.875rem;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(199, 210, 254, 0.3);
        }

        .social-icon {
            color: #c7d2fe;
            transition: color 0.2s;
        }

        .social-icon:hover {
            color: white;
        }

        /* Background shapes for the panel */
        .panel-bg {
            position: absolute;
            background-color: #f78f8f;
            border-radius: 9999px;
            opacity: 0.5;
        }

        .panel-bg-1 {
            bottom: -4rem;
            right: -4rem;
            width: 10rem;
            height: 10rem;
        }

        .panel-bg-2 {
            bottom: -5rem;
            left: -2.5rem;
            width: 8rem;
            height: 8rem;
            background-color: #7b68c7;
        }


        /* --- Contact Form --- */
        .contact-form {
            width: 100%;
            padding: 2rem;
        }

        @media (min-width: 768px) {
            .contact-form {
                width: 66.666667%;
            }
        }

        .alert {
            margin-bottom: 1rem;
            padding: 0.75rem;
            background-color: #d1fae5;
            color: #065f46;
            border-radius: 0.375rem;
            font-size: 0.875rem;
        }

        .form-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        @media (min-width: 640px) {
            .form-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #4b5563;
            margin-bottom: 0.25rem;
        }
        
        .form-heading {
            font-size: 0.875rem;
            font-weight: 500;
            color: #4b5563;
            margin-bottom: 0.5rem;
        }

        .form-input {
            display: block;
            width: 100%;
            padding: 0.5rem 0.75rem;
            background-color: #fff;
            color: #1f2937;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            font-size: 0.875rem;
            line-height: 1.5;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .form-input:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            border-color: #6366f1;
            box-shadow: 0 0 0 1px #6366f1;
        }

        textarea.form-input {
            resize: vertical;
        }

        .radio-group {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .radio-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }
        
        .radio-input {
            height: 1rem;
            width: 1rem;
            color: #4c3a9a;
            border-color: #d1d5db;
        }
        
        .radio-label {
            margin-left: 0.5rem;
            font-size: 0.875rem;
            color: #1f2937;
        }

        .submit-container {
            display: flex;
            justify-content: flex-end;
            padding-top: 1rem;
        }

        .submit-button {
            display: inline-flex;
            justify-content: center;
            padding: 0.75rem 2rem;
            border: 1px solid transparent;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            font-size: 0.875rem;
            font-weight: 500;
            color: white;
            background-color: #4c3a9a;
            transition: background-color 0.2s ease-in-out;
            cursor: pointer;
        }

        .submit-button:hover {
            background-color: #3b2d7a;
        }
      `}
      </style>
    </div>
  );
}
