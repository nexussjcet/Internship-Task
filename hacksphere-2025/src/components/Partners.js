import React from 'react';
import { Link } from 'react-router-dom';

function Partners() {
  const partners = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      description: "Google is a global technology leader focused on improving the ways people connect with information."
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      description: "Microsoft is a leading global provider of cloud computing services, software, hardware, and solutions."
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
      description: "Apple designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories."
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      description: "IBM is a global technology company that provides hardware, software, cloud services, and AI technology."
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      description: "Amazon is a multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence."
    },
    {
      name: "Mozilla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
      description: "Mozilla is a free software community that creates open-source software including the Firefox web browser."
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
      description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more."
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png",
      description: "Intel is a leader in the semiconductor industry, developing advanced integrated digital technology platforms."
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'white', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="section-heading">Our Partners</h1>
        
        <p style={{ fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '48rem', margin: '0 auto 3rem', textAlign: 'center' }}>
          HackSphere 2025 is made possible by the generous support of our industry partners. 
          These leading technology companies provide mentorship, prizes, and resources to help our participants succeed.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {partners.map((partner, index) => (
            <div 
              key={index}
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '0.5rem', 
                padding: '2rem', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <div style={{ 
                height: '100px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ maxHeight: '80px', maxWidth: '200px', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>{partner.name}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {partner.description}
              </p>
              <a 
                href="#" 
                style={{ 
                  color: 'var(--primary-600)', 
                  fontWeight: '500', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                Learn More
                <span style={{ marginLeft: '0.25rem' }}>→</span>
              </a>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.5rem', maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-700)' }}>Become a Partner</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Interested in supporting the next generation of tech innovators? Join our partner program!
          </p>
          <Link to="/contact" className="btn-primary" style={{ display: 'inline-block' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Partners;
