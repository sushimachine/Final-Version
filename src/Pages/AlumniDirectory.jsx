import React, { useState, useEffect } from 'react';

//==================================================================
// 1. ALL SVG ICONS (Unchanged)
//==================================================================
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
);
const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
);
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-left"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-left"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8A10 10 0 0022 12z"></path></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-left"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const WebsiteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const PostedJobsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ApplicationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const ReferralIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon active"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>;
const EventsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const CampaignsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6v6l4 2"/></svg>;
const DonationsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dashboard-icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;

// Generate a unique avatar URL using DiceBear API
// const getRandomAvatar = (seed) => {
//     const style = 'avataaars'; // Choose your preferred style
//     const encodedSeed = encodeURIComponent(seed);
//     return `https://api.dicebear.com/9.x/${style}/svg?seed=${encodedSeed}`;
// };

//==================================================================
// 2. ALUMNI DIRECTORY PAGE & CARD SUB-COMPONENT
//==================================================================
function AlumniDirectory({ onAlumniSelect }) {
    const [alumniList, setAlumniList] = useState([]);

    useEffect(() => {
    const dummyData = [
        { id: 1, name: "Amit Grover", avatarUrl: "/public/Images/profile.webp", year: "Class of 2022", degree: "Bachelor of Engineering", department: "Computer Engineering", role: "Software Engineer", company: "Google", location: "San Francisco, CA" },
        { id: 2, name: "Jane Smith", avatarUrl: "/public/Images/Profile2.webp", year: "Class of 2021", degree: "MBA", department: "Business Administration", role: "Product Manager", company: "Apple", location: "Cupertino, CA" },
        { id: 3, name: "Rahul Kumar", avatarUrl: "/public/Images/profile3.webp", year: "Class of 2020", degree: "Bachelor of Technology", department: "Mechanical Engineering", role: "Design Engineer", company: "Tesla", location: "Austin, TX" },
        { id: 4, name: "Emily Johnson", avatarUrl: "/public/Images/profile4.webp", year: "Class of 2019", degree: "Master of Science", department: "Data Science", role: "Data Scientist", company: "Microsoft", location: "Seattle, WA" },
        { id: 5, name: "Amit Sharma", avatarUrl: "/public/Images/profile5.webp", year: "Class of 2018", degree: "Bachelor of Commerce", department: "Finance", role: "Financial Analyst", company: "Goldman Sachs", location: "New York, NY" },
        { id: 6, name: "Sophia Lee", avatarUrl: "/public/Images/profile6.webp", year: "Class of 2023", degree: "Bachelor of Arts", department: "Psychology", role: "Research Assistant", company: "Stanford University", location: "Palo Alto, CA" },
    ];

    // FIX: Remove the old ".map" logic and just set the list directly.
    setAlumniList(dummyData);
}, []);

    const styles = {
        container: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
        },
        bannerWrapper: {
            height: "450px",
            position: "relative",
            color: "white",
            borderRadius: "15px",
            margin: "20px auto",
            maxWidth: "1200px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
        },
        bannerImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
        },
        bannerOverlay: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "rgba(26, 31, 54, 0.85)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            zIndex: 2,
        },
        bannerTitle: {
            fontSize: "3rem",
            marginBottom: "10px",
        },
        bannerText: {
            fontSize: "1.2rem",
            marginBottom: "20px",
        },
        viewInsightsBtn: {
            padding: "10px 25px",
            marginBottom: "30px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "white",
            background: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "25px",
            cursor: "pointer",
        },
        stats: {
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            margin: "20px 0",
        },
        statsNumber: {
            fontSize: "4rem",
            fontWeight: "700",
            margin: "0 0 5px 0",
            lineHeight: 1,
        },
        statsLabel: {
            fontSize: "1rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            opacity: 0.8,
        },
        searchBar: {
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            width: "70%",
            maxWidth: "600px",
        },
        searchInput: {
            padding: "12px 20px",
            width: "100%",
            border: "1px solid #555",
            borderRadius: "25px 0 0 25px",
            background: "rgba(255, 255, 255, 0.9)",
            color: "#333",
            outline: "none",
            fontSize: "1rem",
        },
        searchButton: {
            padding: "12px 25px",
            border: "none",
            background: "#007bff",
            color: "white",
            borderRadius: "0 25px 25px 0",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
        },
        filters: {
            padding: "20px 0",
            background: "#f8f9fa",
            borderBottom: "1px solid #e0e0e0",
        },
        filtersHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
        },
        filterOptions: {
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
        },
        select: {
            appearance: "none",
            border: "1px solid #ced4da",
            borderRadius: "20px",
            padding: "8px 32px 8px 16px",
            background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e") no-repeat right 0.75rem center/16px 12px`,
            backgroundColor: "#ffffff",
            cursor: "pointer",
            height: "40px",
        },
        clearFiltersBtn: {
            padding: "8px 15px",
            border: "1px solid #dc3545",
            borderRadius: "6px",
            cursor: "pointer",
            background: "white",
            color: "#dc3545",
            fontWeight: "600",
        },
        alumniGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "40px",
            paddingBottom: "40px",
        },
        alumniCard: {
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
            cursor: 'pointer', // Make card look clickable
        },
        alumniAvatar: {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginBottom: "15px",
            border: "3px solid #007bff",
            display: "block",
            margin: "0 auto 15px auto",
        },
        alumniMeta: {
            color: "#6c757d",
            fontSize: "0.9rem",
            margin: "5px 0",
        },
        alumniRole: {
            marginTop: "15px",
            fontWeight: "bold",
            color: "#343a40",
            fontSize: "1.1rem",
        },
        alumniLocation: {
            fontSize: "0.9rem",
            color: "#495057",
            marginBottom: "15px",
        },
        alumniActions: {
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
            gap: "10px",
        },
        profileBtn: {
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#007bff",
            color: "white",
            fontWeight: "600",
        },
        contactBtn: {
            padding: "10px 15px",
            border: "1px solid #ced4da",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#f1f3f5",
            color: "#495057",
            fontWeight: "600",
        },
         siteFooter: {
      backgroundColor: "#002d42",
      color: "#fff",
      padding: "4rem 2rem",
      marginTop: "3rem",
    },
    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "2rem",
    },
    footerCol: {
      minWidth: "200px",
    },
    h3h4: {
      fontSize: "1.1rem",
      marginBottom: "1rem",
      fontWeight: 600,
    },
    link: {
      display: "block",
      color: "#aeb8c9",
      textDecoration: "none",
      marginBottom: "0.75rem",
    },
    p: {
      margin: "0 0 0.5rem 0",
      fontSize: "0.9rem",
      color: "#aeb8c9",
    },
    button: {
      background: "none",
      border: "2px solid #fff",
      color: "#fff",
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "1rem",
    },
    socialIcons: {
      display: "flex",
      gap: "1rem",
      marginTop: "1.5rem",
    },
    socialLink: {
      color: "#fff",
    },
    };

    return (
        <div>
            <div style={styles.bannerWrapper}>
                <img src="./public/Images/1567666.png" alt="Banner Background" style={styles.bannerImg} />
                <div style={styles.bannerOverlay}>
                    <button style={styles.viewInsightsBtn}>View Insights</button>
                    <h1 style={styles.bannerTitle}>Alumni Directory</h1>
                    <p style={styles.bannerText}>
                        Connect with our growing community of <b>29+ alumni</b> across <b>13 cities</b>.
                    </p>
                    <div style={styles.stats}>
                        <div style={styles.statsBox}><h2>29</h2><span>Total Alumni</span></div>
                        <div style={styles.statsBox}><h2>6</h2><span>Companies</span></div>
                        <div style={styles.statsBox}><h2>13</h2><span>Cities</span></div>
                    </div>
                    <div style={styles.searchBar}>
                        <input type="text" placeholder="Search alumni by name, skills, company…" style={styles.searchInput} />
                        <button style={styles.searchButton}>Search</button>
                    </div>
                </div>
            </div>

            <section style={styles.filters}>
                <div style={styles.container}>
                    <div style={styles.filtersHeader}>
                        <h3>Filters</h3>
                        <button style={styles.clearFiltersBtn}>Clear all filters</button>
                    </div>
                    <div style={styles.filterOptions}>
                        <select style={styles.select}><option>All Departments</option></select>
                        <select style={styles.select}><option>All Batches</option></select>
                        <select style={styles.select}><option>All Companies</option></select>
                        <select style={styles.select}><option>All Locations</option></select>
                        <select style={styles.select}><option>All Statuses</option></select>
                        <select style={styles.select}><option>All Degrees</option></select>
                    </div>
                </div>
            </section>

            <section style={styles.container}>
                <div style={styles.alumniGrid}>
                    {alumniList.map((alumni) => (
                        <AlumniCard key={alumni.id} alumni={alumni} styles={styles} onCardClick={() => onAlumniSelect(alumni)} />
                    ))}
                </div>
            </section>

            <footer style={styles.siteFooter}>
      <div style={styles.footerContent}>
        {/* Contact Info */}
        <div style={{ ...styles.footerCol }}>
          <h3 style={styles.h3h4}>Caltech Alumni</h3>
          <p style={styles.p}>Caltech Alumni Association</p>
          <p style={styles.p}>MC 1-97</p>
          <p style={styles.p}>1200 E. California Boulevard</p>
          <p style={styles.p}>Pasadena, CA 91125</p>
          <p style={styles.p}>626-395-6592</p>
          <button style={styles.button}>Contact Us</button>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.socialLink}>
              <FacebookIcon />
            </a>
            <a href="#" style={styles.socialLink}>
              <XIcon />
            </a>
            <a href="#" style={styles.socialLink}>
              <LinkedInIcon />
            </a>
            <a href="#" style={styles.socialLink}>
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Connect */}
        <div style={styles.footerCol}>
          <h4 style={styles.h3h4}>Connect</h4>
          <a href="#" style={styles.link}>Techer Professional Network</a>
          <a href="#" style={styles.link}>Alumni Near Me</a>
          <a href="#" style={styles.link}>In Memoriam</a>
          <a href="#" style={styles.link}>Directory</a>
        </div>

        {/* Engage */}
        <div style={styles.footerCol}>
          <h4 style={styles.h3h4}>Engage</h4>
          <a href="#" style={styles.link}>Programs</a>
          <a href="#" style={styles.link}>Partner</a>
          <a href="#" style={styles.link}>Give</a>
          <a href="#" style={styles.link}>Oral History Project</a>
        </div>

        {/* Achieve */}
        <div style={styles.footerCol}>
          <h4 style={styles.h3h4}>Achieve</h4>
          <a href="#" style={styles.link}>Distinguished Alumni Award</a>
          <a href="#" style={styles.link}>Chang Career Exploration Prize</a>
          <a href="#" style={styles.link}>Share Your Achievements</a>
        </div>

        {/* Techer */}
        <div style={styles.footerCol}>
          <h4 style={styles.h3h4}>Techer</h4>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Stories</a>
          <a href="#" style={styles.link}>News</a>
        </div>
      </div>
    </footer>
        </div>
    );
}

