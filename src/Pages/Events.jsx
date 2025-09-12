import React, { useState } from 'react';
import './EventsPage.css'; // keep your existing CSS

// --------------------
// SVG Icon Components
// --------------------
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
const LinkedInIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.29 13.29V9.29H8.29v7h2.42zm-1.21-8.21a1.46 1.46 0 100-2.92 1.46 1.46 0 000 2.92zM17.29 16.29V12.5c0-1.92-.44-3.21-2.42-3.21-1.12 0-1.85.61-2.17 1.2V9.29h-2.42v7h2.42v-3.47c0-.92.22-1.81 1.33-1.81 1.09 0 1.11 1.05 1.11 1.87v3.41h2.44z"></path></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"></path></svg>;

// --------------------
// Dummy events (same as your list)
// --------------------
const dummyEvents = [
    {
        id: 1,
        date: '2025-09-11T11:45:00-07:00', // PDT
        title: 'LA South Bay Techers Monthly Lunch (September)',
        locationName: 'Brewport Tap House & Kitchen',
        locationAddress: '204 Main Street, El Segundo, CA, United States',
        description: 'Meet fellow alumni for lunch, connect with others in your field, talk science, and share Caltech memories.',
        price: 'Free',
        imageSrc: 'https://placehold.co/300x150/6e40c9/ffffff/webp?text=Caltech+Together',
        isFeatured: false,
    },
    {
        id: 2,
        date: '2025-09-18T18:00:00-07:00', // PDT
        title: 'Caltech Together: Silicon Valley',
        locationName: 'Intuitive Surgical',
        locationAddress: 'Café in B108 1020 Kifer Road, Sunnyvale, CA, United States',
        description: 'Join fellow alumni in person for a presentation by Shuki Bruck who will discuss, "Information: From Life to Artificial Intelligence".',
        price: '$30',
        imageSrc: 'https://placehold.co/300x150/6e40c9/ffffff/webp?text=Caltech+Together',
        isFeatured: false,
    },
    {
        id: 3,
        date: '2025-09-20T10:00:00-04:00', // UTC-4
        title: 'Caltech Together: Lancaster, PA',
        locationName: 'Cherry Crest Farm',
        locationAddress: '150 Cherry Hill Road, Ronks, PA, United States',
        description: 'Connect with fellow alumni for a morning of fall activities at Cherry Crest Farm in Ronks, Pennsylvania.',
        price: 'Free',
        imageSrc: 'https://placehold.co/300x150/6e40c9/ffffff/webp?text=Caltech+Together',
        isFeatured: false,
    },
    {
        id: 4,
        date: '2025-09-25T18:00:00-07:00', // PDT
        title: 'Annual Meeting of Members',
        locationName: 'Online',
        locationAddress: '',
        description: 'Register for the Annual Meeting of Members to hear CAA updates and learn more about upcoming plans.',
        price: 'Free',
        imageSrc: 'https://placehold.co/300x150/005f73/ffffff/webp?text=Annual+Meeting',
        isFeatured: true,
    },
    {
        id: 5,
        date: '2025-10-17T09:00:00-07:00', // PDT
        endDate: '2025-10-19T13:00:00-07:00',
        title: 'Alumni Weekend',
        locationName: 'California Institute of Technology',
        locationAddress: '1200 East California Boulevard, Pasadena, CA, United States',
        description: 'Join the Caltech community for the annual Alumni Weekend from Friday, October 17 to Sunday, October 19, 2025!',
        price: '$25 - $200',
        imageSrc: 'https://placehold.co/300x150/0a9396/ffffff/webp?text=Alumni+Weekend',
        isFeatured: true,
    },
    {
        id: 6,
        date: '2026-02-19T00:00:00Z',
        endDate: '2026-02-27T00:00:00Z',
        title: 'Finland ~ Arctic Magnificence',
        locationName: 'Finland',
        locationAddress: '',
        description: 'Experience the magic of the Arctic with fellow alumni on this unforgettable trip to Finland.',
        price: 'Varies',
        imageSrc: 'https://placehold.co/300x150/007f5f/ffffff/webp?text=Finland+Trip',
        isFeatured: false,
    },
];

