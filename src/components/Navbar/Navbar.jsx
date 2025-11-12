import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggleIcon from '../ThemeToggle/ThemeToggleIcon';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, isDarkMode } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className={`fixed top-0 left-0 w-full z-50 ${theme.navBg} shadow-md transition duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className={`text-xl font-bold ${theme.navText}`}>
            Chaitanya Bharat
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/about" className={`${theme.navText} hover:text-blue-500`}>About</Link>
            <Link to="/skills" className={`${theme.navText} hover:text-blue-500`}>Skills</Link>
            <Link to="/projects" className={`${theme.navText} hover:text-blue-500`}>Projects</Link>
            <Link to="/contact" className={`${theme.navText} hover:text-blue-500`}>Contact</Link>
            <ThemeToggleIcon />
          </div>

          {/* Mobile Hamburger */}
          <div onClick={toggleMenu} className={`md:hidden cursor-pointer ${theme.navText} z-50`}>
            {isMenuOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen ${theme.navBg} flex flex-col items-center justify-center gap-6 ${theme.navText} text-lg z-40`}>
              <Link to="/about" onClick={toggleMenu} className="hover:text-blue-500">About</Link>
              <Link to="/skills" onClick={toggleMenu} className="hover:text-blue-500">Skills</Link>
              <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-500">Projects</Link>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-500">Contact</Link>
              <div className="absolute top-4 right-4">
                <ThemeToggleIcon />
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
