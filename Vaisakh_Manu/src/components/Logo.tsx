import React from 'react';
import { Code, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Logo: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Globe 
          size={28} 
          className="text-purple-600 dark:text-purple-400" 
        />
        <Code 
          size={18} 
          className="absolute -bottom-1 -right-1 text-blue-500 dark:text-blue-400" 
        />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
        HackSphere
      </span>
    </div>
  );
};

export default Logo;