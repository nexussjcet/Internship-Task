import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HackSphere = () => {
  const canvasRef = useRef(null);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    AOS.init({ once: true });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0ff';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = Math.random() > 0.5 ? '0' : '1';
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    }

    const interval = setInterval(drawMatrix, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const eventDate = new Date('June 20, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setCountdown('HackSphere 2025 is Live!');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleFaq = (e) => {
    e.currentTarget.parentNode.classList.toggle('active');
  };

  return (
    <div>
    <nav className="navbar" data-aos="fade-down">
  <div className="logo">HackSphere</div>

  <input type="checkbox" id="menu-toggle" className="menu-toggle" />
  <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

  <ul className="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#agenda">Agenda</a></li>
    <li><a href="#partners">Partners</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
</nav>


      <header className="hero">
        <canvas ref={canvasRef} id="dotsBackground"></canvas>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>HackSphere 2025</h1>
          <p>Code. Create. Conquer.</p>
          <p>June 20–22, 2025 – Online</p>
          <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>{countdown}</div>
          <a href="#" className="cta-button">Register Now</a>
        </div>
      </header>

      <Section id="about" title="What is HackSphere?" dataAos="fade-up">
        HackSphere 2025 is a 48-hour global online hackathon where innovation meets challenge. Collaborate with developers, designers, and thinkers across the globe to build impactful technology in just two days.
      </Section>
<Section id="agenda" title="Event Schedule" dataAos="fade-up">
  <ul className="agenda-list">
    <li data-aos="fade-right" data-aos-delay="100">
      <strong>June 20 – 10:00 AM:</strong> Opening Ceremony & Team Formation
    </li>
    <li data-aos="fade-right" data-aos-delay="200">
      <strong>June 20 – 12:00 PM:</strong> Hacking Begins
    </li>
    <li data-aos="fade-right" data-aos-delay="300">
      <strong>June 21 – 6:00 PM:</strong> Workshops & Mentor Sessions
    </li>
    <li data-aos="fade-right" data-aos-delay="400">
      <strong>June 22 – 10:00 AM:</strong> Project Submissions Due
    </li>
    <li data-aos="fade-right" data-aos-delay="500">
      <strong>June 22 – 5:00 PM:</strong> Closing Ceremony & Awards
    </li>
  </ul>
</Section>


      <section className="about-us" data-aos="zoom-in" data-aos-delay="200">
        <h2>About Us</h2>
        <p>
          At HackSphere, we are a passionate collective of tech enthusiasts, innovators, and visionaries committed to pushing the boundaries of digital creativity. Our mission is to empower coders and creators worldwide by providing a platform where ideas transform into groundbreaking solutions.
          <br /><br />
          We believe that collaboration fuels innovation, and through HackSphere, we aim to foster a vibrant global community that learns, shares, and builds together — making technology accessible and impactful for all.
        </p>
      </section>

      <CardsSection
        title="Why Join?"
        dataAos="slide-up"
        cards={[
          {
            img: 'https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=600&auto=format&fit=crop&q=60',
            title: 'Build With Purpose',
            text: 'Develop real-world projects that can make a difference.'
          },
          {
            img: 'https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?w=600&auto=format&fit=crop&q=60',
            title: 'Collaborate Globally',
            text: 'Form diverse teams and connect with like-minded innovators.'
          },
          {
            img: 'https://plus.unsplash.com/premium_photo-1661888350177-48a9efbf6985?w=600&auto=format&fit=crop&q=60',
            title: 'Push Your Limits',
            text: 'Take on unique challenges and unlock your full potential.'
          }
        ]}
      />
      <CardsSection
  title="Latest Articles"
  dataAos="fade-up"
  data-aos-delay="300"
  cards={[
    {
      img: 'https://plus.unsplash.com/premium_photo-1733317239304-a6bf462a2596?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Understanding Zero-Day Exploits',
      text: 'Explore how attackers exploit vulnerabilities before patches are available.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/09/21/16/11/hacking-1685092_1280.jpg',
      title: 'Top 10 Linux Commands for Hackers',
      text: 'Master essential Linux commands every ethical hacker should know.'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661872680599-bfb0a671f8b1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'How to Sniff Network Traffic',
      text: 'Learn the basics of packet sniffing and network analysis.'
    }
  ]}
/>

<CardsSection
  title="Meet the Team"
  dataAos="fade-up"
  data-aos-delay="400"
  cards={[
    {
      img: 'https://plus.unsplash.com/premium_photo-1663100735445-e1c1f717ea23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Noah Smith',
      text: 'Founder & Lead Pentester — Passionate about red teaming and CTFs.'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1682438002958-3211f7107e46?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Olivia Ramene',
      text: 'Security Analyst — Expert in malware analysis and automation.'
    },
    {
      img: 'https://images.unsplash.com/photo-1603391277959-4b85cc6492f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Ravi K.',
      text: 'Cloud Security Engineer — Secures cloud and DevSecOps pipelines.'
    }
  ]}
/>
<CardsSection
  id="partners"
  title="Our Partners"
  dataAos="fade-up"
  cards={[
    {
      img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      title: 'Partner One',
      text: 'TechCorp supports innovation through open collaboration.'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
      title: 'Partner Two',
      text: 'GlobalNet fosters developer communities worldwide.'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
      title: 'Partner Three',
      text: 'CloudBoost accelerates cloud-native project development.'
    }
  ]}
/>

<section id="contact" data-aos="fade-up">
  <h2>Contact Us</h2>
  <p>If you have questions or need help, reach out to us:</p>
  <ul>
    <li>Email: <a href="mailto:hacksphere@event.org">hacksphere@event.org</a></li>
    <li>Discord: <a href="https://discord.gg/your-link">Join Our Server</a></li>
    <li>Twitter: <a href="https://twitter.com/yourhandle">@HackSphere</a></li>
  </ul>
</section>

<FaqSection
  faqs={[
    {
      question: 'Who can participate in HackSphere?',
      answer: 'Anyone interested in tech — from students to professionals — is welcome to join.'
    },
    {
      question: 'What do I need to participate?',
      answer: 'A computer, internet connection, and an eagerness to build cool things!'
    },
    {
      question: 'Can I participate solo?',
      answer: 'Absolutely. You can work solo or find teammates through our Discord.'
    },
    {
      question: 'Are there prizes?',
      answer: 'Yes! Cash, swag, and more — details to be revealed closer to the event.'
    }
  ]}
/>



      {/* Additional sections for Articles, Team, Testimonials, and FAQ go here using similar structure */}

<footer>
  <p>© 2025 HackSphere. All rights reserved.</p>
  <div className="social-links">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
</footer>

    </div>
  );
};

const Section = ({ id, title, dataAos, children }) => (
  <section id={id} data-aos={dataAos}>
    <h2>{title}</h2>
    <p>{children}</p>
  </section>
);

const CardsSection = ({ id,title, cards, dataAos }) => (
  <section id ={id} data-aos={dataAos}>
    <h2>{title}</h2>
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  </section>
);
const FaqSection = ({ faqs }) => {
  const handleToggle = (index) => {
    const items = document.querySelectorAll('.faq-item');
    const item = items[index];
    item.classList.toggle('active');
  };

  return (
    <section id ="faq"className="faq-section" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {faq.question}
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default HackSphere;