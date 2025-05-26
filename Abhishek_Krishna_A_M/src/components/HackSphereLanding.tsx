import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, Users, Trophy, Zap, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

const HackSphereLanding = () => {
  const [activeTab, setActiveTab] = useState('day1');
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scheduleData = {
    day1: [
      { time: '9:00 AM', event: 'Opening Ceremony & Keynote' },
      { time: '10:00 AM', event: 'Team Formation & Networking' },
      { time: '12:00 PM', event: 'Hacking Begins!' },
      { time: '2:00 PM', event: 'Lunch Break' },
      { time: '6:00 PM', event: 'Workshop: AI/ML Fundamentals' },
      { time: '8:00 PM', event: 'Dinner & Networking' }
    ],
    day2: [
      { time: '9:00 AM', event: 'Morning Standup' },
      { time: '11:00 AM', event: 'Mentor Sessions' },
      { time: '1:00 PM', event: 'Lunch Break' },
      { time: '3:00 PM', event: 'Workshop: UI/UX Design' },
      { time: '7:00 PM', event: 'Progress Check-ins' },
      { time: '9:00 PM', event: 'Night Coding Session' }
    ],
    day3: [
      { time: '9:00 AM', event: 'Final Sprint' },
      { time: '12:00 PM', event: 'Project Submissions Due' },
      { time: '2:00 PM', event: 'Judging & Presentations' },
      { time: '5:00 PM', event: 'Awards Ceremony' },
      { time: '6:00 PM', event: 'Closing & Networking' }
    ]
  };

  const faqs = [
    {
      q: "Who can participate in HackSphere 2025?",
      a: "Anyone with a passion for coding, design, or innovation! We welcome students, professionals, and enthusiasts of all skill levels."
    },
    {
      q: "Do I need a team to participate?",
      a: "Not necessarily! You can join solo and we'll help you find teammates during our team formation session, or you can register with your existing team (max 4 members)."
    },
    {
      q: "What should I bring?",
      a: "Since it's online, just bring your laptop, creativity, and enthusiasm! We'll provide all the digital tools and resources you need."
    },
    {
      q: "Are there any prizes?",
      a: "Yes! We have cash prizes, tech gadgets, mentorship opportunities, and internship offers from our partner companies."
    },
    {
      q: "Is there a registration fee?",
      a: "No, HackSphere 2025 is completely free to participate! We believe in making innovation accessible to everyone."
    }
  ];

  const partners = [
    'TechCorp', 'InnovateLab', 'CodeBase', 'FutureStack', 'DevHub', 'CloudTech',
    'DataFlow', 'NextGen', 'QuantumCode', 'ByteForge', 'CyberSync', 'AlgoMind'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            HackSphere
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300 text-sm lg:text-base">About</a>
            <a href="#schedule" className="hover:text-purple-400 transition-colors duration-300 text-sm lg:text-base">Schedule</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors duration-300 text-sm lg:text-base">FAQ</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-300 text-sm lg:text-base">Contact</a>
          </div>
          <button className="md:hidden p-2">
            <div className="w-6 h-6 relative">
              <span className="absolute inset-0 bg-white rounded-sm transform rotate-0 transition-transform"></span>
              <span className="absolute inset-0 bg-white rounded-sm transform rotate-90 transition-transform"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent animate-pulse leading-tight">
            HackSphere 2025
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-gray-300">
            Code. Create. Conquer.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 text-sm sm:text-base lg:text-lg">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="whitespace-nowrap">June 20–22, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
              <span>Online</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span>48 Hours</span>
            </div>
          </div>
          <button className="group relative px-8 sm:px-10 lg:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-teal-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            About HackSphere 2025
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Join thousands of passionate developers, designers, and creators from around the globe for an unforgettable 48-hour journey of innovation and collaboration.
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Whether you're a seasoned professional or just starting your coding journey, HackSphere 2025 offers the perfect platform to push your limits, learn new technologies, and build something extraordinary.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">5000+</div>
                <div className="text-sm sm:text-base text-gray-400">Participants</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-400 mx-auto mb-2 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">$50K</div>
                <div className="text-sm sm:text-base text-gray-400">In Prizes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-2 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">48</div>
                <div className="text-sm sm:text-base text-gray-400">Hours</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-purple-400 mx-auto mb-2 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Global</div>
                <div className="text-sm sm:text-base text-gray-400">Online Event</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 sm:p-2 w-full max-w-md">
              <div className="grid grid-cols-3 gap-1">
                {Object.keys(scheduleData).map((day, index) => (
                  <button
                    key={day}
                    onClick={() => setActiveTab(day)}
                    className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                      activeTab === day
                        ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Day {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="space-y-3 sm:space-y-4">
              {scheduleData[activeTab].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="text-purple-400 font-bold text-base sm:text-lg sm:min-w-[100px]">
                    {item.time}
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-lg font-semibold text-gray-300">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10 py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-xl font-semibold">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@hacksphere2025.com</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
              <Phone className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Global Online Event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            HackSphere
          </div>
          <p className="text-gray-400 text-lg">
            © 2025 HackSphere. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HackSphereLanding;
