import React, { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const handleRegisterClick = () => {
    // This would typically open a registration form or link
    alert('Registration would open here!');
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <ParticleBackground />
      
      <div 
        ref={targetRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            <span className="block">HackSphere 2025</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Code. Create. Conquer.
            </span>
          </h1>
          
          <p className="animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] mt-6 text-xl text-gray-600 dark:text-gray-300">
            June 20–22, 2025 – Online
          </p>
          
          <div className="animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] mt-10">
            <button
              onClick={handleRegisterClick}
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              Register Now
            </button>
          </div>
          
          <div className="animate-bounce mt-20 text-gray-400 dark:text-gray-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mx-auto" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;