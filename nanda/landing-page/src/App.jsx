import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "2rem" }}>
      
      {/* Hero Section */}
      <section style={{ backgroundColor: "#0d6efd", color: "white", padding: "4rem 2rem", borderRadius: "8px", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>HackSphere 2025</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "1rem", fontStyle: "italic" }}>“Code. Create. Conquer.”</p>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>June 20–22, 2025 – Online</p>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            backgroundColor: "white",
            color: "#0d6efd",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => alert("Registration is not open yet!")}
        >
          Register Now
        </button>
      </section>

      {/* About Section */}
      <section style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>About HackSphere 2025</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          HackSphere 2025 is a global 48-hour online hackathon that brings together developers, designers,
          and creators from all over the world to innovate, collaborate, and push boundaries.
        </p>
        <p style={{ fontSize: "1.1rem" }}>
          Whether you're a seasoned coder or a beginner with big ideas, HackSphere is the perfect platform
          to learn, build, and showcase your creativity in a high-energy, inclusive environment.
        </p>
      </section>

      {/* Footer Section */}
      <footer style={{ marginTop: "4rem", padding: "1rem 0", borderTop: "1px solid #ccc", fontSize: "0.9rem", color: "#666" }}>
        © 2025 HackSphere. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
