import React from 'react';

const FeatureCard = ({ icon, title, description, delay }) => {
     return (
          <div
               className="feature-card animate-fade-in-up"
               style={{ animationDelay: `${delay}s` }}
          >
               <span className="text-5xl mb-5 block">{icon}</span>
               <h3 className="text-xl font-bold mb-4 text-red-500">{title}</h3>
               <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
     );
};

export default FeatureCard;