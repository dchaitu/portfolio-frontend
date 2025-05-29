import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>Chaitanya Bharat</span>
            </div>
          </div>
          <div className="about-text">
            <h3>I'm a Passionate Frontend Developer</h3>
            <p>
              Hello! I'm a frontend developer with a passion for creating beautiful and functional web applications. 
              I specialize in React.js and modern JavaScript frameworks, and I love turning ideas into reality through code.
            </p>
            <p>
              With a strong foundation in web technologies and a keen eye for design, I create seamless user experiences 
              that are both visually appealing and highly functional.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span>Name:</span>
                <p>Chaitanya Bharat</p>
              </div>
              <div className="detail-item">
                <span>Email:</span>
                <p>chaitanyadokara@gmail.com</p>
              </div>
              <div className="detail-item">
                <span>Experience:</span>
                <p>4 Years</p>
              </div>
              <div className="detail-item">
                <span>Location:</span>
                <p>Hyderabad, India</p>
              </div>
            </div>
            <a href="#" className="btn btn-primary">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
