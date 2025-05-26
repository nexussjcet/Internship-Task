import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Users, Trophy, Code, Lightbulb, Zap, Mail, Phone, Clock, Award, Globe } from 'lucide-react';

const HackSphereLanding = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const partners = [
    { name: 'TechCorp', logo: '🚀' },
    { name: 'DevTools', logo: '⚡' },
    { name: 'CloudBase', logo: '☁️' },
    { name: 'AI Labs', logo: '🤖' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'NextGen', logo: '🌟' }
  ];

  const faqs = [
    {
      question: "Who can participate in HackSphere 2025?",
      answer: "Anyone passionate about technology! Whether you're a student, professional developer, designer, or entrepreneur, you're welcome to join. Teams can have 2-4 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No! HackSphere 2025 is completely free to participate. We believe in making innovation accessible to everyone."
    },
    {
      question: "What should I bring?",
      answer: "Just your laptop, creativity, and enthusiasm! Since it's virtual, you'll need a stable internet connection. We'll provide all digital resources and tools."
    },
    {
      question: "What are the prizes?",
      answer: "Winners receive cash prizes, mentorship opportunities, and job placement assistance. Grand prize is $10,000, with additional category prizes totaling $25,000."
    },
    {
      question: "How does judging work?",
      answer: "Projects are judged on innovation, technical execution, design, and potential impact. Our panel includes industry experts from leading tech companies."
    }
  ];

  const schedule = [
    { time: "June 20, 6:00 PM", event: "Opening Ceremony & Keynote", description: "Welcome address and inspiring talks from industry leaders" },
    { time: "June 20, 7:00 PM", event: "Team Formation & Brainstorming", description: "Find your teammates and start ideating" },
    { time: "June 20, 8:00 PM", event: "Hacking Begins!", description: "48 hours of non-stop coding starts now" },
    { time: "June 21, 10:00 AM", event: "Workshop: AI & ML Integration", description: "Learn to integrate cutting-edge AI into your projects" },
    { time: "June 21, 2:00 PM", event: "Mentor Office Hours", description: "Get guidance from industry experts" },
    { time: "June 21, 8:00 PM", event: "Social Hour & Networking", description: "Connect with fellow hackers and sponsors" },
    { time: "June 22, 12:00 PM", event: "Final Submissions Due", description: "Last chance to submit your projects" },
    { time: "June 22, 2:00 PM", event: "Project Presentations", description: "Pitch your creations to judges and peers" },
    { time: "June 22, 5:00 PM", event: "Awards Ceremony", description: "Celebrate winners and wrap up the event" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              HackSphere
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'About', 'Schedule', 'Partners', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-200 relative group text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto w-full">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 border border-white/20">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-xs sm:text-sm font-medium">Global Virtual Event</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              HackSphere 2025
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-gray-300">
              Code. Create. Conquer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 text-sm sm:text-lg">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" />
                <span>June 20–22, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
                <span>Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-pink-400" />
                <span>48 Hours</span>
              </div>
            </div>
          </div>
          
          <button className="group relative inline-flex items-center justify-center px-8 py-3 sm:px-12 sm:py-4 text-base sm:text-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Zap className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 group-hover:animate-pulse" />
          </button>
          
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">500+ Hackers</h3>
              <p className="text-xs sm:text-sm text-gray-400">Join developers worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Trophy className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">$35K Prizes</h3>
              <p className="text-xs sm:text-sm text-gray-400">Win amazing rewards</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">48 Hours</h3>
              <p className="text-xs sm:text-sm text-gray-400">Non-stop innovation</p>
            </div>
          </div>

          {/* Bouncing Arrow - Now properly positioned at the bottom of the hero section */}
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About HackSphere 2025
          </h2>
          
          <div className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            <p className="text-base sm:text-xl mb-4 sm:mb-6">
              HackSphere 2025 is the ultimate global hackathon experience, bringing together the brightest minds in technology for 48 hours of intense creativity and innovation. Our virtual platform connects developers, designers, and entrepreneurs from every corner of the world to collaborate, compete, and create groundbreaking solutions.
            </p>
            
            <p className="text-base sm:text-xl">
              Whether you're a seasoned developer or just starting your tech journey, HackSphere provides the perfect environment to learn, network, and showcase your skills. With expert mentorship, cutting-edge tools, and substantial prizes, this is your chance to turn bold ideas into reality and make your mark on the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Lightbulb className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Innovation First</h3>
              <p className="text-xs sm:text-sm text-gray-400">Push boundaries and create solutions that matter to the world.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="w-8 h-8 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Global Community</h3>
              <p className="text-xs sm:text-sm text-gray-400">Connect with like-minded innovators from around the globe.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Award className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Recognition</h3>
              <p className="text-xs sm:text-sm text-gray-400">Get recognized by industry leaders and boost your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="md:w-48 flex-shrink-0 mb-3 md:mb-0">
                  <div className="text-cyan-400 font-semibold text-base sm:text-lg">{item.time}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.event}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Partners
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sm:p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{partner.logo}</div>
                <div className="text-sm sm:text-base md:text-lg font-medium">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
                <button
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="text-base sm:text-lg font-semibold text-left">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200 ${activeAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === index && (
                  <div className="px-4 sm:px-6 pb-4">
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12">
            Have questions? We're here to help make your HackSphere experience amazing.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Email Us</h3>
              <p className="text-xs sm:text-sm text-gray-400">hello@hacksphere2025.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Call Us</h3>
              <p className="text-xs sm:text-sm text-gray-400">+1 (555) 123-HACK</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Discord</h3>
              <p className="text-xs sm:text-sm text-gray-400">Join our community server</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/10 bg-black/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 HackSphere. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HackSphereLanding;
