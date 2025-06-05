import React from 'react';
import SectionTitle from './ui/sectionTitle';
const AboutSection = () => {
     return (
          <section className="py-20 px-5 max-w-4xl mx-auto text-center bg-gray-900 text-white">
               <SectionTitle>About HackSphere 2025</SectionTitle>

               <p className="text-lg md:text-xl mb-6 text-gray-300 leading-relaxed animate-fade-in-up-delay-1">
                    Join thousands of developers, designers, and creators from around the world in the ultimate 48-hour coding
                    challenge. HackSphere 2025 is where innovation meets collaboration, bringing together brilliant minds to
                    solve real-world problems.
               </p>

               <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up-delay-2">
                    Whether you're a seasoned developer or just starting your coding journey, HackSphere offers the perfect
                    platform to learn, network, and showcase your skills. Build amazing projects, win exciting prizes, and be
                    part of the global tech community.
               </p>
          </section>
     );
};

export default AboutSection;