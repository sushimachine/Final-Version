import React, { useState } from "react";
import "./Community.css";
import { FiGlobe, FiUsers, FiHeart, FiMessageSquare, FiShare2 } from "react-icons/fi";

const Community = () => {
  const [activeTab, setActiveTab] = useState("Global");
  const [globalPosts, setGlobalPosts] = useState([
    { id: 1, user: "Alice", university: "MIT", content: "Excited to join the startup challenge!", time: "2h ago" },
    { id: 2, user: "Raj", university: "IIT Delhi", content: "Looking for a teammate for hackathon!", time: "5h ago" },
  ]);

  const [localPosts, setLocalPosts] = useState([
    { id: 1, user: "Jyotish Jha", university: "Your University", content: "Anyone up for group study this weekend?", time: "1h ago" },
    { id: 2, user: "Anita", university: "Your University", content: "Our startup club is organizing an event!", time: "3h ago" },
  ]);

  const [newPost, setNewPost] = useState("");

  // ⏱ helper to format time
  const getTime = () => "Just now";

  const handlePost = () => {
    if (!newPost.trim()) return; // prevent empty post

    const newEntry = {
      id: Date.now(),
      user: "Jyotish Jha",
      university: activeTab === "Global" ? "Your University" : "Your University",
      content: newPost,
      time: getTime(),
    };

    if (activeTab === "Global") {
      setGlobalPosts([newEntry, ...globalPosts]);
    } else {
      setLocalPosts([newEntry, ...localPosts]);
    }

    setNewPost(""); // clear textarea
  };

  const renderPosts = (posts) =>
    posts.map((post) => (
      <div key={post.id} className="post-card">
        <div className="post-header">
          <img src={`https://i.pravatar.cc/40?u=${post.user}`} alt="profile" className="profile-pic" />
          <div>
            <h4>{post.user}</h4>
            <p className="university">{post.university} • {post.time}</p>
          </div>
        </div>
        <p className="post-content">{post.content}</p>
        <div className="post-actions">
          <span><FiHeart /> Like</span>
          <span><FiMessageSquare /> Comment</span>
          <span><FiShare2 /> Share</span>
        </div>
      </div>
    ));

  return (
    <div className="community-container">
      {/* Toggle Tabs */}
      <div className="tabs">
        <button className={activeTab === "Global" ? "active" : ""} onClick={() => setActiveTab("Global")}>
          <FiGlobe /> Global Community
        </button>
        <button className={activeTab === "Local" ? "active" : ""} onClick={() => setActiveTab("Local")}>
          <FiUsers /> Local Community
        </button>
      </div>

      {/* Post Box */}
      <div className="post-box">
        <textarea
          placeholder={`Share something in ${activeTab}...`}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      {/* Feed */}
      <div className="post-feed">
        {activeTab === "Global" ? renderPosts(globalPosts) : renderPosts(localPosts)}
      </div>
    </div>
  );
};

export default Community;
