import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/FAQ';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Register from './components/Register';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <div>
            <Link to="/" className="nav-logo">HackSphere</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/schedule" className="nav-link">Schedule</Link>
            <Link to="/partners" className="nav-link">Partners</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          
          {/* Register Button */}
          <div className="nav-links">
            <Link to="/register" className="btn-primary">Register Now</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div>
            <button 
              onClick={toggleMobileMenu}
              className="mobile-menu-button"
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <Link to="/about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/faq" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <Link to="/schedule" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Schedule</Link>
              <Link to="/partners" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Partners</Link>
              <Link to="/contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/register" className="btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Register Now</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>HackSphere 2025</h2>
            <p style={{ marginBottom: '1.5rem', maxWidth: '36rem' }}>
              Join us for a weekend of innovation, collaboration, and fun as we build solutions for a better tomorrow.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
              <a href="#" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Twitter</a>
              <a href="#" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>Instagram</a>
              <a href="#" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--gray-600)', textDecoration: 'none' }}>GitHub</a>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
              &copy; 2025 HackSphere. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;
