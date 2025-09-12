import React, { useEffect, useState } from "react";
import "./StartupBoard.css";

const LS_KEY = "alma_startups_v2";
const COMMENT_KEY = "alma_startup_comments";

function loadStartups() {
  const raw = localStorage.getItem(LS_KEY);
  return raw ? JSON.parse(raw) : [];
}
function saveStartups(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}
function loadComments() {
  const raw = localStorage.getItem(COMMENT_KEY);
  return raw ? JSON.parse(raw) : {};
}
function saveComments(all) {
  localStorage.setItem(COMMENT_KEY, JSON.stringify(all));
}

export default function StartupBoard() {
  const [startups, setStartups] = useState(() => loadStartups());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [view, setView] = useState("board"); // board | profile
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    founder: "",
    description: "",
    category: "",
    stage: "Idea",
    fundingGoal: "",
    logoUrl: "", // added for uploaded logo
  });

  useEffect(() => {
    saveStartups(startups);
  }, [startups]);

  // comments
  const [comments, setComments] = useState(() => loadComments());
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, logoUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fallbackLogos = [
      "https://img.icons8.com/color/120/rocket.png",
      "https://img.icons8.com/color/120/light-on.png",
      "https://img.icons8.com/color/120/graph.png",
      "https://img.icons8.com/color/120/innovation.png",
      "https://img.icons8.com/color/120/handshake.png",
    ];

    const newStartup = {
      ...form,
      id: `s_${Date.now()}`,
      fundingGoal: Number(form.fundingGoal),
      raised: 0,
      logoUrl:
        form.logoUrl ||
        fallbackLogos[Math.floor(Math.random() * fallbackLogos.length)],
    };

    setStartups([newStartup, ...startups]);
    setForm({
      name: "",
      tagline: "",
      founder: "",
      description: "",
      category: "",
      stage: "Idea",
      fundingGoal: "",
      logoUrl: "",
    });
    setModalOpen(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newEntry = {
      id: Date.now(),
      text: newComment,
      author: "Anonymous",
      date: new Date().toLocaleString(),
    };

    const updated = {
      ...comments,
      [selectedStartup.id]: [newEntry, ...(comments[selectedStartup.id] || [])],
    };
    setComments(updated);
    saveComments(updated);
    setNewComment("");
  };

  // === GRID VIEW ===
  if (!selectedStartup) {
    return (
      <div
        className={`startup-board ${view === "board" ? "slide-in-left" : ""}`}
      >
        <header className="board-header">
          <h1>🚀 Startup Board</h1>
          <button className="upload-btn" onClick={() => setModalOpen(true)}>
            + Publish Startup
          </button>
        </header>

        <div className="startup-grid">
          {startups.map((s) => (
            <div className="startup-card" key={s.id}>
              <img src={s.logoUrl} alt={s.name} className="startup-logo" />
              <h2>{s.name}</h2>
              <p className="tagline">{s.tagline}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${(s.raised / s.fundingGoal) * 100}%`,
                  }}
                />
              </div>
              <p className="funding">
                ₹{s.raised.toLocaleString()} / ₹
                {s.fundingGoal.toLocaleString()}
              </p>
              <div className="card-actions">
                <button
                  className="support-btn"
                  onClick={() => alert("Thanks for supporting!")}
                >
                  💰 Support
                </button>
                <button
                  className="view-btn"
                  onClick={() => {
                    setSelectedStartup(s);
                    setView("profile");
                  }}
                >
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal form */}
        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Publish Your Startup</h2>
              <form onSubmit={handleSubmit} className="upload-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Startup Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="tagline"
                  placeholder="Tagline"
                  value={form.tagline}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="founder"
                  placeholder="Founder(s)"
                  value={form.founder}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={form.description}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={form.category}
                  onChange={handleChange}
                />
                <select name="stage" value={form.stage} onChange={handleChange}>
                  <option>Idea</option>
                  <option>Prototype</option>
                  <option>Early Users</option>
                  <option>Revenue</option>
                </select>
                <input
                  type="number"
                  name="fundingGoal"
                  placeholder="Funding Goal (₹)"
                  value={form.fundingGoal}
                  onChange={handleChange}
                  required
                />

                {/* Logo Upload */}
                <label>Upload Logo:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />

                <div className="modal-actions">
                  <button type="button" onClick={() => setModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // === PROFILE VIEW ===
  return (
    <div
      className={`profile-container ${
        view === "profile" ? "slide-in-right" : ""
      }`}
    >
      <button
        className="back-btn"
        onClick={() => {
          setSelectedStartup(null);
          setView("board");
        }}
      >
        ⬅ Back to Board
      </button>
      <div className="profile-card">
        <img
          src={selectedStartup.logoUrl}
          alt={selectedStartup.name}
          className="profile-logo"
        />
        <h1>{selectedStartup.name}</h1>
        <p className="profile-tagline">{selectedStartup.tagline}</p>
        <p className="profile-desc">{selectedStartup.description}</p>
        <div className="profile-info">
          <p>
            <b>Founder:</b> {selectedStartup.founder}
          </p>
          <p>
            <b>Category:</b> {selectedStartup.category}
          </p>
          <p>
            <b>Stage:</b> {selectedStartup.stage}
          </p>
        </div>
        <div className="profile-funding">
          <h3>
            Funding: ₹{selectedStartup.raised.toLocaleString()} / ₹
            {selectedStartup.fundingGoal.toLocaleString()}
          </h3>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(selectedStartup.raised /
                  selectedStartup.fundingGoal) *
                  100}%`,
              }}
            />
          </div>
        </div>
        <button
          className="support-btn"
          onClick={() => alert("Thanks for supporting!")}
        >
          💰 Support this Startup
        </button>
      </div>

      {/* Comments */}
      <div className="comments-section">
        <h2>💬 Comments & Feedback</h2>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Write your feedback..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="3"
          />
          <button type="submit" className="comment-btn">
            Post Comment
          </button>
        </form>
        <div className="comments-list">
          {(comments[selectedStartup.id] || []).length === 0 ? (
            <p className="no-comments">No comments yet. Be the first!</p>
          ) : (
            comments[selectedStartup.id].map((c) => (
              <div key={c.id} className="comment">
                <p className="comment-text">{c.text}</p>
                <div className="comment-meta">
                  <span>👤 {c.author}</span>
                  <span>🕒 {c.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
