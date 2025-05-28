import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>HackSphere 2025</h1>
        <p className="tagline">Code. Create. Conquer.</p>
        <p className="date-location">June 20–22, 2025 · Online</p>
        <a href="#" className="cta-button">
          Register Now
        </a>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About HackSphere</h2>
        <p>
          HackSphere 2025 is a global 48-hour hackathon that brings together
          developers, designers, and creators to innovate, build, and push the
          boundaries of technology.
        </p>
        <p>
          Join us for an unforgettable experience of collaboration, learning,
          and competition from anywhere in the world!
        </p>
      </section>

      {/* Footer */}
      <footer>© 2025 HackSphere. All rights reserved.</footer>
    </div>
  );
}

export default App;
