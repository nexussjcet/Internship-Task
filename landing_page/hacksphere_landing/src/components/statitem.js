import React from 'react';

const StatItem = ({ number, label, delay }) => {
     return (
          <div className="text-center animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
               <span className="block text-5xl md:text-6xl font-bold text-red-500 mb-3">{number}</span>
               <span className="text-lg text-gray-300 uppercase tracking-wide">{label}</span>
          </div>
     );
};

export default StatItem;