import React from 'react';
import './EventsPage.css'; // Link to the CSS file

// --- SVG Icon Components for the Footer ---
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8A10 10 0 0022 12z"></path></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.29 13.29V9.29H8.29v7h2.42zm-1.21-8.21a1.46 1.46 0 100-2.92 1.46 1.46 0 000 2.92zM17.29 16.29V12.5c0-1.92-.44-3.21-2.42-3.21-1.12 0-1.85.61-2.17 1.2V9.29h-2.42v7h2.42v-3.47c0-.92.22-1.81 1.33-1.81 1.09 0 1.11 1.05 1.11 1.87v3.41h2.44z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path></svg>;


// --- Dummy Data for a Single Event ---
const eventData = {
    title: 'Alumni Weekend',
    startDate: '2025-10-17T09:00:00-07:00', // PDT
    endDate: '2025-10-19T13:00:00-07:00', // PDT
    price: '$25 – $200',
    imageSrc: 'https://placehold.co/1100x400/0a9396/ffffff/webp?text=Alumni+Weekend',
    introParagraph: 'Join fellow Techers for a weekend of curiosity, camaraderie, and celebration — right here in Pasadena.',
    fullDescription: 'Explore a full state of events, including faculty and student programs, the Distinguished Alumni Awards panel, Hall of Honor, SURF Seminar Day, and campus tours. Celebrate cherished traditions like the Milestone Reunion Dinners (for class years ending in \'0 and \'5\'), Graduates of the Last Decade (GOLD) gatherings, House events, and the All-Alumni Celebration.',
    details: {
        start: 'October 17, 2025 at 9:00 am PDT',
        end: 'October 19, 2025 at 1:00 pm PDT',
        cost: '$25 – $200',
        website: 'alumni.caltech.edu/alumni-weekend-about'
    },
    organizer: {
        name: 'Caltech Alumni Relations',
        phone: '626-395-6592',
        email: 'info@alumni.caltech.edu',
        website: 'View Organizer Website'
    },
    venue: {
        name: 'California Institute of Technology',
        address: '1200 East California Boulevard, Pasadena, CA 91125, United States',
        googleMapsLink: 'https://maps.google.com',
        website: 'View Venue Website',
        mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.731472535031!2d-118.12758252445853!3d34.10203581561578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c4a45eb23b03%3A0x11933e8b0a37390a!2sThe%20Athenaeum!5e0!3m2!1sen!2sus!4v1694200000000!5m2!1sen!2sus'
    }
};

export default function EventDetailPage() {

    const formatDateRange = (start, end, tz) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        
        const startStr = startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const startTime = startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }).replace(' ', '').toLowerCase();
        
        const endStr = endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const endTime = endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }).replace(' ', '').toLowerCase();

        if (startStr === endStr) {
            return `${startStr} at ${startTime} — ${endTime}`;
        }
        return `${startDate.toLocaleString('en-US', options)} — ${endDate.toLocaleString('en-US', options)} ${tz}`;
    };

    return (
        <div className="event-detail-page">
            <div className="content-wrapper">
                <a href="#" className="back-link">« All Events</a>
                
                <header className="event-header">
                    <h1>{eventData.title}</h1>
                    <p className="event-meta">
                        {formatDateRange(eventData.startDate, eventData.endDate)}
                        <span className="meta-divider">|</span>
                        {eventData.price}
                    </p>
                </header>

                <img src={eventData.imageSrc} alt={`${eventData.title} banner`} className="event-banner-image" />
                
                <section className="event-description">
                    <p className="intro-paragraph">{eventData.introParagraph}</p>
                    <p>{eventData.fullDescription}</p>
                </section>

                <section className="details-grid">
                    <div className="details-column">
                        <h2>DETAILS</h2>
                        <p><strong>Start:</strong> {eventData.details.start}</p>
                        <p><strong>End:</strong> {eventData.details.end}</p>
                        <p><strong>Cost:</strong> {eventData.details.cost}</p>
                        <p><strong>Website:</strong> <a href="#">{eventData.details.website}</a></p>
                    </div>
                    <div className="organizer-column">
                        <h2>ORGANIZER</h2>
                        <p>{eventData.organizer.name}</p>
                        <p><strong>Phone:</strong> {eventData.organizer.phone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${eventData.organizer.email}`}>{eventData.organizer.email}</a></p>
                        <p><a href="#">{eventData.organizer.website}</a></p>
                    </div>
                    <div className="venue-column">
                        <h2>VENUE</h2>
                        <p>{eventData.venue.name}</p>
                        <p>{eventData.venue.address}</p>
                        <p><a href={eventData.venue.googleMapsLink}>+ Google Map</a></p>
                        <p><a href="#">{eventData.venue.website}</a></p>
                    </div>
                    <div className="map-column">
                        <iframe 
                            src={eventData.venue.mapEmbedSrc}
                            width="100%" 
                            height="250" 
                            style={{ border: 0 }}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>
                
                <nav className="event-navigation">
                    <a href="#">« Caltech Together: Houston, TX</a>
                    <a href="#">Finland ~ Arctic Magnificence »</a>
                </nav>
            </div>

            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-col contact-info">
                        <h3>Caltech Alumni</h3>
                        <p>Caltech Alumni Association</p>
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