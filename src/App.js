import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <h1>HackSphere 2025</h1>
          <p className="tagline">Code. Create. Conquer.</p>
          <p className="date-location">June 20–22, 2025 · Online</p>
          <a href="#" className="btn-register">
            Register Now

          </a>
        </div>
      </header>

      <section className="about">
        <div className="container">
          <h2>What's HackSphere?</h2>
          <p>
            HackSphere 2025 is more than just a hackathon — it's a global online
            festival of innovation, design, and creativity. Over 48 electrifying
            hours, passionate minds will collaborate to build solutions that make
            a difference.
          </p>
          <p>
            Whether you're a seasoned developer or a curious creator, join us to
            code, connect, and compete in an unforgettable experience.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 HackSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

