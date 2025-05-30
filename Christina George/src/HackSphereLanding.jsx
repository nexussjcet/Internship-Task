import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Users, Trophy, Calendar, MapPin, Clock, Star, Zap, Globe, Rocket, X } from 'lucide-react';


const HackSphereLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registrationForm, setRegistrationForm] = useState({
    fullName: '',
    email: '',
    organization: '',
    newsletter: false,
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  // State for countdown
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    hasStarted: false,
  });


  // Event date for countdown (June 20, 2025, 00:00:00 UTC)
  const eventDate = new Date("2025-06-20T00:00:00Z").getTime();


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Intersection Observer for scroll animations
  const observeElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({ ...prev, [id]: entry.isIntersecting }));
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    }
  };


  useEffect(() => {
    ['hero', 'about', 'features', 'schedule', 'faq'].forEach(observeElement);
  }, []);


  // Countdown logic
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;


      if (distance < 0) {
        clearInterval(countdownInterval);
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00', hasStarted: true });
        return;
      }


      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);


      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        hasStarted: false,
      });
    }, 1000);


    return () => clearInterval(countdownInterval);
  }, [eventDate]);


  // Floating particles for background
  const FloatingParticle = ({ delay = 0, size = 4, duration = 20 }) => (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );


  // Modal functions
  const openModal = () => {
    setIsModalOpen(true);
    setRegistrationSuccess(false); // Reset success message on open
    setRegistrationForm({ // Reset form fields on open
      fullName: '',
      email: '',
      organization: '',
      newsletter: false,
    });
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted:', registrationForm);
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just simulate success.
    setRegistrationSuccess(true);
    // Optionally, close modal after a short delay
    // setTimeout(() => closeModal(), 3000);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} size={2 + Math.random() * 6} />
        ))}
      </div>


      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              HackSphere
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#schedule" className="hover:text-purple-400 transition-colors">Schedule</a>
              <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
            </div>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Register Now
            </button>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />


        {/* Added pt-24 to push content down from the top */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
              HackSphere
            </h1>
            <div className="text-4xl md:text-6xl font-light mb-2">2025</div>
            <p className="text-2xl md:text-3xl text-purple-300 font-light tracking-wide">
              Code. Create. Conquer.
            </p>
          </div>


          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-400" />
              <span>June 20–22, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-pink-400" />
              <span>Online Event</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <span>48 Hours</span>
            </div>
          </div>


          <button
            onClick={openModal}
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full text-xl font-semibold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Rocket className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>


          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </section>


      {/* Event Countdown Section */}
      <section className="py-16 bg-black/30 rounded-xl shadow-lg mx-auto max-w-6xl -mt-16 relative z-20 px-4 sm:px-6 lg:px-8 border border-white/10 backdrop-blur-sm">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          {countdown.hasStarted ? 'The event has started!' : 'Event Starts In:'}
        </h2>
        {!countdown.hasStarted && (
          <div id="countdown" className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="bg-purple-700/50 text-white p-6 rounded-lg shadow-md flex-1 min-w-[120px] max-w-[180px] border border-purple-500/30">
              <span className="block text-4xl sm:text-5xl font-extrabold countdown-digit">{countdown.days}</span>
              <span className="block text-sm sm:text-base mt-2">Days</span>
            </div>
            <div className="bg-pink-700/50 text-white p-6 rounded-lg shadow-md flex-1 min-w-[120px] max-w-[180px] border border-pink-500/30">
              <span className="block text-4xl sm:text-5xl font-extrabold countdown-digit">{countdown.hours}</span>
              <span className="block text-sm sm:text-base mt-2">Hours</span>
            </div>
            <div className="bg-blue-700/50 text-white p-6 rounded-lg shadow-md flex-1 min-w-[120px] max-w-[180px] border border-blue-500/30">
              <span className="block text-4xl sm:text-5xl font-extrabold countdown-digit">{countdown.minutes}</span>
              <span className="block text-sm sm:text-base mt-2">Minutes</span>
            </div>
            <div className="bg-green-700/50 text-white p-6 rounded-lg shadow-md flex-1 min-w-[120px] max-w-[180px] border border-green-500/30">
              <span className="block text-4xl sm:text-5xl font-extrabold countdown-digit">{countdown.seconds}</span>
              <span className="block text-sm sm:text-base mt-2">Seconds</span>
            </div>
          </div>
        )}
      </section>


      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About HackSphere
            </h2>


            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-300">
                  Join thousands of developers, designers, and innovators from around the globe in the ultimate 48-hour coding challenge. HackSphere 2025 brings together brilliant minds to solve real-world problems and create groundbreaking solutions.
                </p>
                <p className="text-xl leading-relaxed text-gray-300">
                  Whether you're a seasoned developer or just starting your coding journey, HackSphere offers the perfect platform to showcase your skills, learn new technologies, and compete for amazing prizes while making lasting connections.
                </p>
              </div>


              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:scale-105 transition-transform">
                  <Users className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">5000+</h3>
                  <p className="text-gray-300">Global Participants</p>
                </div>
                <div className="bg-gradient-to-br from-pink-800/50 to-pink-900/50 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/20 hover:scale-105 transition-transform">
                  <Trophy className="w-12 h-12 text-pink-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">$50K</h3>
                  <p className="text-gray-300">Prize Pool</p>
                </div>
                <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:scale-105 transition-transform">
                  <Code className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">48</h3>
                  <p className="text-gray-300">Hours of Coding</p>
                </div>
                <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 p-6 rounded-2xl backdrop-blur-sm border border-green-500/30">
                  <Zap className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">100+</h3>
                  <p className="text-gray-300">Mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Join HackSphere?
          </h2>


          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Win Amazing Prizes", desc: "Compete for cash prizes, tech gadgets, and exclusive opportunities with top companies." },
              { icon: Users, title: "Network Globally", desc: "Connect with like-minded developers, designers, and entrepreneurs from around the world." },
              { icon: Rocket, title: "Launch Your Ideas", desc: "Turn your innovative concepts into reality with mentorship from industry experts." },
              { icon: Star, title: "Learn New Skills", desc: "Workshops, tutorials, and hands-on experience with cutting-edge technologies." },
              { icon: Code, title: "Open Source Impact", desc: "Contribute to meaningful projects that make a difference in communities worldwide." },
              { icon: Zap, title: "Career Boost", desc: "Showcase your talents to recruiters from leading tech companies and startups." }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <feature.icon className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>


          <div className="space-y-8">
            {[
              { day: "Day 1", date: "June 20", events: ["Opening Ceremony", "Theme Announcement", "Team Formation", "Coding Begins"] },
              { day: "Day 2", date: "June 21", events: ["Mentorship Sessions", "Tech Workshops", "Midnight Snack Break", "Progress Check-ins"] },
              { day: "Day 3", date: "June 22", events: ["Final Sprint", "Project Submissions", "Judging & Presentations", "Awards Ceremony"] }
            ].map((day, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-purple-300">{day.day}</h3>
                    <p className="text-xl text-gray-300">{day.date}</p>
                  </div>
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {day.events.map((event, i) => (
                      <div key={i} className="bg-black/30 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-300">{event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>


          <div className="space-y-6">
            {[
              { q: "Who can participate in HackSphere 2025?", a: "Anyone with a passion for coding and innovation! Whether you're a student, professional developer, designer, or entrepreneur, you're welcome to join." },
              { q: "Do I need a team to participate?", a: "Not necessarily! You can join solo and we'll help you find teammates, or you can form your own team of up to 4 members." },
              { q: "What should I bring to the hackathon?", a: "Since it's online, just bring your laptop, creativity, and enthusiasm! We'll provide all the digital resources and tools you need." },
              { q: "Are there any participation fees?", a: "No! HackSphere 2025 is completely free to participate. We believe in making innovation accessible to everyone." }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30">
                <h3 className="text-xl font-bold mb-4 text-purple-300">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Ready to Code Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of innovators in the most exciting hackathon of 2025. Register now and be part of something extraordinary.
          </p>
          <button
            onClick={openModal}
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 px-16 py-6 rounded-full text-2xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Register for Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Rocket className="inline-block ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 bg-black/40 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              HackSphere
            </div>
            <p className="text-gray-400 mb-8">© 2025 HackSphere. All rights reserved.</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>


      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[100] p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full relative border border-purple-500/20 transform scale-95 animate-scale-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-3xl leading-none"
            >
              <X className="w-8 h-8" />
            </button>
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Register for HackSphere
            </h3>


            {registrationSuccess ? (
              <div className="text-center text-green-400 text-xl font-semibold py-8">
                <p>Thank you for registering!</p>
                <p>We'll send a confirmation to {registrationForm.email} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={registrationForm.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={registrationForm.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-lg font-medium text-gray-300 mb-2">Organization (Optional)</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={registrationForm.organization}
                    onChange={handleFormChange}
                    className="w-full px-5 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={registrationForm.newsletter}
                    onChange={handleFormChange}
                    className="h-5 w-5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-lg text-gray-300">
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default HackSphereLanding;



