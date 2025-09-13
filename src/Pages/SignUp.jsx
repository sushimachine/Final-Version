import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LandingNav from "./Nav/LandingNav";

const SignUp = () => {
  // Array of images
  const images = [
    "/Images/collegehack.jpg",
    "/Images/campus.svg",
    "/Images/images.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [admissionYear, setAdmissionYear] = useState(null);
  const [graduationYear, setGraduationYear] = useState(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <LandingNav />

      <div style={container}>
        {/* Logo Header */}
        <div style={logoHeader}>
          
        </div>

        {/* Main Section */}
        <div style={mainSection}>
          {/* Left Side - Image Slider */}
          <div style={sliderBox}>
            <img
              src={images[currentIndex]}
              alt="Campus"
              style={sliderImg}
            />

            {/* Dots Indicator */}
            <div style={dotContainer}>
              {images.map((_, index) => (
                <span
                  key={index}
                  style={{
                    ...dotStyle,
                    background: currentIndex === index ? "green" : "lightgray",
                  }}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>

            {/* Footer Links */}
            <div style={footerLinks}>
              <h4>Privacy & Policy</h4>
              <h4>|</h4>
              <h4>Terms & Conditions</h4>
            </div>
          </div>

          {/* Right Side - Form */}
          <div style={formBox}>
            <div style={{
            height: '25vh',
            width: '25vh',
            display: 'flex',
            flexDirection: 'column',
            marginTop:'25vh',
          }}>
            
            <img src="/Images/Logo.png" />
           
          </div>
            <form style={formStyle}>
              <h2 style={{ textAlign: "center", marginBottom: "20px" , fontSize: "35px" }}>
                Sign Up
              </h2>

              <input type="text" placeholder="Full Name" style={inputStyle} />
              <input type="email" placeholder="Email" style={inputStyle} />
              <input type="password" placeholder="Password" style={inputStyle} />
              <input
                type="password"
                placeholder="Confirm Password"
                style={inputStyle}
              />

              <select style={inputStyle}>
                <option>Select college</option>
                <option>TECHNO MAIN SALT LAKE</option>
                <option>HERITAGE INSTITUTE OF TECHNOLOGY</option>
                <option>IEM KOLKATA</option>
                <option>NSEC</option>
              </select>

              <input
                type="text"
                placeholder="Enrollment Number"
                style={inputStyle}
              />

              {/* Admission & Graduation Year Pickers */}
              <div style={{ display: "flex", gap: "10px" }}>
                <DatePicker
                  selected={admissionYear}
                  onChange={(date) => setAdmissionYear(date)}
                  showYearPicker
                  dateFormat="yyyy"
                  placeholderText="Admission Year"
                  className="year-picker"
                />
                <DatePicker
                  selected={graduationYear}
                  onChange={(date) => setGraduationYear(date)}
                  showYearPicker
                  dateFormat="yyyy"
                  placeholderText="Graduation Year"
                  className="year-picker"
                />
              </div>

              <select style={inputStyle}>
                <option>Select course</option>
                <option>B-Tech</option>
                <option>BCA</option>
                <option>MCA</option>
                <option>BBA</option>
                <option>MBA</option>
                <option>B-Pharma</option>
              </select>

              <button style={btnStyle}>Create Account</button>
            </form>

            <p>
              Already have an account?{" "}
              <a href="/Login" style={{ color: "dodgerblue" }}>
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

/* --- Inline Styles --- */
const container = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logoHeader = {
  width: "60%",
  height: "15vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
};

const mainSection = {
  width: "60%",
  height: "85vh",
  display: "flex",
};

const sliderBox = {
  width: "40%",
  background: "#f1be4fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "10px",
};

const sliderImg = {
  width: "100%",
  height: "350px",
  objectFit: "cover",
  borderRadius: "8px",
  transition: "0.5s ease-in-out",
};

const dotContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "10px",
};

const dotStyle = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  cursor: "pointer",
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  padding: "10px 0",
  color: "#2e2b2bff",
};

const formBox = {
  width: "60%",
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
};

const formStyle = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnStyle = {
  padding: "12px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "none",
  background: "dodgerblue",
  color: "white",
  cursor: "pointer",
};

export default SignUp;
