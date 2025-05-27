import React from "react";
import styles from './Header.module.css'; // Create this CSS file

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        HackSphere 2025
      </div>
      <nav className="header-nav">
        <a href="#hero" className="header-link">Home</a>
        <a href="#about" className="header-link">About</a>
        <a href="#schedule" className="header-link">Schedule</a>
        <a href="#faq" className="header-link">FAQ</a>
        <a href="#contact" className="header-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
