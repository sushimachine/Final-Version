import React, { useState } from "react";
import "./Dashboard.css";
import Community from "./Community";
import DonationPage from "./DonationPage";
import EventsPage from "./Events";
import JobOpportunitiesPage from "./JobOpportunitiesPage";
import StartupBoard from "./StartupBoard";
import { AlumniPortal } from "./AlumniDirectory";

import { MdGroups2 } from "react-icons/md";
import {
  FiHome,
  FiBriefcase,
  FiUsers,
  FiGlobe,
  FiHeart,
  FiMenu,
  FiLogOut,
  FiBell,
  FiMail,
  FiInfo,
  FiSearch,
  FiCalendar,
} from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false); // ✅ New state
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: <FiHome /> },
    { name: "Alumni", icon: <MdGroups2 /> },
    { name: "Jobs/Internship", icon: <FiBriefcase /> },
    { name: "StartupBoard", icon: <FiGlobe /> },
    { name: "Community", icon: <FiUsers /> },
    { name: "Donations", icon: <FiHeart /> },
    { name: "Events", icon: <FiCalendar /> },
  ];

  const notifications = [
    "Your application to Microsoft was viewed",
    "New startup event this weekend",
    "Alumni meetup scheduled for Friday",
  ];

  const newsUpdates = [
    "🚀 New Startup Accelerator program launched",
    "🎓 Alumni webinar scheduled for next week",
    "💼 50+ new internships added this month",
  ];

  const handleLogout = () => {
    alert("Logged out successfully!");
  };

  const recentActivities = [
    { id: 1, type: "Job Application", detail: "Applied to Google Internship", time: "2 hours ago" },
    { id: 2, type: "Donation", detail: "Donated ₹500 to Alumni Fund", time: "1 day ago" },
    { id: 3, type: "Community", detail: "Posted in Startup Ideas group", time: "3 days ago" },
    { id: 4, type: "Startup", detail: "Registered 'TechVision' Startup", time: "5 days ago" },
  ];

  const jobData = [
    { month: "Jan", jobs: 3 },
    { month: "Feb", jobs: 5 },
    { month: "Mar", jobs: 2 },
    { month: "Apr", jobs: 6 },
    { month: "May", jobs: 4 },
    { month: "Jun", jobs: 7 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <div style={{
            background: "grey",
            borderRadius: "20px",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img src="/Images/Logo.png" height="130vh" width="130vh" />
          </div>
          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FiMenu />
          </button>
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={activeItem === item.name ? "active" : ""}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Area */}
      <div className="main-area">
        {/* Topbar */}
        <div className="topbar">
          {/* Search Bar */}
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="top-links">
            <span className="nav-link" onClick={() => setShowNewsModal(true)}>
              <FiInfo /> News/Updates
            </span>
            <span className="nav-link" onClick={() => setShowContactModal(true)}>
              <FiMail /> Contact Us
            </span>
          </div>

          <div className="top-actions">
            {/* Notifications */}
            <div className="notification-wrapper">
              <FiBell
                className="bell-icon"
                onClick={() => setShowNotifications(!showNotifications)}
              />
              {showNotifications && (
                <div className="notification-dropdown">
                  {notifications.length > 0 ? (
                    notifications.map((note, index) => (
                      <p key={index}>{note}</p>
                    ))
                  ) : (
                    <p>No new notifications</p>
                  )}
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="user-info" onClick={() => setShowProfileModal(true)}>
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="profile-pic"
              />
              <span className="username">Jyotish Jha</span>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              <FiLogOut /> Logout
            </button>
          </div>
        </div>

        {/* Main Content with Animation */}
        <div className="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <h1>{activeItem}</h1>
              <p>Welcome to the {activeItem} section of Alma Connect 🎓</p>

              {activeItem === "Dashboard" && (
                <>
                  {/* Quick Stats */}
                  <div className="stats-grid">
                    <div className="stat-card">
                      <FiBriefcase className="stat-icon" />
                      <h3>12</h3>
                      <p>Jobs Applied</p>
                    </div>
                    <div className="stat-card">
                      <FiGlobe className="stat-icon" />
                      <h3>5</h3>
                      <p>Startups Registered</p>
                    </div>
                    <div className="stat-card">
                      <FiUsers className="stat-icon" />
                      <h3>34</h3>
                      <p>Community Posts</p>
                    </div>
                    <div className="stat-card">
                      <FiHeart className="stat-icon" />
                      <h3>₹2,500</h3>
                      <p>Donations Made</p>
                    </div>
                  </div>

                  {/* Job Chart */}
                  <div className="chart-container">
                    <h2>Jobs Applied (Monthly)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={jobData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="jobs" stroke="#3949ab" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Recent Activity */}
                  <div className="recent-activity">
                    <h2>Recent Activity</h2>
                    <ul>
                      {recentActivities.map((activity) => (
                        <li key={activity.id}>
                          <span className="activity-type">{activity.type}:</span>{" "}
                          <span className="activity-detail">{activity.detail}</span>
                          <span className="activity-time">{activity.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              {activeItem === "Community" && <Community />}
              {activeItem === "Donations" && <DonationPage />}
              {activeItem === "Events" && <EventsPage />}
              {activeItem === "Jobs/Internship" && <JobOpportunitiesPage />}
              {activeItem === "Alumni" && <AlumniPortal />}
              {activeItem === "StartupBoard" && <StartupBoard />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* News/Updates Modal */}
      {showNewsModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>News & Updates</h2>
            <ul>
              {newsUpdates.map((news, index) => (
                <li key={index}>{news}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setShowNewsModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Contact Us</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <button className="close-btn" onClick={() => setShowContactModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>My Profile</h2>
            <form className="profile-form">
              <input type="text" defaultValue="Jyotish Jha" />
              <input type="email" defaultValue="jyotish@example.com" />
              <textarea placeholder="Bio">B.Tech CSE Student</textarea>
              <button type="submit">Update</button>
            </form>
            <button
              className="close-btn"
              onClick={() => setShowProfileModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
