import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Trophy, ChevronDown, Mail, MapPin, Globe } from 'lucide-react';

export default function HackSphereLanding() {
  const [isVisible, setIsVisible] = useState({});
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date('2025-06-20T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scheduleData = [
    { day: 'Day 1 - June 20', events: [
      { time: '9:00 AM', event: 'Opening Ceremony & Keynote' },
      { time: '10:00 AM', event: 'Team Formation & Networking' },
      { time: '12:00 PM', event: 'Hacking Begins!' },
      { time: '6:00 PM', event: 'Workshop: AI/ML Fundamentals' }
    ]},
    { day: 'Day 2 - June 21', events: [
      { time: '10:00 AM', event: 'Mentor Check-ins' },
      { time: '2:00 PM', event: 'Workshop: Design Thinking' },
      { time: '8:00 PM', event: 'Mid-point Presentations' }
    ]},
    { day: 'Day 3 - June 22', events: [
      { time: '10:00 AM', event: 'Final Push & Debugging' },
      { time: '2:00 PM', event: 'Project Submissions Due' },
      { time: '4:00 PM', event: 'Final Presentations' },
      { time: '7:00 PM', event: 'Awards & Closing Ceremony' }
    ]}
  ];

  const partners = [
    'TechCorp', 'InnovateLab', 'DevTools Inc', 'CloudSync', 'DataFlow', 'NextGen AI'
  ];

  const faqs = [
    {
      q: 'Who can participate in HackSphere 2025?',
      a: 'Anyone passionate about technology! Whether you\'re a student, professional developer, designer, or entrepreneur, you\'re welcome to join our global community.'
    },
    {
      q: 'Do I need a team to participate?',
      a: 'Not at all! You can join solo and we\'ll help you find teammates during our networking session, or you can form a team of up to 4 members before the event.'
    },
    {
      q: 'What should I bring or prepare?',
      a: 'Just bring your laptop, creativity, and enthusiasm! We\'ll provide all the digital tools, APIs, and resources you need. Make sure you have a stable internet connection.'
    },
    {
      q: 'Are there prizes?',
      a: 'Yes! We have $50,000 in total prizes including cash awards, tech gadgets, mentorship opportunities, and job interview fast-tracks with our partner companies.'
    },
    {
      q: 'Is this event really free?',
      a: 'Absolutely! HackSphere 2025 is completely free to participate. We believe in making innovation accessible to everyone, regardless of their financial situation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-4 animate-pulse">
              HackSphere 2025
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
              Code. Create. Conquer.
            </p>
          </div>
          
          <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>June 20–22, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Global • Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-teal-400" />
                <span>48 Hours</span>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8 grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{value || 0}</div>
                <div className="text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            ))}
          </div>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About HackSphere 2025
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              Join thousands of innovative minds from around the globe for the ultimate virtual hackathon experience. 
              HackSphere 2025 is where groundbreaking ideas come to life, connecting developers, designers, and visionaries 
              in a 48-hour marathon of creativity and collaboration.
            </p>
            <p>
              Whether you're building the next revolutionary app, exploring AI frontiers, or crafting solutions for global challenges, 
              HackSphere provides the platform, resources, and community to transform your wildest ideas into reality. 
              Get ready to push boundaries, make connections, and compete for amazing prizes!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-400">Connect with 5,000+ participants from 80+ countries</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Amazing Prizes</h3>
              <p className="text-gray-400">$50,000+ in prizes, internships, and opportunities</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <Clock className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">48 Hours</h3>
              <p className="text-gray-400">Non-stop innovation, mentorship, and collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="relative py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scheduleData.map((day, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">{day.day}</h3>
                <div className="space-y-4">
                  {day.events.map((item, i) => (
                    <div key={i} className="flex gap-4 p-3 rounded-lg bg-white/5">
                      <span className="text-blue-400 font-semibold min-w-[80px]">{item.time}</span>
                      <span className="text-gray-300">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-xl font-semibold text-gray-300">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-lg">hello@hacksphere2025.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-lg">www.hacksphere2025.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 text-center border-t border-white/10">
        <p className="text-gray-400">© 2025 HackSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}