import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: theme.navText,
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    marginLeft: '1rem',
    '&:hover': {
      backgroundColor: theme.hoverBg,
    },
  };

  const iconStyle = {
    fontSize: '1.25rem',
    color: theme.navText,
  };

  return (
    <button 
      style={buttonStyle}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <FiSun style={iconStyle} />
      ) : (
        <FiMoon style={iconStyle} />
      )}
    </button>
  );
};

export default ThemeToggle;