// --------------------
// EventDetailPage — shows details for a single event
// --------------------
function EventDetailPage({ event, onBack, onNavigate }) {
  // event: the event object from the list
  if (!event) return null;

  const formatDateRange = (start, end) => {
    const startDate = new Date(start);
    if (!end) {
      return startDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
    }
    const endDate = new Date(end);

    const sameDay = startDate.toDateString() === endDate.toDateString();
    if (sameDay) {
      const startStr = startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      const startTime = startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      const endTime = endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' });
      return `${startStr} at ${startTime} — ${endTime}`;
    }

    return `${startDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })} — ${endDate.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}`;
  };

  // Provide sane fallbacks for organizer/venue when they're not in the event object
  const organizer = event.organizer || {
    name: 'Caltech Alumni Relations',
    phone: '626-395-6592',
    email: 'info@alumni.caltech.edu',
    website: 'View Organizer Website'
  };

  const venue = event.venue || {
    name: event.locationName || 'TBD',
    address: event.locationAddress || '',
    googleMapsLink: '#',
    website: 'View Venue Website',
    mapEmbedSrc: ''
  };

  return (
    <div className="event-detail-page">
      <div className="content-wrapper">
        <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="back-link">« All Events</a>

        <header className="event-header">
          <h1>{event.title}</h1>
          <p className="event-meta">
            {formatDateRange(event.date || event.startDate, event.endDate)}
            <span className="meta-divider">|</span>
            {event.price || 'Free'}
          </p>
        </header>

        {event.imageSrc && <img src={event.imageSrc} alt={`${event.title} banner`} className="event-banner-image" />}

        <section className="event-description">
          <p className="intro-paragraph">{event.description}</p>
          {/* you can expand this to include a richer full description if available */}
        </section>

        <section className="details-grid">
          <div className="details-column">
            <h2>DETAILS</h2>
            <p><strong>Start:</strong> {new Date(event.date || event.startDate).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}</p>
            {event.endDate && <p><strong>End:</strong> {new Date(event.endDate).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}</p>}
            <p><strong>Cost:</strong> {event.price || 'Free'}</p>
            <p><strong>Website:</strong> <a href="#">{event.website || 'Event website'}</a></p>
          </div>

          <div className="organizer-column">
            <h2>ORGANIZER</h2>
            <p>{organizer.name}</p>
            <p><strong>Phone:</strong> {organizer.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${organizer.email}`}>{organizer.email}</a></p>
            <p><a href="#">{organizer.website}</a></p>
          </div>

          <div className="venue-column">
            <h2>VENUE</h2>
            <p>{venue.name}</p>
            <p>{venue.address}</p>
            <p><a href={venue.googleMapsLink}>+ Google Map</a></p>
            <p><a href="#">{venue.website}</a></p>
          </div>

          <div className="map-column">
            {venue.mapEmbedSrc ? (
              <iframe 
                src={venue.mapEmbedSrc}
                width="100%" 
                height="250" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${event.title} map`}
              />
            ) : (
              <div style={{ height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>Map unavailable</div>
            )}
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

// --------------------
// Main EventsPage component — now supports clicking to open EventDetailPage
// --------------------
export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('List'); // List, Month, Day
  const [filterType, setFilterType] = useState('Upcoming'); // Upcoming, Past
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events by search + upcoming/past
  const filteredEvents = dummyEvents.filter(event => {
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch = !q || event.title.toLowerCase().includes(q) || event.locationName.toLowerCase().includes(q) || event.description.toLowerCase().includes(q);

    const now = new Date();
    const eventDate = new Date(event.date);
    const matchesFilter = filterType === 'Upcoming' ? eventDate >= now : eventDate < now;

    return matchesSearch && matchesFilter;
  });

  const eventsByMonth = filteredEvents.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const monthYear = eventDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    if (!acc[monthYear]) acc[monthYear] = [];
    acc[monthYear].push(event);
    return acc;
  }, {});

  const getEventDay = (dateStr) => new Date(dateStr).getDate();
  const getEventDayOfWeek = (dateStr) => new Date(dateStr).toLocaleString('default', { weekday: 'short' }).toUpperCase();

  const openEventDetail = (event) => {
    setSelectedEvent(event);
    // switch to a "detail" view; you can also update URL/hash here if you like
    setViewMode('Detail');
    // scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => {
    setSelectedEvent(null);
    setViewMode('List');
  };

  const renderEventsView = () => {
    if (viewMode === 'Month') return <div className="placeholder-view">Month View Coming Soon</div>;
    if (viewMode === 'Day') return <div className="placeholder-view">Day View Coming Soon</div>;

    // LIST view
    return (
      <div className="events-list">
        {Object.keys(eventsByMonth).length > 0 ? (
          Object.keys(eventsByMonth).map(month => (
            <div key={month} className="month-group">
              <h2 className="month-header">{month}</h2>
              {eventsByMonth[month].map(event => (
                <div
                  key={event.id}
                  className={`event-item ${event.isFeatured ? 'featured-event' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => openEventDetail(event)}
                  onKeyDown={(e) => { if (e.key === 'Enter') openEventDetail(event); }}
                >
                  <div className="event-date">
                    <span className="day-of-week">{getEventDayOfWeek(event.date)}</span>
                    <span className="day-number">{getEventDay(event.date)}</span>
                  </div>

                  <div className="event-details">
                    <p className="event-timestamp">
                      {new Date(event.date).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
                    </p>
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-location">
                      <strong>{event.locationName}</strong>{event.locationAddress ? ` - ${event.locationAddress}` : ''}
                    </p>
                    <p className="event-description">{event.description}</p>
                    <p className="event-price">{event.price}</p>
                  </div>

                  <div className="event-image">
                    <img src={event.imageSrc} alt={`${event.title} banner`} />
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="no-events-message">No events found.</p>
        )}
      </div>
    );
  };

  // If an event is selected, render the detail page component and pass the event
  if (selectedEvent && viewMode === 'Detail') {
    return <EventDetailPage event={selectedEvent} onBack={closeDetail} />;
  }

  return (
    <div className="events-page-container">
      <header className="events-banner">
        <div className="events-banner-overlay">
          <h1>Events</h1>
        </div>
      </header>

      <main className="events-content">
        <div className="events-controls">
          <div className="search-bar">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for events"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="view-options">
            <button className="find-events-btn">Find Events</button>
            <button className={viewMode === 'List' ? 'active' : ''} onClick={() => setViewMode('List')}>List</button>
            <button className={viewMode === 'Month' ? 'active' : ''} onClick={() => setViewMode('Month')}>Month</button>
            <button className={viewMode === 'Day' ? 'active' : ''} onClick={() => setViewMode('Day')}>Day</button>
          </div>
        </div>

        <div className="date-navigation">
          <div className="nav-arrows">
            <button aria-label="previous"><ChevronLeft /></button>
            <button aria-label="next"><ChevronRight /></button>
          </div>
          <button className="today-btn" onClick={() => { setFilterType('Upcoming'); setSearchTerm(''); }}>Today</button>
          <div className="filter-dropdown">
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="Upcoming">Upcoming</option>
              <option value="Past">Past Events</option>
            </select>
          </div>
        </div>

        {renderEventsView()}
      </main>

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