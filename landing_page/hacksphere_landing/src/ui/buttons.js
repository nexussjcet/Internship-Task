import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, ...props }) => {
     const baseClasses = 'font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1';

     const variants = {
          primary: 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl',
          secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900'
     };

     const sizes = {
          small: 'py-2 px-4 text-sm',
          medium: 'py-3 px-6 text-base',
          large: 'py-5 px-10 text-xl'
     };

     return (
          <button
               className={`${baseClasses} ${variants[variant]} ${sizes[size]} animate-fade-in-up-delay-3`}
               onClick={onClick}
               {...props}
          >
               {children}
          </button>
     );
};

export default Button;
