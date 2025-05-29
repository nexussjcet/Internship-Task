import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient hero">
        <div className="container">
          <h1 className="animate-fadeInUp">HackSphere 2025</h1>
          <p className="hero-tagline animate-fadeInUp delay-100">Code. Create. Conquer.</p>
          <p className="hero-date animate-fadeInUp delay-200">June 20–22, 2025 – Online</p>
          <Link to="/register" className="hero-cta animate-fadeInUp delay-300">
            Register Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <h2 className="section-heading">About HackSphere</h2>
          <div className="about-text">
            <p>
              HackSphere is a global 48-hour online hackathon bringing together developers, designers, and creators from around the world. Our mission is to foster innovation and collaboration across borders and disciplines.
            </p>
            <p>
              Whether you're a seasoned developer or just starting your coding journey, HackSphere provides the perfect platform to showcase your skills, learn from peers, and build solutions that address real-world challenges. Join us for an unforgettable weekend of coding, creativity, and community!
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/about" className="btn-primary" style={{ display: 'inline-block' }}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
        <div className="container">
          <h2 className="section-heading">Quick Links</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            maxWidth: '64rem', 
            margin: '0 auto' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              padding: '2rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>FAQ</h3>
              <p style={{ marginBottom: '1.5rem' }}>Get answers to commonly asked questions about HackSphere 2025.</p>
              <Link to="/faq" style={{ 
                color: 'var(--primary-600)', 
                fontWeight: '600', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center' 
              }}>
                View FAQs
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              padding: '2rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>Schedule</h3>
              <p style={{ marginBottom: '1.5rem' }}>Check out the full event schedule for the hackathon weekend.</p>
              <Link to="/schedule" style={{ 
                color: 'var(--primary-600)', 
                fontWeight: '600', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center' 
              }}>
                View Schedule
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              padding: '2rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>Partners</h3>
              <p style={{ marginBottom: '1.5rem' }}>Meet the amazing companies supporting HackSphere 2025.</p>
              <Link to="/partners" style={{ 
                color: 'var(--primary-600)', 
                fontWeight: '600', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center' 
              }}>
                View Partners
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '0.5rem', 
              padding: '2rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-600)' }}>Contact</h3>
              <p style={{ marginBottom: '1.5rem' }}>Have questions? Reach out to our team for assistance.</p>
              <Link to="/contact" style={{ 
                color: 'var(--primary-600)', 
                fontWeight: '600', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center' 
              }}>
                Contact Us
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>Ready to Join HackSphere 2025?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem' }}>
            Registration is open until June 1, 2025. Secure your spot now!
          </p>
          <Link to="/register" className="btn-primary" style={{ fontSize: '1.125rem' }}>
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
