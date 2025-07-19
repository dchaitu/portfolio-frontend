import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Home.css';
import {subheading} from "../../constants/Constants";

const Home = () => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = ['Chaitanya Bharat','a Python Developer', 'a Cloud Practitioner', 'a Flutter Developer', 'a React Developer'];
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        const speed = isDeleting ? 75 : 150;
        setTypingSpeed(speed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="home" style={{
      '--primary-color': theme.primaryColor,
      '--primary-dark': theme.primaryDark,
      '--bg-color': theme.bgColor,
      '--bg-light': theme.bgLight,
      '--text-color': theme.textColor,
      '--text-light': theme.textLight,
      backgroundColor: theme.bgColor,
    }}>
      <div className="home-content">
        <div className="content">
          <h1 className="title">
            Hi, I'm <span className="highlight">{text}</span>
          </h1>
          <p className="subtitle">
            {subheading}
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">
              Hire Me
            </Link>
            <Link to="/projects" className="secondary-button">
              View My Work
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
