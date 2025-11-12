import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
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
    <section id="home" className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${theme.backgroundColor} ${theme.navText} transition-colors duration-300`}>
      <div className="max-w-7xl w-full gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">{text}</span>
            <span className="inline-block w-1 bg-blue-500 ml-1 animate-blink h-10 align-middle"></span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 min-h-[60px]">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact" className="px-8 py-3 bg-blue-500 text-white font-bold rounded-md transition-transform duration-300 hover:scale-105 shadow-lg">
              Hire Me
            </Link>
            <Link to="/projects" className="px-8 py-3 bg-transparent text-blue-500 border-2 border-blue-500 font-bold rounded-md transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 shadow-lg">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
