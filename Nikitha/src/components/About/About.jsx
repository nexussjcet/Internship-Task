import React from "react";
import styles from './About.module.css'; // Import the CSS file

function About() {
  return (
    <div className={styles["about-container"]}>
      <h2 className={styles["about-title"]}>About HackSphere</h2>
      <p className={styles["about-text"]}>
        HackSphere 2025 is a global 48-hour online hackathon uniting developers, designers, and creators from every corner of the globe. Whether you're a seasoned coder or a first-time hacker, HackSphere is the perfect platform to innovate, collaborate, and push the boundaries of technology.        Join us for an electrifying weekend filled with workshops, mentorship, prizes, and the chance to connect with a vibrant, diverse tech community. Ready to code, create, and conquer? Register now and let your ideas take flight!
      </p>
      <div className={styles["stats-row"]}>
        <div className={styles["stat-card"]}>
          <div className={styles["stat-value"]}>700+</div>
          <div className={styles["stat-label"]}>Participants</div>
        </div>
        <div className={styles["stat-card"]}>
          <div className={styles["stat-value"]}>48</div>
          <div className={styles["stat-label"]}>Hours</div>
        </div>
        <div className={styles["stat-card"]}>
          <div className={styles["stat-value"]}>20+</div>
          <div className={styles["stat-label"]}>Special awards</div>
        </div>
        <div className={styles["stat-card"]}>
          <div className={styles["stat-value"]}>125K</div>
          <div className={styles["stat-label"]}>in Prizes</div>
        </div>
      </div>
    </div>
  );
}

export default About;
