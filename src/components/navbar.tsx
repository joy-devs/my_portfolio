import React, { useState } from 'react'; // <-- Add this import
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // You already have this hook here

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-black text-white shadow-md py-4 md:py-6 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo or Brand */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-lg font-bold hover:text-gray-300">
            My Portfolio
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
          <Link to="/skills" className="hover:text-gray-300 transition-colors">Skills</Link>
          <Link to="/experience" className="hover:text-gray-300 transition-colors">Experience</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>

        {/* Dark Mode Toggle and Hamburger Menu (Mobile) */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-900" />}
          </button>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links (Left-Side) */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start space-y-4 py-4 px-6">
          <Link to="/" className="text-lg font-medium hover:text-gray-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium hover:text-gray-300" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/projects" className="text-lg font-medium hover:text-gray-300" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/skills" className="text-lg font-medium hover:text-gray-300" onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="/experience" className="text-lg font-medium hover:text-gray-300" onClick={toggleMenu}>
            Experience
          </Link>
          <Link to="/contact" className="text-lg font-medium hover:text-gray-300" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
