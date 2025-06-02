
function About() {
  return (
    <section id="about"
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "900px",
        margin: "30px auto",
        padding: "10px",
        color: "#ddd",
      }}
    >
      
      <div>
        <h2 style={{ color: " #ffc266", fontFamily: "'Orbitron', sans-serif" }}>
          ℹ️ About HackSphere 2025
        </h2>
        <p style={{ lineHeight: 1.6 }}>
          HackSphere 2025 is a global 48-hour online hackathon designed to unite brilliant minds from around the world. Whether you're a developer, designer, or creative thinker, this event offers a unique opportunity to collaborate, innovate, and build impactful solutions.
        </p>
        <p style={{ lineHeight: 1.6 }}>
          From idea to execution, you'll engage in high-energy problem-solving, network with international peers and mentors, and compete for exciting rewards — all from the comfort of your own space. Join us and be part of a futuristic tech movement.
        </p>
      </div>
    </section>
  );
}

export default About;
