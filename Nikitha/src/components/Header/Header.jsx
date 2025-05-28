import React from "react";
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-logo"]}>HackSphere 2025</div>
      <nav className={styles["header-nav"]}>
        <a href="#home" className={styles["header-link"]}>Home</a>
        <a href="#about" className={styles["header-link"]}>About</a>
        <a href="#schedule" className={styles["header-link"]}>Schedule</a>
        <a href="#faq" className={styles["header-link"]}>FAQ</a>
        <a href="#contact" className={styles["header-link"]}>Contact</a>
      </nav>
    </div>
  );
}

export default Header;
