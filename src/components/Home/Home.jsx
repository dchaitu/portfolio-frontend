import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = ['Chaitanya Bharat','Python Developer', 'Cloud Practitioner', 'Flutter Developer', 'React Developer'];
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
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm <span className="typing-text"> {text}</span>
        <span className="cursor"></span></h1>

        <p>I build amazing web experiences with modern technologies</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">Hire Me</a>
          <a href="/projects" className="btn btn-secondary">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
