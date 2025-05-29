import React, { useState } from 'react';

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  
  const faqItems = [
    {
      question: "Who can participate in HackSphere 2025?",
      answer: "Anyone with a passion for technology and innovation can join HackSphere. We welcome participants of all skill levels and backgrounds, from beginners to seasoned professionals. Whether you're a developer, designer, product manager, or just curious about tech, there's a place for you at HackSphere."
    },
    {
      question: "Do I need a team to participate?",
      answer: "You can participate solo or with a team of up to 4 people. We'll also have team formation activities before the event if you're looking to join forces with others. Our team matching platform will help you find teammates with complementary skills and interests."
    },
    {
      question: "Is HackSphere free to attend?",
      answer: "Yes! HackSphere is completely free to participate in. All you need is your creativity and a computer with internet access. We believe in making innovation accessible to everyone, regardless of financial constraints."
    },
    {
      question: "What are the prizes?",
      answer: "We have an exciting prize pool worth over $50,000, including cash prizes, tech gadgets, and opportunities to pitch to investors. Category winners will receive specialized prizes, and the grand prize winner will receive $10,000 and mentorship opportunities with industry leaders."
    },
    {
      question: "What kind of projects can I build?",
      answer: "You can build any type of software project that aligns with our hackathon themes, which will be announced one week before the event. Past themes have included sustainability, healthcare, education, and financial inclusion. We encourage innovative solutions that address real-world problems."
    },
    {
      question: "What technologies can I use?",
      answer: "You're free to use any programming languages, frameworks, or tools of your choice. We have no restrictions on technology stack, as long as you build your project during the hackathon period and follow our code of conduct."
    },
    {
      question: "How does judging work?",
      answer: "Projects will be evaluated by a panel of industry experts based on innovation, technical complexity, design, impact, and presentation. Each team will have 3 minutes to demo their project followed by 2 minutes of Q&A with the judges."
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes! We'll have mentors from top tech companies available throughout the event to help you with technical challenges, provide feedback on your ideas, and guide you through the development process. Mentorship sessions can be booked through our event platform."
    },
    {
      question: "What if I'm new to coding or hackathons?",
      answer: "HackSphere is beginner-friendly! We'll have workshops, starter kits, and dedicated mentors for first-time hackers. We also have a 'Beginner Track' with specialized prizes and support for those just starting their coding journey."
    },
    {
      question: "How do I prepare for HackSphere?",
      answer: "We recommend familiarizing yourself with basic coding concepts, joining our pre-event workshops, and coming with an open mind. We'll provide resources and tutorials before the event to help you prepare. The most important thing is enthusiasm and willingness to learn!"
    }
  ];
  
  return (
    <section className="section" style={{ backgroundColor: 'white', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="section-heading">Frequently Asked Questions</h1>
        
        <div style={{ maxWidth: '48rem', margin: '2rem auto 0' }}>
          {faqItems.map((faq, index) => (
            <div 
              key={index}
              style={{ 
                marginBottom: '1rem',
                border: '1px solid var(--gray-200)',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.25rem',
                  backgroundColor: openFaq === index ? 'var(--primary-50)' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontWeight: '600',
                  fontSize: '1.125rem',
                  color: openFaq === index ? 'var(--primary-700)' : 'var(--gray-800)',
                  transition: 'all 0.3s ease'
                }}
              >
                {faq.question}
                <span style={{ 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ↓
                </span>
              </button>
              
              {openFaq === index && (
                <div style={{ 
                  padding: '0 1.25rem 1.25rem',
                  backgroundColor: 'var(--primary-50)',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Still have questions? We're here to help!
          </p>
          <a href="/contact" className="btn-primary" style={{ display: 'inline-block' }}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
