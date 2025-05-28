import React from "react";
import styles from './Contactus.module.css'; 

function Contactus() {
  return (
    <div className={styles["contactus-container"]}>
      <h2 className={styles["contactus-title"]}>Contact Us</h2>
      <p className={styles["contactus-info"]}>
        Do you have any questions or need support? Email us at
        <a href="mailto:hacksphere2025@example.com" className={styles["contactus-link"]}>
          {" "}hacksphere2025@gmail.com
        </a>
      </p>
      <p className={styles["contactus-info"]}>
        Or reach us on Instagram:
        <a href="https://t.me/hacksphere2025" className={styles["contactus-link"]} target="_blank" rel="noopener noreferrer">
          {" "}@hacksphere2025
        </a>
      </p>
    </div>
  );
}

export default Contactus;
