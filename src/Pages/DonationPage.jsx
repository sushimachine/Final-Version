import React, { useState, useEffect } from "react";
import "./DonationPage.css";

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
    paymentMethod: "UPI",
  });

  // Load Razorpay script dynamically
  useEffect(() => {
    if (!document.getElementById("razorpay-script")) {
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    // Validate fields
    if (!formData.name || !formData.email || !formData.amount) {
      alert("Please fill all required fields.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded! Please try again.");
      return;
    }

    const amountInPaise = Number(formData.amount) * 100;
    if (amountInPaise <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const options = {
      key: "rzp_test_CkjkBHB3TQcyK1", // Replace with your Razorpay Key ID
      amount: amountInPaise,
      currency: "INR",
      name: "Alma Connect",
      description: "Donation",
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: {
        color: "#007bff",
      },
      handler: function (response) {
        alert(
          `Thank you ${formData.name}! Payment successful. Payment ID: ${response.razorpay_payment_id}`
        );
        setFormData({
          name: "",
          email: "",
          amount: "",
          message: "",
          paymentMethod: "UPI",
        });
      },
      modal: {
        ondismiss: function () {
          alert("Payment cancelled.");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const galleryImages = [
    "/Images/img1.jpg",
    "/Images/img2.jpg",
    "/Images/img3.jpg",
    "/Images/img4.jpg",
    "/Images/img5.jpg",
    "/Images/img6.jpg",
  ];

  return (
    <div className="donation-page">
      {/* Donation Form */}
      <div className="donation-form-container">
        <h1>Support Our Mission ❤️</h1>
        <form
          className="donation-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Leave a message (optional)"
            value={formData.message}
            onChange={handleChange}
          />
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="UPI">UPI</option>
            <option value="Card">Credit/Debit Card</option>
            <option value="NetBanking">Net Banking</option>
            <option value="Wallet">Wallet</option>
          </select>
          <button
            type="button"
            className="donate-btn"
            onClick={handlePayment}
          >
            Donate Now
          </button>
        </form>
      </div>

      {/* Image Gallery */}
      <div className="donation-gallery">
        <h2>See the Impact 🌍</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <img key={index} src={img} alt={`cause-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
