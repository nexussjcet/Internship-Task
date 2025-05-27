import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h2>HackSphere</h2>
          <span className={styles.year}>2025</span>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#schedule">Schedule</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>Resources</h3>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Code of Conduct</a></li>
              <li><a href="#">Past Events</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@hacksphere.tech">info@hacksphere.tech</a></li>
              <li className={styles.socialLinks}>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 HackSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
