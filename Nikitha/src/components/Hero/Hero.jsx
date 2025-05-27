import styles from './hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.blueBox}>
          <h1>HackSphere 2025</h1>
        </div>
        <div className={styles.tagline}>
          Code Create Conquer
        </div>
        <div className={styles.date}>
          June 20-22, 2025
        </div>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>Register</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
