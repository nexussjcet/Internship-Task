import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  return (
    <section id="faq" className={styles.section}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqGrid}>
        <div className={styles.faqItem}>
          <h3>Who can participate?</h3>
          <p>Anyone can participate! Whether you're a student, professional, or hobbyist, HackSphere is open to all.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Do I need a team?</h3>
          <p>You can register as an individual or with a team of up to 4 members. We'll have team formation activities for those who join solo.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Is there an entry fee?</h3>
          <p>No, participation is completely free! We provide food, workspace, and swag for all participants.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>What should I bring?</h3>
          <p>Bring your laptop, charger, and any hardware you want to work with. We'll provide everything else!</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
