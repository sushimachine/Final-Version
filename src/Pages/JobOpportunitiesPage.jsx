import React, { useState } from 'react';
import './Job.css'; // The CSS file for styling

// --- SVG Icon Components ---
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const RupeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="M6 13h12"/><path d="M6 18h12"/><path d="M8 21V3"/><path d="M16 21V3"/></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>;
const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8A10 10 0 0022 12z"></path></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.29 13.29V9.29H8.29v7h2.42zm-1.21-8.21a1.46 1.46 0 100-2.92 1.46 1.46 0 000 2.92zM17.29 16.29V12.5c0-1.92-.44-3.21-2.42-3.21-1.12 0-1.85.61-2.17 1.2V9.29h-2.42v7h2.42v-3.47c0-.92.22-1.81 1.33-1.81 1.09 0 1.11 1.05 1.11 1.87v3.41h2.44z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path></svg>;


// --- Job Detail Component (to be rendered when a job is selected) ---
function JobDetailPage({ job, onBack }) {
    return (
        <div className="job-detail-page">
            <div className="job-detail-container">
                <button onClick={onBack} className="back-button">
                    <BackArrowIcon /> Back to Job List
                </button>

                <div className="job-detail-grid">
                    {/* --- Main Content Column --- */}
                    <div className="job-detail-main">
                        <div className="job-detail-header">
                            <h1>{job.title}</h1>
                            <div className="company-name-header">{job.company}</div>
                            <div className="header-details">
                                <div className="detail-item"><LocationIcon /> {job.location}</div>
                                <div className="detail-item"><BriefcaseIcon /> {job.type}</div>
                                <div className="detail-item"><ClockIcon /> {job.experience}</div>
                                <div className="detail-item"><RupeeIcon /> {job.salary}</div>
                            </div>
                            <a href="#" className="apply-button-large">Apply Now</a>
                        </div>

                        <div className="job-section">
                            <h2>Job Description</h2>
                            <p>{job.description}</p>
                        </div>

                        <div className="job-section">
                            <h2>Responsibilities</h2>
                            <ul>
                                {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>

                        <div className="job-section">
                            <h2>Qualifications</h2>
                            <ul>
                                {job.qualifications.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* --- Sidebar Column --- */}
                    <div className="job-detail-sidebar">
                        <div className="sidebar-widget">
                            <h3>About {job.company}</h3>
                            <div className="company-info">
                                <img src={job.logo} alt={`${job.company} logo`} className="company-logo-large" />
                                <p>{job.companyInfo}</p>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h3>Skills Required</h3>
                            <div className="card-skills">
                                {job.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                            </div>
                        </div>
                        <div className="sidebar-widget">
                             <h3>Share this Job</h3>
                             <button className="share-button">
                                 <ShareIcon /> Share
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Main Page Component ---
export default function JobOpportunitiesPage() {
    // --- State to manage which job is selected ---
    // If null, show the list. If an object, show the detail page.
    const [selectedJob, setSelectedJob] = useState(null);

    // --- Expanded dummy data for all jobs ---
    const allJobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'Samsung',
            logo: '/public/images/samsung.webp',
            location: 'Ahmedabad',
            type: 'Full-time',
            experience: '2-6 yrs',
            salary: '₹8.0L - ₹10.0L',
            skills: ['HTML', 'UI/UX Design', 'CSS', 'React.js'],
            status: 'Active',
            posted: '1 week ago',
            description: 'Samsung is seeking a passionate Frontend Developer to join our dynamic team. You will be responsible for building high-quality, scalable, and responsive web applications for our global customer base.',
            responsibilities: [
                'Develop new user-facing features using React.js.',
                'Build reusable components and front-end libraries for future use.',
                'Translate designs and wireframes into high-quality code.',
                'Optimize components for maximum performance across a vast array of web-capable devices and browsers.'
            ],
            qualifications: [
                'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.',
                'Thorough understanding of React.js and its core principles.',
                'Experience with popular React.js workflows (such as Flux or Redux).',
                'Familiarity with modern front-end build pipelines and tools.'
            ],
            companyInfo: 'Samsung is a global leader in technology, opening new possibilities for people everywhere. Through relentless innovation and discovery, we are transforming the worlds of TVs, smartphones, wearable devices, tablets, and digital appliances.'
        },
        {
            id: 2,
            title: 'AI Developer',
            company: 'Google',
            logo: '/public/images/OIP.webp',
            location: 'Remote',
            type: 'Full-time',
            experience: '4-6 yrs',
            salary: '₹20.0L - ₹22.0L',
            skills: ['AI', 'Machine Learning', 'Python'],
            status: 'Active',
            posted: '1 week ago',
            description: 'Google is at the forefront of AI innovation. We are looking for an AI Developer to work on cutting-edge machine learning models that will impact millions of users.',
            responsibilities: ['Design and implement machine learning models.', 'Work with large datasets to train and evaluate models.', 'Collaborate with software engineers to integrate AI into products.'],
            qualifications: ['PhD or MS in Computer Science or related field.', 'Experience with TensorFlow or PyTorch.', 'Strong background in algorithms and data structures.'],
            companyInfo: 'Google’s mission is to organize the world’s information and make it universally accessible and useful.'
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'TCS',
            logo: '/public/images/tcs.jpeg',
            location: 'Gandhinagar',
            type: 'Full-time',
            experience: '3-6 yrs',
            salary: '₹5.0L - ₹7.0L',
            skills: ['UI/UX Design', 'React', 'CSS'],
            status: 'Active',
            posted: '1 week ago',
            description: 'TCS is hiring a Frontend Developer to create engaging user experiences for our clients in the banking and finance sector.',
            responsibilities: ['Develop client-side applications.', 'Ensure high performance on mobile and desktop.', 'Communicate with a team of developers and designers.'],
            qualifications: ['Proficiency in React.', 'Experience with RESTful APIs.', 'Understanding of cross-browser compatibility issues.'],
            companyInfo: 'Tata Consultancy Services is an Indian multinational information technology services and consulting company.'
        },
        // ... (other job objects follow the same detailed structure)
        { id: 4, title: 'Python Developer', company: 'Operacell', logo: '/public/images/opera.jpg', location: 'Ahmedabad', type: 'Full-time', experience: '2-4 yrs', salary: '₹6.0L - ₹8.0L', skills: ['Python', 'Django', 'Flask'], status: 'Active', posted: '2 weeks ago', description: 'Description for Python Developer at Operacell.', responsibilities: ['Responsibility 1'], qualifications: ['Qualification 1'], companyInfo: 'Company info for Operacell.' },
        { id: 5, title: 'Senior Java Developer', company: 'IBM', logo: '/public/images/IBM.webp', location: 'Gandhinagar', type: 'Full-time', experience: '3-7 yrs', salary: '₹12.0L - ₹15.0L', skills: ['Java', 'Spring'], status: 'Active', posted: '3 weeks ago', description: 'Description for Senior Java Developer at IBM.', responsibilities: ['Responsibility 1'], qualifications: ['Qualification 1'], companyInfo: 'Company info for IBM.' },
        { id: 6, title: 'Software Engineer', company: 'IBM', logo: '/public/images/IBM.webp', location: 'Gandhinagar', type: 'Full-time', experience: '0-0 yrs', salary: 'Not specified', skills: ['Java', 'Spring'], status: 'Active', posted: '1 month ago', description: 'Description for Software Engineer at IBM.', responsibilities: ['Responsibility 1'], qualifications: ['Qualification 1'], companyInfo: 'Company info for IBM.' },
        { id: 7, title: 'DevOps Engineer', company: 'Microsoft', logo: '/public/images/Microsoft.webp', location: 'Remote', type: 'Full-time', experience: '5+ yrs', salary: '₹25.0L - ₹30.0L', skills: ['AWS', 'Docker', 'Kubernetes'], status: 'Active', posted: '2 days ago', description: 'Description for DevOps Engineer at Microsoft.', responsibilities: ['Responsibility 1'], qualifications: ['Qualification 1'], companyInfo: 'Company info for Microsoft.' },
        { id: 8, title: 'UX Designer', company: 'Swiggy', logo: '/public/images/swiggy.webp', location: 'Bangalore', type: 'Full-time', experience: '2-4 yrs', salary: '₹10.0L - ₹14.0L', skills: ['Figma', 'User Research'], status: 'Active', posted: '5 days ago', description: 'Description for UX Designer at Swiggy.', responsibilities: ['Responsibility 1'], qualifications: ['Qualification 1'], companyInfo: 'Company info for Swiggy.' },
    ];

    // --- State and constants for pagination ---
    const [currentPage, setCurrentPage] = useState(1);
    const JOBS_PER_PAGE = 6;

    // --- Pagination Logic ---
    const totalPages = Math.ceil(allJobs.length / JOBS_PER_PAGE);
    const indexOfLastJob = currentPage * JOBS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
    const currentJobs = allJobs.slice(indexOfFirstJob, indexOfLastJob);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    
    // --- Event handlers for changing pages ---
    const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
    const handleNextClick = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
    const handlePrevClick = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
    
    const recentlyPostedJobs = allJobs.slice(0, 3);

    // --- CONDITIONAL RENDERING ---
    // If a job is selected, render the detail page.
    if (selectedJob) {
        return <JobDetailPage job={selectedJob} onBack={() => setSelectedJob(null)} />;
    }

    // --- Otherwise, render the main job list page ---
    return (
        <div className="jobs-page">
            {/* --- Banner Section --- */}
            <div className="jobs-banner">
                <div className="jobs-banner-overlay">
                    <div className="banner-content">
                        <h1>Job Opportunities</h1>
                        <p>Explore {allJobs.length} active opportunities across various companies</p>
                        <div className="banner-stats">
                            <div className="stat-item"><div className="stat-number">12</div><div className="stat-label">Active Jobs</div></div>
                            <div className="stat-item"><div className="stat-number">9</div><div className="stat-label">Companies Hiring</div></div>
                            <div className="stat-item"><div className="stat-number">8</div><div className="stat-label">Locations</div></div>
                        </div>
                        <div className="banner-search">
                            <SearchIcon />
                            <input type="text" placeholder="Search jobs by title, company, skills..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Main Content Area --- */}
            <div className="jobs-main-content">
                <div className="jobs-filter-section">
                    <div className="filter-header">
                        <h3>Filter Jobs</h3>
                        <button className="clear-filters-btn">Clear Filters</button>
                    </div>
                    <div className="filter-controls">
                        <div className="filter-group"><label htmlFor="role-filter">Role</label><select id="role-filter"><option value="">All Roles</option></select></div>
                        <div className="filter-group"><label htmlFor="location-filter">Location</label><select id="location-filter"><option value="">All Locations</option></select></div>
                        <div className="filter-group"><label htmlFor="type-filter">Job Type</label><select id="type-filter"><option value="">All Types</option></select></div>
                    </div>
                </div>

                <div className="jobs-list-header">
                    <span>Showing {currentJobs.length} of {allJobs.length} jobs</span>
                    <div className="sort-by">
                        <label htmlFor="sort">Sort by</label>
                        <select id="sort"><option value="most-recent">Most Recent</option></select>
                    </div>
                </div>

                {/* --- Job Cards Grid --- */}
                <div className="job-cards-grid">
                    {currentJobs.map(job => (
                        <div 
                            key={job.id} 
                            className="job-card" 
                            onClick={() => setSelectedJob(job)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card-header">
                                <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                                <div className="header-text">
                                    <div className="job-title">{job.title}</div>
                                    <div className="company-name">{job.company}</div>
                                </div>
                                <div className="job-status">{job.status}</div>
                            </div>
                            <div className="card-details">
                                <div className="detail-item"><LocationIcon /> {job.location}</div>
                                <div className="detail-item"><BriefcaseIcon /> {job.type}</div>
                                <div className="detail-item"><ClockIcon /> {job.experience}</div>
                                <div className="detail-item"><RupeeIcon /> {job.salary}</div>
                            </div>
                            <div className="card-skills">
                                {job.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                            </div>
                            <div className="card-footer">
                                <span className="posted-date">{job.posted}</span>
                                <a href="#" className="apply-button" onClick={(e) => e.stopPropagation()}>Apply Now</a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* --- Pagination Section --- */}
                <div className="pagination">
                    <button onClick={handlePrevClick} className="page-nav" disabled={currentPage === 1}>Previous</button>
                    {pageNumbers.map(number => (
                        <button 
                            key={number} 
                            onClick={() => handlePageClick(number)}
                            className={`page-number ${currentPage === number ? 'active' : ''}`}
                        >
                            {number}
                        </button>
                    ))}
                    <button onClick={handleNextClick} className="page-nav" disabled={currentPage === totalPages}>Next</button>
                </div>

                {/* --- Recently Posted Jobs Section --- */}
                <div className="recently-posted-section">
                    <h2>Recently Posted Jobs</h2>
                    <div className="recent-jobs-container">
                        {recentlyPostedJobs.map(job => (
                             <div 
                                key={job.id} 
                                className="recent-job-card"
                                onClick={() => setSelectedJob(job)}
                                style={{ cursor: 'pointer' }}
                            >
                                 <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                                 <div className="recent-card-info">
                                     <div className="job-title">{job.title}</div>
                                     <div className="company-name">{job.company} - {job.location}</div>
                                 </div>
                                 <div className="posted-date">{job.posted}</div>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* --- Footer Section --- */}
            <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-col contact-info">
            <h3>Alma Connect</h3>
            <p>Alma connect Association</p>
            <p>MC 1-97</p>
            <p>1200 E. California Boulevard</p>
            <p>Pasadena, CA 91125</p>
            <p>626-395-6592</p>
            <button>Contact Us</button>
            <div className="social-icons">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><XIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href="#"><InstagramIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="#">Techer Professional Network</a>
            <a href="#">Alumni Near Me</a>
            <a href="#">In Memoriam</a>
            <a href="#">Directory</a>
          </div>

          <div className="footer-col">
            <h4>Engage</h4>
            <a href="#">Programs</a>
            <a href="#">Partner</a>
            <a href="#">Give</a>
            <a href="#">Oral History Project</a>
          </div>

          <div className="footer-col">
            <h4>Achieve</h4>
            <a href="#">Distinguished Alumni Award</a>
            <a href="#">Chang Career Exploration Prize</a>
            <a href="#">Share Your Achievements</a>
          </div>

          <div className="footer-col">
            <h4>Techer</h4>
            <a href="#">Home</a>
            <a href="#">Stories</a>
            <a href="#">News</a>
          </div>
        </div>
      </footer>
        </div>
    );
}