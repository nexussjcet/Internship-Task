import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar isScrolled={scrollY > 50} />
        <main>
          <Hero />
          <About />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;