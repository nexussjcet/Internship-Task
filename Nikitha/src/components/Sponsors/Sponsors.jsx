import React from 'react';
import styles from './Sponsors.module.css';

const Sponsors = () => {
  return (
    <section id="sponsors" className={styles.section}>
      <h2 className={styles.sectionTitle}>Sponsors</h2>
      <p className={styles.sponsorText}>Our amazing sponsors who make HackSphere possible</p>
      <div className={styles.sponsorTiers}>
        <div className={styles.tier}>
          <h3>Platinum Sponsors</h3>
          <div className={styles.sponsorLogos}>
            <div className={styles.sponsorLogo}></div>
            <div className={styles.sponsorLogo}></div>
          </div>
        </div>
        <div className={styles.tier}>
          <h3>Gold Sponsors</h3>
          <div className={styles.sponsorLogos}>
            <div className={styles.sponsorLogo}></div>
            <div className={styles.sponsorLogo}></div>
            <div className={styles.sponsorLogo}></div>
          </div>
        </div>
        <div className={styles.tier}>
          <h3>Silver Sponsors</h3>
          <div className={styles.sponsorLogos}>
            <div className={styles.sponsorLogo}></div>
            <div className={styles.sponsorLogo}></div>
            <div className={styles.sponsorLogo}></div>
            <div className={styles.sponsorLogo}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
