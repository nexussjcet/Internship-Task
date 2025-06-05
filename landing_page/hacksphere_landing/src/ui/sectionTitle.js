import React from 'react';

const SectionTitle = ({ children }) => {
     return (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 relative animate-fade-in-up">
               {children}
               <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 rounded"></div>
          </h2>
     );
};

export default SectionTitle;