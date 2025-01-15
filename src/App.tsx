import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProfileSection from './components/profileSection';

const App: React.FC = () => {
  const location = useLocation();

  // Dark Mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Retrieve the theme from localStorage, defaulting to light mode
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true' ? true : false;
  });

  // Function to toggle the theme
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Update the class of the body when the theme changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Save the theme preference in localStorage
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className={`dark:bg-gray-900 dark:text-white min-h-screen flex flex-col justify-between ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Pass the darkMode and toggleDarkMode props to the Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Show ProfileSection only on the home page ('/') */}
      {location.pathname === '/' && <ProfileSection />}

      {/* Render the content for other routes */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
