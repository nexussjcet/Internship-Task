import React from 'react';
import { Globe, Code, Timer, Users, Zap, Trophy } from 'lucide-react';
import FeatureCard from './FeatureCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About HackSphere 2025
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            HackSphere 2025 is a global 48-hour virtual hackathon bringing together the brightest minds 
            in technology. Whether you're a seasoned developer, a creative designer, or an innovative 
            problem solver, this is your opportunity to collaborate, create, and potentially change the world.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With participants from over 50 countries, cutting-edge challenges, and industry-leading 
            mentors, HackSphere offers an unparalleled platform to showcase your skills, learn new 
            technologies, and build connections that last a lifetime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <FeatureCard 
            icon={<Globe className="w-10 h-10 text-purple-600 dark:text-purple-400" />}
            title="Global Community"
            description="Connect with innovators from over 50 countries around the world."
          />
          <FeatureCard 
            icon={<Timer className="w-10 h-10 text-blue-500 dark:text-blue-400" />}
            title="48 Hours of Creation"
            description="Two days of intense coding, designing, and problem-solving."
          />
          <FeatureCard 
            icon={<Code className="w-10 h-10 text-teal-500 dark:text-teal-400" />}
            title="Any Technology"
            description="Use any programming language or framework of your choice."
          />
          <FeatureCard 
            icon={<Users className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />}
            title="Team Collaboration"
            description="Form teams of up to 4 people or join as an individual and find teammates."
          />
          <FeatureCard 
            icon={<Zap className="w-10 h-10 text-amber-500 dark:text-amber-400" />}
            title="Mentorship"
            description="Get guidance from industry experts throughout the event."
          />
          <FeatureCard 
            icon={<Trophy className="w-10 h-10 text-pink-500 dark:text-pink-400" />}
            title="Amazing Prizes"
            description="Win from a prize pool worth over $50,000 across multiple categories."
          />
        </div>

        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Who can join HackSphere?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Everyone is welcome! Whether you're a student, professional developer, designer, or just starting your tech journey, HackSphere is open to all skill levels and backgrounds.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What's the cost to participate?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                HackSphere is 100% free! We believe in making innovation accessible to everyone.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                How do teams work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You have the flexibility to hack solo or team up with up to 3 other participants(Team of 4). Don't have a team? Join our team formation event on the first day to find your perfect match!
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What can I create?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let your imagination run wild! Build web apps, mobile solutions, AI projects, blockchain applications, or even experimental prototypes. The only limit is your creativity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;