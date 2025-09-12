import React, { useState, useEffect } from "react";
import LandingNav from "./Nav/LandingNav";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Landing = () => {
  // 🔹 Banner Images
  const bannerImages = [
    "/Images/banner.png",
    "/Images/banner1.png",
    "/Images/banner2.jpg",
    "/Images/banner3.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // 🔹 Gallery Images
  const galleryImages = [
    "/Images/gallery1.jpeg",
    "/Images/gallery2.jpg",
    "/Images/gallery3.jpeg",
    "/Images/gallery4.jpeg",
    "/Images/gallery5.jpeg",
    "/Images/gallery6.jpeg",
    "/Images/gallery4.jpeg",
    "/Images/gallery2.jpg",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      {/* Navbar */}
      <LandingNav />

      {/* Banner Section */}
      <div style={{ width: "100%", height: "10vh" }}></div>
      <section className="banner">
        <img
          src={bannerImages[currentIndex]}
          alt="banner"
          className="banner-image"
        />
      </section>

      {/* Our Mission Section */}
      <section className="mission">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <p className="mission-intro">
            We are committed to building a strong alumni-student community that
            inspires, guides, and empowers future generations.
          </p>

          <div className="mission-cards">
            <div className="mission-card">
              <img src="/Images/signal.png" alt="network" />
              <h3>Connect</h3>
              <p>Creating a bridge between students and alumni worldwide.</p>
            </div>

            <div className="mission-card">
              <img src="/Images/finish.png" alt="mentorship" />
              <h3>Mentorship</h3>
              <p>
                Providing career guidance and support through alumni mentorship.
              </p>
            </div>

            <div className="mission-card">
              <img src="/Images/catering.png" alt="opportunity" />
              <h3>Opportunities</h3>
              <p>
                Opening doors to internships, jobs, and collaborations across
                industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni Section */}
      <section className="alumni">
        <div className="alumni-container">
          <h2>Notable Alumni</h2>
          <p className="alumni-intro">
            Meet some of our distinguished alumni who have made remarkable
            contributions in their fields.
          </p>

          <div className="alumni-slider">
            {[
              {
                img: "/Images/alumni1.jpg",
                name: "Rohan Verma",
                role: "CEO, Tech Innovators",
              },
              {
                img: "/Images/alumni2.jpg",
                name: "Priya Sharma",
                role: "Data Scientist, Google",
              },
              {
                img: "/Images/alumni3.jpg",
                name: "Amit Patel",
                role: "Founder, Startup Hub",
              },
              {
                img: "/Images/alumni4.jpg",
                name: "Sneha Kapoor",
                role: "Professor, MIT",
              },
            ].map((alumni, index) => (
              <div className="alumni-card" key={index}>
                <img src={alumni.img} alt={alumni.name} />
                <h3>{alumni.name}</h3>
                <p>{alumni.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="gallery-container">
          <h2>Gallery</h2>
          <p className="gallery-intro">
            A glimpse of our vibrant campus life, events, and achievements.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <img src={img} alt={`gallery-${index}`} />
              </div>
            ))}
          </div>

          {/* Lightbox */}
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={galleryImages.map((img) => ({ src: img }))}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
          />
        </div>
      </section>
       {/* Why Us Section */}
      <section className="why-us">
        <div className="why-container">
          <h2>Why Choose Us?</h2>
          <div className="why-cards">
            <div className="why-card">
              <img src="/Images/innovation.png" alt="innovation" />
              <h3>Innovation</h3>
              <p>We nurture creativity and innovation in every student.</p>
            </div>
            <div className="why-card">
              <img src="/Images/community.png" alt="community" />
              <h3>Community</h3>
              <p>A vibrant community of learners, leaders, and change-makers.</p>
            </div>
            <div className="why-card">
              <img src="/Images/global.png" alt="global" />
              <h3>Global Reach</h3>
              <p>Our alumni are making an impact all around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Alumni Connect</h3>
            <p>
              Building bridges between students and alumni for a brighter
              future.
            </p>
          </div>
          <div className="footer-middle">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Our Mission</li>
              <li>Alumni</li>
              <li>Gallery</li>
              <li>Contact</li>
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

export default Landing;
