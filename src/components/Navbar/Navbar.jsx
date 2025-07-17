import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle'; 

// CSS file removed in favor of inline styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { theme } = useTheme();
  
  const navStyles = {
    backgroundColor: theme.navBg,
    padding: '1rem 2rem',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: theme.boxShadow,
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  };

  const navContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyles = {
    color: theme.navText,
    fontSize: '1.5rem',
    fontWeight: 700,
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  };

  const navLinksStyles = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  };

  const linkStyles = {
    color: theme.navText,
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease, background-color 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
  };

  const linkHoverStyles = {
    color: theme.primaryColor,
    backgroundColor: theme.hoverBg,
  };

  return (
    <nav style={navStyles}>
      <div style={navContainerStyles}>
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)} 
          style={logoStyles}
        >
          Chaitanya Bharat
        </Link>
        
        <div style={navLinksStyles}>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            style={linkStyles}
          >
            About
          </Link>
          <Link 
            to="/skills" 
            onClick={() => setIsOpen(false)}
            style={linkStyles}
          >
            Skills
          </Link>
          <Link 
            to="/projects" 
            onClick={() => setIsOpen(false)}
            style={linkStyles}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            style={linkStyles}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
        
        <div 
          style={{
            display: 'none',
            flexDirection: 'column',
            cursor: 'pointer',
            zIndex: 1001,
            ...(isOpen && {
              '& span': {
                backgroundColor: theme.primaryColor,
              },
              '& span:first-child': {
                transform: 'rotate(45deg) translate(5px, 5px)',
              },
              '& span:nth-child(2)': {
                opacity: 0,
              },
              '& span:last-child': {
                transform: 'rotate(-45deg) translate(5px, -5px)',
              },
            }),
          }} 
          onClick={toggleMenu}
        >
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: theme.navText,
            margin: '3px 0',
            transition: 'all 0.3s ease',
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: theme.navText,
            margin: '3px 0',
            transition: 'all 0.3s ease',
          }}></span>
          <span style={{
            width: '25px',
            height: '3px',
            backgroundColor: theme.navText,
            margin: '3px 0',
            transition: 'all 0.3s ease',
          }}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
