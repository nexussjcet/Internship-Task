import React from 'react';
import StatItem from './statitem.js';

const StatsSection = () => {
     const stats = [
          { number: '5000+', label: 'Participants' },
          { number: '48', label: 'Hours' },
          { number: '$50K', label: 'In Prizes' }
     ];

     return (
          <section className="bg-gray-800 text-white py-16 px-5 text-center">
               <div className="flex flex-wrap justify-center items-center gap-16 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                         <StatItem
                              key={index}
                              number={stat.number}
                              label={stat.label}
                              delay={index * 0.2}
                         />
                    ))}
               </div>
          </section>
     );
};

export default StatsSection;