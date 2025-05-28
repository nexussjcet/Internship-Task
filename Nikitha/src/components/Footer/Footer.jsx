import React from "react";
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <span className={styles.footerLogo}>
            <b>HackSphere</b> <span>2025</span>
          </span>
        </div>
        <div>
          <div className={styles.footerSectionTitle}>Quick Links</div>
          <ul className={styles.footerSectionList}>
            <li><a href="#about">About</a></li>
            <li><a href="#tracks">Tracks</a></li>
            <li><a href="#schedule">Schedule</a></li>
          </ul>
        </div>
        <div>
          <div className={styles.footerSectionTitle}>Resources</div>
          <ul className={styles.footerSectionList}>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#coc">Code of Conduct</a></li>
            <li><a href="#past">Past Events</a></li>
          </ul>
        </div>
        <div>
          <div className={styles.footerSectionTitle}>Contact</div>
          <ul className={styles.footerSectionList}>
            <li><a href="mailto:info@hacksphere.tech">info@hacksphere.tech</a></li>
            <li>
              <a href="#">Twitter</a>{" "}
              <a href="#">Instagram</a>{" "}
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2025 HackSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
