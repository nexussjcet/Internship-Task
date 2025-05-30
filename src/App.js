// App.js

import React from "react";

// Simple CSS-in-JS for demo purposes
const styles = {
  body: {
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    minHeight: "100vh",
    margin: 0,
    color: "#fff",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    padding: "3rem 1rem 2rem 1rem",
    textAlign: "center",
  },
  eventName: {
    fontSize: "3rem",
    fontWeight: 800,
    letterSpacing: "-2px",
    marginBottom: "0.5rem",
    background: "linear-gradient(90deg, #ffaf7b, #d76d77)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  tagline: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "1.5rem",
    fontStyle: "italic",
    color: "#e0e0e0",
  },
  eventDetails: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
    color: "#b3e5fc",
  },
  cta: {
    background: "linear-gradient(90deg, #43cea2, #185a9d)",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: 700,
    padding: "0.85rem 2.5rem",
    border: "none",
    borderRadius: "2rem",
    cursor: "pointer",
    boxShadow: "0 2px 16px 0 rgba(30,60,114,0.2)",
    transition: "transform 0.2s",
  },
  about: {
    maxWidth: "700px",
    margin: "2rem auto 3rem auto",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "1rem",
    padding: "2rem 1.5rem",
    boxShadow: "0 1px 8px 0 rgba(30,60,114,0.08)",
    fontSize: "1.1rem",
    lineHeight: 1.7,
  },
  faq: {
    maxWidth: "700px",
    margin: "2rem auto",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "1rem",
    padding: "1.5rem",
  },
  faqQ: {
    fontWeight: 600,
    marginTop: "1.2rem",
    marginBottom: "0.5rem",
    color: "#ffd86b",
  },
  footer: {
    textAlign: "center",
    padding: "2rem 0 1rem 0",
    color: "#b0bec5",
    fontSize: "1rem",
    letterSpacing: "0.5px",
  },
};

export default function App() {
  return (
    <div style={styles.body}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.eventName}>HackSphere 2025</div>
        <div style={styles.tagline}>“Code. Create. Conquer.”</div>
        <div style={styles.eventDetails}>June 20–22, 2025 &nbsp;•&nbsp; Online</div>
        <a href="#register" style={{ textDecoration: "none" }}>
          <button style={styles.cta}>Register Now</button>
        </a>
      </section>

      {/* About Section */}
      <section style={styles.about}>
        <h2 style={{ color: "#ffd86b", marginBottom: "1rem" }}>About HackSphere</h2>
        <p>
          HackSphere 2025 is a global 48-hour online hackathon uniting developers, designers, and creators from every corner of the world. Whether you’re a coding prodigy, a design visionary, or a creative thinker, this is your stage to innovate and shine.
        </p>
        <p>
          Collaborate, compete, and push boundaries as you tackle real-world challenges, connect with like-minded peers, and showcase your talents to a global audience. Exciting prizes, inspiring mentors, and unforgettable experiences await. Are you ready to code, create, and conquer?
        </p>
      </section>

      {/* (Optional) FAQ Section */}
      <section style={styles.faq}>
        <h2 style={{ color: "#ffd86b", marginBottom: "1rem" }}>FAQ</h2>
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

