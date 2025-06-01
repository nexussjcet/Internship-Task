import React from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode } = useTheme();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Register Now
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About
            </button>
            <button
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium py-2 px-4 rounded-md"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;