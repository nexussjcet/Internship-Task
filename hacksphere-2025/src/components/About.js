import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="section" style={{ backgroundColor: 'white', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="section-heading">About HackSphere</h1>
        
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-600)', marginBottom: '1rem', marginTop: '2rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            HackSphere is a global 48-hour online hackathon bringing together developers, designers, and creators from around the world. 
            Our mission is to foster innovation and collaboration across borders and disciplines, creating a platform where 
            technology enthusiasts can connect, create, and contribute to solving real-world problems.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-600)', marginBottom: '1rem', marginTop: '2rem' }}>What Makes Us Different</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Unlike traditional hackathons, HackSphere is fully online, making it accessible to participants from every corner of the globe. 
            We provide a level playing field where ideas matter more than resources, and creativity trumps geography.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem', marginBottom: '3rem' }}>
            <div style={{ backgroundColor: 'var(--gray-50)', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-600)', marginBottom: '0.75rem' }}>Global Community</h3>
              <p>Connect with participants from over 100 countries, sharing diverse perspectives and approaches.</p>
            </div>
            
            <div style={{ backgroundColor: 'var(--gray-50)', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-600)', marginBottom: '0.75rem' }}>Expert Mentorship</h3>
              <p>Receive guidance from industry professionals who volunteer their time to help teams succeed.</p>
            </div>
            
            <div style={{ backgroundColor: 'var(--gray-50)', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-600)', marginBottom: '0.75rem' }}>Valuable Prizes</h3>
              <p>Compete for a prize pool worth over $50,000, including cash, tech gadgets, and investment opportunities.</p>
            </div>
          </div>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-600)', marginBottom: '1rem', marginTop: '2rem' }}>Our History</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Founded in 2020 as a response to the global pandemic, HackSphere began as a small virtual event with just 200 participants. 
            By 2024, we had grown to host over 5,000 hackers from 120+ countries, making us one of the largest online hackathons in the world. 
            For 2025, we're expecting our biggest and most diverse cohort yet, with new tracks focused on AI, sustainability, and accessibility.
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-600)', marginBottom: '1rem', marginTop: '2rem' }}>The Team Behind HackSphere</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            HackSphere is organized by a dedicated team of tech enthusiasts, former hackathon winners, and industry professionals 
            who are passionate about creating opportunities for the next generation of innovators. Our team works year-round to 
            secure partnerships, design challenges, and create the best possible experience for our participants.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/contact" className="btn-primary" style={{ display: 'inline-block' }}>Contact Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
