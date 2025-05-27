import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>HackSphere 2025</h1>
        <p className={styles.tagline}>Innovate. Create. Transform.</p>
        <p className={styles.date}>March 15-17, 2025</p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>Register</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
