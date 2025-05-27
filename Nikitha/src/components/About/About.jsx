import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.sectionTitle}>About HackSphere</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>HackSphere is a 48-hour hackathon where innovators, developers, and creators come together to build revolutionary solutions for real-world problems.</p>
          <p>Join us for an unforgettable weekend of coding, collaboration, and creativity. Whether you're a seasoned developer or just starting out, HackSphere welcomes all skill levels.</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>500+</h3>
            <p>Participants</p>
          </div>
          <div className={styles.stat}>
            <h3>48</h3>
            <p>Hours</p>
          </div>
          <div className={styles.stat}>
            <h3>$20K</h3>
            <p>in Prizes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
