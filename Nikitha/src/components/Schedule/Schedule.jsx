import React from "react";
import styles from './Schedule.module.css';

function Schedule() {
  return (
    <div className={styles["schedules-container"]}>
      <h3 className={styles["schedules-title"]}>Event Schedule</h3>
      <ul className={styles["schedules-list"]}>
        <li>
          <span className={styles["schedules-time"]}>June 20, 2025 - 6:00 PM (IST):</span> Opening Ceremony & Keynote Address
        </li>
        <li>
          <span className={styles["schedules-time"]}>June 21, 2025 - All Day:</span> Hacking, Mentorship & Online Workshops
        </li>
        <li>
          <span className={styles["schedules-time"]}>June 22, 2025 - 4:00 PM (IST):</span> Project Submission Deadline
        </li>
        <li>
          <span className={styles["schedules-time"]}>June 22, 2025 - 7:00 PM (IST):</span> Closing Ceremony & Winners Announcement
        </li>
      </ul>
    </div>
  );
}

export default Schedule;
