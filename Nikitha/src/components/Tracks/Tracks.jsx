import React from 'react';
import styles from './Tracks.module.css';

const Tracks = () => {
  return (
    <section id="tracks" className={styles.section}>
      <h2 className={styles.sectionTitle}>Tracks</h2>
      <div className={styles.tracksGrid}>
        <div className={styles.track}>
          <h3>AI & Machine Learning</h3>
          <p>Build innovative solutions using artificial intelligence and machine learning.</p>
        </div>
        <div className={styles.track}>
          <h3>Blockchain</h3>
          <p>Develop decentralized applications and explore blockchain technology.</p>
        </div>
        <div className={styles.track}>
          <h3>Health Tech</h3>
          <p>Create solutions to improve healthcare and wellness.</p>
        </div>
        <div className={styles.track}>
          <h3>Sustainability</h3>
          <p>Tackle environmental challenges with technology.</p>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
