import styles from './hero.module.css';
import React from 'react';

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/download.gif')",
        minHeight: "100vh",
        backgroundSize:"97% 97%",
        backgroundPosition: "center",
        display: "flex",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
        width:"100vw"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />
      <div className={styles.heroContent} style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className={styles.blueBox}>
          <h1 className={styles.heroTitle}>HackSphere 2025</h1>
        </div>
        <div className={styles.tagline}>
          Code Create Conquer
        </div>
        <div className={styles.date}>
          Date : June 20-22 2025
        </div>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>Register</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
