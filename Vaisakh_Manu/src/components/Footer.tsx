import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Logo />
          
          <div className="mt-6 flex space-x-6">
            <a 
              href="#" 
              className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 HackSphere. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> for creators worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;