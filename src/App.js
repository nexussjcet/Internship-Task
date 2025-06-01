// App.js

import React from "react";

const styles = {
  page: {
    fontFamily: "'Montserrat', sans-serif",
    background: "linear-gradient(120deg, #232526 0%, #414345 100%)",
    minHeight: "100vh",
    margin: 0,
    color: "#222",
  },
  hero: {
    background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
    color: "#fff",
    padding: "4rem 1rem 3rem 1rem",
    textAlign: "center",
    boxShadow: "0 6px 24px 0 rgba(0,114,255,0.10)",
    borderRadius: "0 0 2.5rem 2.5rem",
  },
  eventName: {
    fontSize: "3.2rem",
    fontWeight: 900,
    letterSpacing: "-1.5px",
    marginBottom: "0.6rem",
    textShadow: "0 2px 16px rgba(0,0,0,0.13)",
  },
  tagline: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "1.2rem",
    fontStyle: "italic",
    color: "#e0f7fa",
  },
  eventDetails: {
    fontSize: "1.15rem",
    marginBottom: "2rem",
    color: "#fffde4",
    letterSpacing: "1px",
  },
  cta: {
    background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
    color: "#232526",
    fontSize: "1.25rem",
    fontWeight: 700,
    padding: "1rem 2.5rem",
    border: "none",
    borderRadius: "2rem",
    cursor: "pointer",
    boxShadow: "0 2px 12px 0 rgba(255,210,0,0.13)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  aboutWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "-3rem",
    marginBottom: "2rem",
    padding: "0 1rem",
  },
  aboutCard: {
    background: "#fff",
    color: "#232526",
    borderRadius: "1.5rem",
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
    maxWidth: "620px",
    padding: "2.5rem 2rem",
    margin: "0 auto",
    zIndex: 2,
    position: "relative",
  },
  aboutTitle: {
    color: "#0072ff",
    marginBottom: "1rem",
    fontWeight: 800,
    fontSize: "1.6rem",
    letterSpacing: "1px",
  },
  aboutText: {
    fontSize: "1.13rem",
    lineHeight: 1.7,
    marginBottom: "0.7rem",
  },
  faqSection: {
    maxWidth: "700px",
    margin: "2.5rem auto 0 auto",
    background: "rgba(255,255,255,0.07)",
    borderRadius: "1.5rem",
    padding: "2rem 1.5rem",
    boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
    color: "#fff",
  },
  faqTitle: {
    color: "#ffd200",
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "1.2rem",
  },
  faqQ: {
    fontWeight: 600,
    marginTop: "1.1rem",
    marginBottom: "0.4rem",
    color: "#f7971e",
  },
  footer: {
    textAlign: "center",
    padding: "2rem 0 1.2rem 0",
    color: "#b0bec5",
    fontSize: "1rem",
    letterSpacing: "0.5px",
    marginTop: "3rem",
  },
};

export default function App() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.eventName}>HackSphere 2025</div>
        <div style={styles.tagline}>“Code. Create. Conquer.”</div>
        <div style={styles.eventDetails}>June 20–22, 2025 &nbsp;•&nbsp; Online</div>
        <a href="#register" style={{ textDecoration: "none" }}>
          <button
            style={styles.cta}
            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.07)")}
            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Register Now
          </button>
        </a>
      </section>

      {/* About Section */}
      <div style={styles.aboutWrapper}>
        <section style={styles.aboutCard}>
          <div style={styles.aboutTitle}>About HackSphere</div>
          <div style={styles.aboutText}>
            HackSphere 2025 is a global 48-hour online hackathon uniting developers, designers, and creators from every corner of the world. Whether you’re a coding prodigy, a design visionary, or a creative thinker, this is your stage to innovate and shine.
          </div>
          <div style={styles.aboutText}>
            Collaborate, compete, and push boundaries as you tackle real-world challenges, connect with like-minded peers, and showcase your talents to a global audience. Exciting prizes, inspiring mentors, and unforgettable experiences await. Are you ready to code, create, and conquer?
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <div style={styles.faqTitle}>FAQ</div>
        <div>
          <div style={styles.faqQ}>Who can participate?</div>
          <div>Anyone 16+ worldwide. All skill levels welcome!</div>
        </div>
        <div>
          <div style={styles.faqQ}>Is it free?</div>
          <div>Yes! HackSphere 2025 is completely free to join.</div>
        </div>
        <div>
          <div style={styles.faqQ}>Do I need a team?</div>
          <div>You can join solo or form a team (up to 4 members). Team-matching will be available.</div>
        </div>
        <div>
          <div style={styles.faqQ}>What can I build?</div>
          <div>Anything! Web, mobile, AI, hardware, or creative solutions. Let your imagination run wild.</div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2025 HackSphere. All rights reserved.
      </footer>
    </div>
  );
}
