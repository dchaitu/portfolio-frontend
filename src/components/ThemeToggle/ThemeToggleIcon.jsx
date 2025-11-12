import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggleIcon = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="bg-transparent border-none text-gray-800 dark:text-white cursor-pointer p-2 rounded-full flex items-center justify-center transition-colors duration-300 ml-4 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
          <FiSun className="text-xl text-white" /> // Yellow sun for dark mode
      ) : (
          <FiMoon className="text-xl text-gray-700" /> // Dark moon for light mode
      )}
    </button>
  );
};

export default ThemeToggleIcon;
