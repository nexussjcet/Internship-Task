import React, { useState } from "react";
import "./styles.css";

export default function HackSphere2025() {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs = [
    {
      id: "faq-1",
      question: "Who can participate in HackSphere?",
      answer:
        "HackSphere is open to everyone! Whether you're a student, professional, or hobbyist, as long as you're passionate about technology and innovation, you're welcome to join. Participants of all skill levels from around the world are encouraged to apply.",
    },
    {
      id: "faq-2",
      question: "Do I need a team to participate?",
      answer:
        "You can participate individually or as part of a team of up to 4 members. We encourage team participation as it allows for diverse skills and perspectives. Don't have a team? No worries! We'll have team formation events before the hackathon where you can meet potential teammates.",
    },
    {
      id: "faq-3",
      question: "Is there a registration fee?",
      answer:
        "No, participation in HackSphere 2025 is completely free! Thanks to our generous sponsors, we're able to offer this opportunity at no cost to participants.",
    },
    {
      id: "faq-4",
      question: "What kind of projects can I build?",
      answer:
        "You can build any type of software project that aligns with one of our themes or addresses a problem you're passionate about. This includes web applications, mobile apps, games, AI/ML solutions, blockchain applications, IoT projects, and more. The key is innovation and creativity!",
    },
    {
      id: "faq-5",
      question: "How will projects be judged?",
      answer:
        "Projects will be evaluated based on innovation, technical complexity, design and user experience, practicality and impact, and presentation quality. Our panel of judges includes industry experts, tech leaders, and venture capitalists who will review all submissions thoroughly.",
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      
      <section className="hero">
        <h1>HackSphere 2025</h1>
        <p className="tagline">Code. Create. Conquer.</p>
        <p className="event-dates">June 20–22, 2025 – Online</p>
        <button className="register-btn">Register Now</button>
      </section>

      <section className="about" id="about">
  <h2>About HackSphere</h2>
  <div className="about-content">
    <div className="about-text">
      <p>
        HackSphere 2025 is a global 48-hour virtual hackathon bringing together developers, designers, and innovators from around the world. Our mission is to foster collaboration and creativity to solve real-world challenges through technology.
      </p>
      <p>
        Whether you're a seasoned developer or just starting your coding journey, HackSphere provides the perfect platform to showcase your skills, learn from industry experts, and connect with like-minded individuals passionate about technology and innovation.
      </p>

      <div className="about-features">
        <div className="feature-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6366F1" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>
          <div>
            <strong>Global Community</strong><br />
            Connect with participants from over 120 countries
          </div>
        </div>

        <div className="feature-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6366F1" viewBox="0 0 24 24"><path d="M13 2h-2v3h2V2zm5.66 3.34l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM22 11h-3v2h3v-2zm-4.95 7.05l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 22h2v-3h-2v3zM4.34 18.66l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM2 13h3v-2H2v2zm4.95-7.05L5.54 4.54 3.41 6.66l1.41 1.41 2.13-2.12z"/></svg>
          <div>
            <strong>Innovation Focus</strong><br />
            Tackle challenges across various tech domains
          </div>
        </div>

        <div className="feature-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6366F1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
             10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.52-.77-7.07-2.93l1.41-1.41a5.985 5.985 0 005.66 1.41v2.93zM4.07 13c.13-2.17.96-4.14 2.36-5.64l1.41 1.41A5.985 5.985 0 005.07 13H4.07zM13 4.07v2.93a5.985 5.985 0 005.66 1.41l1.41-1.41C18.52 4.84 15.83 3.59 13 4.07z"/></svg>
          <div>
            <strong>Amazing Prizes</strong><br />
            Win from a prize pool of $50,000+
          </div>
        </div>

        <div className="feature-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6366F1" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4
             8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4
             v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          <div>
            <strong>Expert Mentorship</strong><br />
            Get guidance from industry leaders
          </div>
        </div>
      </div>
    </div>

    <div className="about-img-container">
      <img
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
        alt="Hackathon"
        className="about-img"
      />
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-sub">Everything you need to know about HackSphere 2025</p>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.id}>
              <button
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
              >
                <span>{faq.question}</span>
                <span
                  className="faq-icon"
                  data-open={openFaqs[faq.id] ? "true" : "false"}
                >
                  ▼
                </span>
              </button>
              {openFaqs[faq.id] && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
    <section className="partners">
  <h2>Our Sponsors</h2>
  <p className="partners-sub">Supported by leading technology companies and organizations</p>

  <div className="sponsor-grid">
    <div className="sponsor-card">
      <i className="fab fa-microsoft fa-2x"></i>
      <span>Microsoft</span>
    </div>
    <div className="sponsor-card">
      <i className="fab fa-google fa-2x"></i>
      <span>Google</span>
    </div>
    <div className="sponsor-card">
      <i className="fab fa-amazon fa-2x"></i>
      <span>Amazon</span>
    </div>
    <div className="sponsor-card">
      <i className="fab fa-apple fa-2x"></i>
      <span>Apple</span>
    </div>
    <div className="sponsor-card">
      <i className="fab fa-facebook-f fa-2x"></i>
      <span>Meta</span>
    </div>
    <div className="sponsor-card">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-N-Symbol-logo-red-transparent-RGB-png.png"
        alt="Netflix"
        className="sponsor-logo"
      />
      <span>Netflix</span>
    </div>
    <div className="sponsor-card">
      <i className="fab fa-github fa-2x"></i>
      <span>GitHub</span>
    </div>
    <div className="sponsor-card">
      <i className="fab fa-spotify fa-2x"></i>
      <span>Spotify</span>
    </div>
  </div>

  <p className="sponsor-cta">Interested in sponsoring HackSphere 2025?</p>
  <button className="sponsor-btn">Become a Sponsor</button>
</section>


    
      {/* Footer */}
      <section className="footer-section">
  <div className="footer-container">
    <div className="footer-column about">
      <h3 className="footer-logo">HackSphere</h3>
      <p className="footer-description">
        The global hackathon bringing together the brightest minds to create innovative solutions for tomorrow's challenges.
      </p>
      <div className="footer-socials">
        <i className="fab fa-x-twitter"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>

    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li>About</li>
        <li>Schedule</li>
        <li>Prizes</li>
        <li>Sponsors</li>
        <li>FAQ</li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Resources</h4>
      <ul>
        <li>Code of Conduct</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </div>

    <div className="footer-column subscribe">
      <h4>Stay Updated</h4>
      <p>Subscribe to our newsletter for the latest updates and announcements.</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
   {/* Contact Section */}
      <section className="contact">
  <h2>Contact Us</h2>
  <p>
    Have any questions? Reach out to us at{" "}
    <a href="mailto:team@hacksphere.com">team@hacksphere.com</a>
  </p>
</section>
</section>
      <footer className="footer">© 2025 HackSphere. All rights reserved.</footer>
    </div>
  );
}
