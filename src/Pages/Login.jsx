import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import "../App.css";
import LandingNav from "./Nav/LandingNav";

const Login = () => {
  // Array of images
  const images = [
    "/Images/collegehack.jpg",
    "/Images/campus.svg",
    "/Images/images.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ for redirect

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    // Just a dummy validation (replace with API call later)
    if (email && password && userType) {
      navigate("/dashboard"); // redirect to Home page
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <>
      <div>
        <LandingNav />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Logo Header */}
        <div
          style={{
            width: "60%",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img
            src="/Images/images.png"
            alt="Logo"
            style={{ height: "80%", objectFit: "contain" }}
          />
        </div>

        {/* Main Section */}
        <div
          style={{
            width: "60%",
            height: "85vh",
            display: "flex",
          }}
        >
          {/* Left Side - Image Slider */}
          <div
            className="ImageSlider"
            style={{
              width: "40%",
              background: "#f1be4fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
              position: "relative",
            }}
          >
            {/* Slider Image */}
            <img
              src={images[currentIndex]}
              alt="Campus"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "0.5s ease-in-out",
              }}
            />

            {/* Dots Indicator */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              {images.map((_, index) => (
                <span
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: currentIndex === index ? "green" : "lightgray",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>

            {/* Footer Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                padding: "10px 0",
                color: "#2e2b2bff",
              }}
            >
              <h4>Privacy & Policy</h4>
              <h4>|</h4>
              <h4>Terms & Conditions</h4>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="Form"
            style={{
              width: "60%",
              background: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
            }}
          >
            <div
              style={{
                height: "25vh",
                width: "25vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src="/Images/Logo.png" alt="Main Logo" />
            </div>
            <form
              onSubmit={handleLogin} // ✅ trigger login
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginTop: 0,
              }}
            >
              <h1 style={{ textAlign: "center", marginTop: "90px" , fontSize: "35px" }}>LogIn</h1>

              <select
                style={inputStyle}
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="">User type</option>
                <option value="student">Student</option>
                <option value="alumni">Alumni</option>
                <option value="admin">Admin</option>
              </select>

              <input
                type="email"
                placeholder="Email"
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={inputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" style={btnStyle}>
                LogIn
              </button>
            </form>
            <p>
              New to AlmaConnect ? <a href="/Signup">SignUp </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
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
  background: "green",
  color: "white",
  cursor: "pointer",
};

export default Login;
