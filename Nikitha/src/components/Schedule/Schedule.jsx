import React from 'react';
import styles from './Schedule.module.css';

const Schedule = () => {
  return (
    <section id="schedule" className={styles.section}>
      <h2 className={styles.sectionTitle}>Schedule</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <h3>Day 1 - March 15</h3>
          <ul>
            <li><span>9:00 AM</span> - Registration Opens</li>
            <li><span>10:30 AM</span> - Opening Ceremony</li>
            <li><span>12:00 PM</span> - Hacking Begins</li>
            <li><span>1:00 PM</span> - Lunch</li>
            <li><span>5:00 PM</span> - Workshop: Getting Started</li>
            <li><span>7:00 PM</span> - Dinner</li>
          </ul>
        </div>
        <div className={styles.timelineItem}>
          <h3>Day 2 - March 16</h3>
          <ul>
            <li><span>8:00 AM</span> - Breakfast</li>
            <li><span>10:00 AM</span> - Mentor Sessions</li>
            <li><span>1:00 PM</span> - Lunch</li>
            <li><span>3:00 PM</span> - Workshop: Pitching</li>
            <li><span>7:00 PM</span> - Dinner</li>
            <li><span>9:00 PM</span> - Gaming Tournament</li>
          </ul>
        </div>
        <div className={styles.timelineItem}>
          <h3>Day 3 - March 17</h3>
          <ul>
            <li><span>8:00 AM</span> - Breakfast</li>
            <li><span>11:00 AM</span> - Submission Deadline</li>
            <li><span>12:00 PM</span> - Lunch</li>
            <li><span>1:00 PM</span> - Judging Begins</li>
            <li><span>4:00 PM</span> - Closing Ceremony</li>
            <li><span>5:00 PM</span> - Winners Announcement</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
