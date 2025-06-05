import React from 'react';
import SectionTitle from './ui/sectionTitle';
import FeatureCard from './featurecard';

const FeaturesSection = () => {
     const features = [
          {
               icon: '💻',
               title: 'Learn & Grow',
               description: 'Access workshops, mentorship, and cutting-edge tech resources to expand your skills.'
          },
          {
               icon: '🌍',
               title: 'Global Network',
               description: 'Connect with developers, designers, and entrepreneurs from over 100 countries.'
          },
          {
               icon: '🏆',
               title: 'Win Big',
               description: 'Compete for $50K in prizes, internships, and startup funding opportunities.'
          }
     ];

     return (
          <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-5 text-center">
               <SectionTitle>Why Join HackSphere?</SectionTitle>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                         <FeatureCard
                              key={index}
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                              delay={index * 0.2}
                         />
                    ))}
               </div>
          </section>
     );
};

export default FeaturesSection;