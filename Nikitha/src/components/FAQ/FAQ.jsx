import React from "react";
import styles from './FAQ.module.css';

function FAQ() {
  return (
    <div className={styles["faq-container"]}>
      <h2 className={styles["faq-title"]}>Frequently Asked Questions</h2>
      <div className={styles["faq-cards"]}>
        <div className={styles["faq-card"]}>
          <div className={styles["faq-question"]}>What is HackSphere 2025?</div>
          <div className={styles["faq-answer"]}>
            HackSphere 2025 is a global 48-hour online hackathon that brings together developers, designers, and creators to collaborate and innovate.
          </div>
        </div>
        <div className={styles["faq-card"]}>
          <div className={styles["faq-question"]}>Who can participate?</div>
          <div className={styles["faq-answer"]}>
            Anyone with a passion for technology, coding, or design is welcome to join, regardless of experience level.
          </div>
        </div>
        <div className={styles["faq-card"]}>
          <div className={styles["faq-question"]}>How do I register?</div>
          <div className={styles["faq-answer"]}>
            Click the 'Register Now' button at the top of the page and fill out the registration form.
          </div>
        </div>
        <div className={styles["faq-card"]}>
          <div className={styles["faq-question"]}>Is there a participation fee?</div>
          <div className={styles["faq-answer"]}>
            No, HackSphere 2025 is completely free for all participants.
          </div>
        </div>
        {/* Add more FAQ cards as needed */}
      </div>
    </div>
  );
}

export default FAQ;
