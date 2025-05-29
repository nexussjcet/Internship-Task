import React, { useState } from "react";
import "./App.css";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Anyone with a passion for technology! Developers, designers, students, and creators from all around the world are welcome.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No, HackSphere 2025 is completely free to participate.",
  },
  {
    question: "What are the prizes?",
    answer:
      "Winners will receive exciting tech gadgets, cash rewards, and exclusive opportunities from our partners. Stay tuned for detailed prize announcements!",
  },
  {
    question: "How do teams work?",
    answer:
      "You can participate solo or in teams of up to 4 people. Team formation options will be available during registration.",
  },
];

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleFaqClick = (idx) => {
    setFaqOpen(faqOpen === idx ? null : idx);
  };

  return (
    <div className="container overall-bg">
      {/* Registration Modal */}
      {showRegistration && (
        <div className="modal-overlay" onClick={() => setShowRegistration(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Register for HackSphere 2025</h3>
            <form className="reg-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Team Name (optional)" />
              <button type="submit" onClick={e => {e.preventDefault(); alert("Registration submitted!"); setShowRegistration(false);}}>Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowRegistration(false)}>✕</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero enhanced-hero">
        <div className="hero-content">
          <h1>HackSphere <span style={{color: "var(--accent2"}}>2025</span></h1>
          <p className="tagline">Code. <span style={{color:"var(--accent2)"}}>Create.</span> <span style={{color:"var(--accent1)"}}>Conquer.</span></p>
          <p className="event-details">
            <span role="img" aria-label="calendar">📅</span> June 20–22, 2025 &nbsp; | &nbsp;
            <span role="img" aria-label="online"></span> Online
          </p>
          <button className="cta-btn" onClick={() => setShowRegistration(true)}>
            Register Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about card">
        <h2>About HackSphere</h2>
        <p>
          <b>HackSphere 2025</b> is a global 48-hour hackathon, uniting developers, designers, and creators from every continent. Whether you're a code wizard or a creative thinker, HackSphere is your launchpad to innovate, collaborate, and shine!
        </p>
        <p>
          Immerse yourself in a weekend of creativity, skill-building, and fun. Build something extraordinary, make new friends, and compete for amazing prizes in a celebration of technology and imagination!
        </p>
      </section>

      {/* FAQ Section */}
      <section className="faq card">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${faqOpen === idx ? "open" : ""}`}>
              <button className="faq-question" onClick={() => handleFaqClick(idx)}>
                {faq.question}
                <span>{faqOpen === idx ? "–" : "+"}</span>
              </button>
              {faqOpen === idx && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section in Footer */}
      <footer className="footer contact-footer card">
        <div>
          <h3>Contact Us</h3>
          <p>
            <span role="img" aria-label="email">📧</span> <a href="mailto:info@hacksphere.dev">info@hacksphere.dev</a>
          </p>
          <p>
            <span role="img" aria-label="twitter">🐦</span> <a href="https://twitter.com/hacksphere2025" target="_blank" rel="noopener noreferrer">@hacksphere2025</a>
          </p>
          <p>
            <span role="img" aria-label="location">🌎</span> Global & Online
          </p>
        </div>
        <div className="footer-bottom">
          © 2025 HackSphere. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App