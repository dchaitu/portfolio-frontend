import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
        <Link to="/" onClick={() => setIsOpen(false)}>Chaitanya Bharat</Link>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