function AlumniCard({ alumni, styles, onCardClick }) {
    return (
        <div style={styles.alumniCard} onClick={onCardClick}>
            {/* MODIFICATION: The 'src' now uses alumni.avatarUrl */}
            <img src={alumni.avatarUrl} alt={alumni.name} style={styles.alumniAvatar} />
            <h3>{alumni.name}</h3>
            <p style={styles.alumniMeta}>{alumni.year}</p>
            <p style={styles.alumniMeta}>{alumni.degree} — {alumni.department}</p>
            <p style={styles.alumniRole}>{alumni.role} @ {alumni.company}</p>
            <p style={styles.alumniLocation}>{alumni.location}</p>
            <div style={styles.alumniActions}>
                <button style={styles.profileBtn}>View Profile</button>
                <button style={styles.contactBtn}>Contact</button>
            </div>
        </div>
    );
}
//==================================================================
// 3. ALUMNI PROFILE PAGE COMPONENT
//==================================================================
function AlumniProfilePage({ onBackClick }) {
    // This component uses the exact code and data you provided.
    // The "Back" button functionality is the only addition.
    const alumniData = {
        name: "Amit Grover",
        title: "UI/UX Designer",
        avatarUrl: "/public/Images/profile.webp",
        bio: "Full stack product designer with hands-on experience in solving problems for clients ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services & Social network among others. End-to-end user-centric-skills, with a defined process for engagement, a toolkit for collaboration & a user-centered approach to design.",
        skills: ["User Interface Designing", "UX", "UI", "Adobe XD", "Mobile Apps", "User Research", "Wireframing", "Information Architecture"],
        basicInfo: {
            age: "28 years",
            experience: "4 years",
            role: "UI/UX Designer",
            location: "Pune, Maharastra",
            Availibility: "+91 98123 55679",
            email: "amitgrover@gmail.com"
        },
        experience: [
            {
                logo: "/public/Images/OIP.webp",
                company: "Google",
                role: "Product & UI/UX Designer",
                period: "Apr 2024 - Present | Pune, India"
            },
            {
                logo: "/Images/tcs.jpeg",
                company: "tcs",
                role: "UI/UX Designer",
                period: "Jul 2022 - Jul 2024 | Bengaluru, India"
            },
            {
                logo: "https://placehold.co/48x48/8b5cf6/ffffff?text=RS",
                company: "Ramotion Studio",
                role: "Web Designer",
                period: "Apr 2021 - July 2022 | Bengaluru, India"
            }
        ],
        education: [
            {
                logo: "/public/Images/Nit.jpeg",
                institution: "NIT Trichy",
                degree: "Master of Technology",
                period: "2019 - 2022 | Hyderabad, India"
            },
            {
                logo: "/public/Images/Techno.png",
                institution: "Techno Main Salt Lake",
                degree: "Bachelor of Technology",
                period: "2015 - 2019 | Kolkata, India"
            }
        ],
        accomplishments: [
            { logo: "Images/bckg.jpg", title: "Best Designer Award", organization: "Infosys", year: "2020" },
            { logo: "Images/bckg1.webp", title: "Innovator of the Year", organization: "Pixel Studio", year: "2017" }
        ],
        donations: [
            { id: 1, campaign: "Annual Alumni Fund 2024", amount: "₹5,000", date: "2024-08-15" },
            { id: 2, campaign: "Tech Wing Renovation", amount: "₹10,000", date: "2024-03-22" },
            { id: 3, campaign: "Student Scholarship Program", amount: "₹2,500", date: "2023-11-01" },
        ],
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            website: "#",
        }
    };
    
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [isDonationModalOpen, setDonationModalOpen] = useState(false);
    const [isBookingModalOpen, setBookingModalOpen] = useState(false);

    const handleAddNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, newNote]);
            setNewNote("");
        }
    };

    const dashboardItems = [
        { id: 'jobs', icon: <PostedJobsIcon />, label: 'Posted Jobs', count: 0 },
        { id: 'apps', icon: <ApplicationsIcon />, label: 'Applications', count: 0 },
        { id: 'referral', icon: <ReferralIcon />, label: 'Referral Requests', count: 2, active: true },
        { id: 'events', icon: <EventsIcon />, label: 'Events', count: 0 },
        { id: 'campaigns', icon: <CampaignsIcon />, label: 'Campaigns', count: 0 },
        { id: 'donations', icon: <DonationsIcon />, label: 'My Donations', count: alumniData.donations.length, action: () => setDonationModalOpen(true) },
    ];

    const Styles = () => (
        <style>{`
        /* General Body Styles */
        .alumni-profile-page {
            background-color: #f1f5f9;
            min-height: 100vh;
            padding: 1rem;
            font-family: sans-serif;
        }

        /* Main Container */
        .profile-container {
            max-width: 80rem; /* 1280px */
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 1rem; /* 16px */
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            overflow: hidden;
        }

        /* Header */
        .profile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .back-button, .share-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: none;
            border: 1px solid transparent;
            cursor: pointer;
            font-weight: 500;
            transition: color 0.2s ease-in-out;
        }
        .back-button {
            color: #475569;
        }
        .back-button:hover {
            color: #2563eb;
        }
        .share-button {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border-color: #cbd5e1;
            transition: background-color 0.2s ease-in-out;
        }
        .share-button:hover {
            background-color: #f1f5f9;
        }

        /* Profile Body Grid */
        .profile-body {
            display: grid;
            grid-template-columns: 1fr;
        }

        /* Sidebar */
        .profile-sidebar {
            padding: 1.5rem;
            border-right: 1px solid #e2e8f0;
        }
        .sidebar-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .avatar {
            width: 8rem; /* 128px */
            height: 8rem;
            border-radius: 9999px;
            margin-bottom: 1rem;
            border: 4px solid #dbeafe;
        }
        .profile-name {
            font-size: 1.5rem; /* 24px */
            font-weight: bold;
            color: #1e293b;
            margin: 0;
        }
        .profile-title {
            color: #64748b;
            margin-bottom: 1rem;
        }
        .profile-bio {
            font-size: 0.875rem; /* 14px */
            color: #475569;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        .sidebar-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .section-title {
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 0.75rem;
        }
        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .skill-tag {
            background-color: #eff6ff;
            color: #3b82f6;
            font-size: 0.75rem; /* 12px */
            font-weight: 500;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
        }
        .notes-textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            box-sizing: border-box;
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .notes-textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px #bfdbfe;
        }
        .notes-list {
            margin-top: 0.5rem;
            padding-left: 1.25rem;
            list-style: disc;
            font-size: 0.875rem;
            color: #64748b;
        }
        .add-note-button {
            width: 100%;
            margin-top: 0.5rem;
            background-color: #2563eb;
            color: white;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .add-note-button:hover {
            background-color: #1d4ed8;
        }

        /* Main Content */
        .main-content {
            padding: 1.5rem;
        }

        /* Social Links */
        .social-buttons-section {
            margin-bottom: 2rem;
            padding: 1.5rem 0;
            border-top: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            margin-top: 2rem;
        }
        .social-buttons-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .social-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-weight: 600;
            color: white;
            text-decoration: none;
            transition: opacity 0.2s;
        }
        .social-btn:hover {
            opacity: 0.9;
        }
        .btn-linkedin { background-color: #0A66C2; }
        .btn-github { background-color: #181717; }
        .btn-twitter { background-color: #1DA1F2; }
        .btn-portfolio { background-color: #6366f1; }
        
        /* Dashboard */
        .dashboard-section {
            margin-bottom: 2rem;
        }
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .dashboard-item {
            padding: 1rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transition: all 0.2s ease-in-out;
        }
        .dashboard-item.clickable {
            cursor: pointer;
        }
        .dashboard-item.clickable:hover {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            border-color: #cbd5e1;
        }
        .dashboard-item.active {
            background-color: #eff6ff;
            border-color: #bfdbfe;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        }
        .dashboard-icon {
            height: 1.5rem;
            width: 1.5rem;
            color: #64748b;
        }
        .dashboard-icon.active {
            color: #2563eb;
        }
        .dashboard-count {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e293b;
            margin: 0;
        }
        .dashboard-item.active .dashboard-count {
            color: #1d4ed8;
        }
        .dashboard-label {
            font-size: 0.75rem;
            font-weight: 500;
            color: #64748b;
            margin: 0;
        }

        /* Basic Info Card */
        .basic-info-card {
            background-color: rgba(239, 246, 255, 0.5);
            border: 1px solid #bfdbfe;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 0;
        }
        .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 1.5rem;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem 1rem;
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
        }
        .info-label {
            display: block;
            color: #64748b;
        }
        .info-value {
            font-weight: 500;
            color: #334155;
        }

        /* Buttons */
        .button-group {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        .btn {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid;
            cursor: pointer;
            transition: background-color 0.2s, color 0.2s;
        }
        .btn-primary {
            background-color: #2563eb;
            border-color: #2563eb;
            color: white;
        }
        .btn-primary:hover {
            background-color: #1d4ed8;
        }
        .btn-secondary {
            background-color: white;
            border-color: #cbd5e1;
            color: #334155;
        }
        .btn-secondary:hover {
            background-color: #f1f5f9;
        }
        .btn-success {
            background-color: #16a34a;
            border-color: #16a34a;
            color: white;
        }
        .btn-success:hover {
            background-color: #15803d;
        }

        .content-section {
            padding-bottom: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }
        .content-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #1e293b;
            padding: 1rem 0;
        }
        .content-body {
            padding-bottom: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .list-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        .list-item-logo {
            width: 3rem;
            height: 3rem;
            border-radius: 9999px;
            flex-shrink: 0;
        }
        .list-item-title {
            font-weight: 600;
            color: #334155;
            margin: 0 0 0.25rem 0;
        }
        .list-item-subtitle {
            color: #475569;
             margin: 0 0 0.25rem 0;
        }
        .list-item-meta {
            font-size: 0.875rem;
            color: #64748b;
             margin: 0;
        }
        
        /* Modals */
        .modal-backdrop {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.3);
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 50;
            padding: 1rem;
        }
        .modal-container {
            background-color: white;
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            width: 100%;
            max-width: 32rem; /* 512px */
        }
        .booking-modal {
            max-width: 28rem; /* 448px */
        }
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #e2e8f0;
        }
        .modal-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin:0;
        }
        .modal-subtitle {
            font-size: 0.875rem;
            color: #64748b;
            margin:0;
        }
        .modal-body {
            padding: 1.5rem;
            max-height: 60vh;
            overflow-y: auto;
        }
        .donation-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .donation-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            background-color: #f8fafc;
            border-radius: 0.5rem;
        }
        .donation-campaign {
            font-weight: 600;
            color: #1e293b;
            margin:0;
        }
        .donation-date {
            font-size: 0.875rem;
            color: #64748b;
            margin:0;
        }
        .donation-amount {
            font-weight: bold;
            font-size: 1.125rem;
            color: #16a34a;
            margin:0;
        }
        .modal-footer {
            padding: 1.5rem;
            background-color: #f8fafc;
            border-bottom-left-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
            display: flex;
            gap: 0.75rem;
        }
        .modal-footer .btn {
            flex: 1;
        }

        /* Form Styles (for Booking Modal) */
        .form-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        .form-label {
            display: block;
            font-size: 0.875rem;
            font-weight: 500;
            color: #334155;
            margin-bottom: 0.25rem;
        }
        .form-input, .form-textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #cbd5e1;
            border-radius: 0.5rem;
            box-sizing: border-box;
        }
        .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 2px #bfdbfe;
        }

        /* Icons */
        .icon {
            height: 1.25rem;
            width: 1.25rem;
        }
        .icon.icon-left {
            margin-right: 0.5rem;
        }

        /* Responsive Styles */
        @media (min-width: 640px) {
            .alumni-profile-page { padding: 1.5rem; }
            .info-grid { grid-template-columns: repeat(3, 1fr); }
            .button-group { flex-direction: row; }
            .social-buttons-container { grid-template-columns: repeat(4, 1fr); }
        }

        @media (min-width: 768px) {
            .dashboard-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1024px) {
            .alumni-profile-page { padding: 2rem; }
            .profile-body { grid-template-columns: 1fr 2fr; } /* Sidebar and main content */
            .dashboard-grid { grid-template-columns: repeat(6, 1fr); }
        }

        @media (min-width: 1280px) {
            .profile-body { grid-template-columns: 1fr 3fr; } /* Wider main content on large screens */
        }
    `}</style>
    );

    return (
        <>
            <Styles />
            <div className="alumni-profile-page">
                <div className="profile-container">
                    <header className="profile-header">
                        <button className="back-button" onClick={onBackClick}>
                            <BackIcon />
                            <span>Back</span>
                        </button>
                        <button className="share-button">
                            <ShareIcon />
                            <span>Share Profile</span>
                        </button>
                    </header>

                    <div className="profile-body">
                        <aside className="profile-sidebar">
                            <div className="sidebar-header">
                                <img src={alumniData.avatarUrl} alt={alumniData.name} className="avatar" />
                                <h1 className="profile-name">{alumniData.name}</h1>
                                <h2 className="profile-title">{alumniData.title}</h2>
                                <p className="profile-bio">{alumniData.bio}</p>
                            </div>

                            <div className="sidebar-content">
                                <div>
                                    <h3 className="section-title">Skills</h3>
                                    <div className="skills-container">
                                        {alumniData.skills.map(skill => (
                                            <span key={skill} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="section-title">Add Notes</h3>
                                    <textarea
                                        value={newNote}
                                        onChange={(e) => setNewNote(e.target.value)}
                                        className="notes-textarea"
                                        rows="3"
                                        placeholder="Add notes for future reference"
                                    ></textarea>
                                    {notes.length > 0 && (
                                        <ul className="notes-list">
                                            {notes.map((note, index) => <li key={index}>{note}</li>)}
                                        </ul>
                                    )}
                                    <button
                                        onClick={handleAddNote}
                                        className="add-note-button"
                                    >
                                        Add Note
                                    </button>
                                </div>
                            </div>
                        </aside>

                        <main className="main-content">
                            <div className="basic-info-card">
                                <h3 className="card-title">Basic Information</h3>
                                <div className="info-grid">
                                    <div><span className="info-label">AGE</span><span className="info-value">{alumniData.basicInfo.age}</span></div>
                                    <div><span className="info-label">YEARS OF EXPERIENCE</span><span className="info-value">{alumniData.basicInfo.experience}</span></div>
                                    <div><span className="info-label">PHONE</span><span className="info-value">{alumniData.basicInfo.Availibility}</span></div>
                                    <div><span className="info-label">Role</span><span className="info-value">{alumniData.basicInfo.role}</span></div>
                                    <div><span className="info-label">LOCATION</span><span className="info-value">{alumniData.basicInfo.location}</span></div>
                                    <div><span className="info-label">EMAIL</span><span className="info-value">{alumniData.basicInfo.email}</span></div>
                                </div>
                                <div className="button-group">
                                    <button className="btn btn-secondary"> <DownloadIcon /> Download Resume</button>
                                    <button className="btn btn-secondary"> <EmailIcon /> Send Email</button>
                                    <button onClick={() => setBookingModalOpen(true)} className="btn btn-primary"><CalendarIcon /> Book 1-to-1 Call</button>
                                </div>
                            </div>

                            <section className="social-buttons-section">
                                <div className="social-buttons-container">
                                    <a href={alumniData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn btn-linkedin">
                                        <LinkedInIcon />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href={alumniData.socials.github} target="_blank" rel="noopener noreferrer" className="social-btn btn-github">
                                        <GitHubIcon />
                                        <span>GitHub</span>
                                    </a>
                                    <a href={alumniData.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-btn btn-twitter">
                                        <TwitterIcon />
                                        <span>Twitter</span>
                                    </a>
                                    <a href={alumniData.socials.website} target="_blank" rel="noopener noreferrer" className="social-btn btn-portfolio">
                                        <WebsiteIcon />
                                        <span>Portfolio</span>
                                    </a>
                                </div>
                            </section>

                            <section className="dashboard-section">
                                <div className="dashboard-grid">
                                    {dashboardItems.map(item => (
                                        <div key={item.id} onClick={item.action} className={`dashboard-item ${item.active ? 'active' : ''} ${item.action ? 'clickable' : ''}`}>
                                            {item.icon}
                                            <p className="dashboard-count">{item.count}</p>
                                            <p className="dashboard-label">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="content-sections-container">
                                <div className="content-section">
                                    <h3 className="content-title">Experience</h3>
                                    <div className="content-body">
                                        {alumniData.experience.map((exp, index) => (
                                            <div key={index} className="list-item">
                                                <img src={exp.logo} alt={`${exp.company} logo`} className="list-item-logo" />
                                                <div>
                                                    <h4 className="list-item-title">{exp.company}</h4>
                                                    <p className="list-item-subtitle">{exp.role}</p>
                                                    <p className="list-item-meta">{exp.period}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="content-section">
                                    <h3 className="content-title">Education</h3>
                                    <div className="content-body">
                                        {alumniData.education.map((edu, index) => (
                                            <div key={index} className="list-item">
                                                <img src={edu.logo} alt={`${edu.institution} logo`} className="list-item-logo" />
                                                <div>
                                                    <h4 className="list-item-title">{edu.institution}</h4>
                                                    <p className="list-item-subtitle">{edu.degree}</p>
                                                    <p className="list-item-meta">{edu.period}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="content-section">
                                    <h3 className="content-title">Accomplishments</h3>
                                    <div className="content-body">
                                        {alumniData.accomplishments.map((acc, index) => (
                                            <div key={index} className="list-item">
                                                <img src={acc.logo} alt="" className="list-item-logo" />
                                                <div>
                                                    <h4 className="list-item-title">{acc.title}</h4>
                                                    <p className="list-item-subtitle">{acc.organization} - {acc.year}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

//==================================================================
// 4. PARENT APP COMPONENT TO MANAGE WHICH PAGE TO SHOW
//==================================================================
export function AlumniPortal() {
    const [selectedAlumni, setSelectedAlumni] = useState(null);

    const handleAlumniSelect = (alumni) => {
        setSelectedAlumni(alumni);
    };

    const handleBackToDirectory = () => {
        setSelectedAlumni(null);
    };

    return (
        <div>
            {selectedAlumni ? (
                // If an alumni is selected, show the Profile Page
                <AlumniProfilePage onBackClick={handleBackToDirectory} />
            ) : (
                // Otherwise, show the Directory Page
                <AlumniDirectory onAlumniSelect={handleAlumniSelect} />
            )}
        </div>
    );
}