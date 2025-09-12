import React, { useState } from "react";
import LandingNav from "./Nav/LandingNav";
import "../App.css";


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Alumni Connect?",
      answer:
        "Alumni Connect is a platform that bridges the gap between students and alumni, providing mentorship, opportunities, and networking.",
    },
    {
      question: "Do I need an account to access the portal?",
      answer:
        "Yes, to access personalized features like mentorship and job opportunities, you need to create an account.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "Yes! Both students and alumni can use the platform without any charges.",
    },
    {
      question: "How can alumni contribute?",
      answer:
        "Alumni can mentor students, share job opportunities, and participate in community events.",
    },
    {
      question: "Can I update my profile later?",
      answer:
        "Absolutely. You can edit and update your profile anytime after signing up.",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <LandingNav />

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-intro">
            Find answers to common questions about Alumni Connect.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Alumni Connect</h3>
            <p>Building bridges between students and alumni for a brighter future.</p>
          </div>
          <div className="footer-middle">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Our Mission</li>
              <li>Alumni</li>
              <li>Gallery</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-right">
            <h4>Contact Us</h4>
            <p>Email: info@alumniconnect.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: XYZ College, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Alumni Connect | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Faq;
