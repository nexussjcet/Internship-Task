import './App.css';
import Card from './Components/Card';
import About from './Components/About';
import Countdown from './Components/Countdown';
import Nav from './Components/Nav';

function App() {
  const featuresData = [
    {
      icon: "✨",
      title: "Innovation Unleashed",
      description: "Build projects that solve real-world problems and redefine the future.",
    },
    {
      icon: "🌐",
      title: "Global Collaboration",
      description: "Connect with participants and mentors from over 50 countries.",
    },
    {
      icon: "⏱",
      title: "48-Hour Challenge",
      description: "Push your limits in a high-energy coding sprint with amazing prizes.",
    },
  ];

  return (
    <>
    <Nav></Nav>
    <header>
      
    <div className="hero">
      <h1>HackSphere</h1>
      <div className="cta">
        <Countdown />
      </div>
      <p className="tagline">“Code. Create. Conquer.”</p>
      <p className="event-info">June 20–22, 2025 — Online</p>
      
    </div>
    </header>

      <section className="features">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
        <About />
      <footer>
        &copy; 2025 HackSphere. All rights reserved. | Designed for creators, by
        creators.
         
      </footer>
    </>
  );
}

export default App;
