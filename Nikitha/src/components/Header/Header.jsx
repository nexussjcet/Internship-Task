import React from 'react';
import styles from './Header.module.css';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>HackSphere</h2>
        <span className={styles.year}>2025</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button className={styles.registerBtn}>Register Now</button>
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><button className={styles.mobileRegisterBtn}>Register Now</button></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
