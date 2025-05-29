import { useState, useEffect } from 'react';
import './Nav.css'; 
import SocialIcons from './SocialIcons';

const Nav = () => {
  const [showContact, setShowContact] = useState(false);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-contact')) {
        setShowContact(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src="/logo.png" alt="HackSphere Logo" className="nav-logo" />
        <span className="nav-title">HackSphere</span>
      </div>

      <div className="nav-right">
        <a className="nav-link" onClick={() => {
        const section = document.getElementById('about');
        section?.scrollIntoView({ behavior: 'smooth' });
        }}>About</a>
        <a className="nav-link" href="#features">Features</a>
        <a className="nav-link" href="#timeline">Timeline</a>
        
        <div className="nav-contact">
          <a className="nav-link" onClick={() => setShowContact(!showContact)}>Contact Us</a>

          {showContact && (
            <div className="contact-dropdown">
              <p> +91 9876543210</p>
              <p> hacksphere@team.com</p>
              <SocialIcons />
            </div>
          )}
        </div>

        <a className="nav-btn" href="#register">Register</a>
      </div>
    </nav>
  );
};

export default Nav;
