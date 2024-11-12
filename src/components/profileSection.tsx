import React, { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImage from '../assets/IMG_8390.jpg'; // Adjust path based on your folder structure

const ProfileSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [text] = useTypewriter({
    words: ["I'm a passionate software engineer with a knack for creating intuitive user interfaces."],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 300,
    delaySpeed: 2000,
  });

  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      } transition-colors duration-500 p-6`}
    >
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-4 right-4 p-2 rounded-full border ${
          darkMode ? 'border-white hover:bg-gray-700' : 'border-black hover:bg-gray-200'
        } transition`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Content */}
      <Fade direction="left" triggerOnce>
        <div className="relative mb-6 md:mb-0 md:mr-12">
          <div
            className={`w-64 h-64 rounded-full border-8 ${
              darkMode ? 'border-white' : 'border-black'
            } flex items-center justify-center p-1 animate-spin-slow mt-12 md:mt-0`}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </Fade>

      <Fade direction="right" triggerOnce>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm Antony Gichuki
          </h1>
          <h2 className="text-3xl mb-4">
            And I'm a <span className={`${darkMode ? 'text-gray-400' : 'text-black'}`}>Fullstack Developer</span>
          </h2>
          <p className="text-xl mb-8">
            {text}
            <Cursor cursorColor={darkMode ? 'white' : 'black'} />
          </p>
          <button
            className={`${
              darkMode ? 'bg-gray-800 hover:bg-gray-600 text-white' : 'bg-black hover:bg-gray-700 text-white'
            } font-bold py-3 px-6 rounded-full mb-8 transition-all duration-300 transform hover:scale-105`}
          >
            Download CV
          </button>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/antony-gichuki-44a2372ab/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transform transition-transform duration-300 hover:scale-110 ${
                darkMode ? 'hover:text-gray-400' : 'hover:text-black'
              }`}
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/antosnizzah"
              target="_blank"
              rel="noopener noreferrer"
              className={`transform transition-transform duration-300 hover:scale-110 ${
                darkMode ? 'hover:text-gray-400' : 'hover:text-black'
              }`}
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ProfileSection;
