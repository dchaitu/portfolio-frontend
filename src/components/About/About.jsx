import React from 'react';
import './About.css';
import { aboutDetails, contactDetails } from '../../constants/Constants';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              {/* <span>{contactDetails.fullName}</span> */}
            <img src={contactDetails.photo} alt={contactDetails.fullName} />
            </div>
          </div>
          <div className="about-text">
            <h3>{contactDetails.role}</h3>
            <p>
            {aboutDetails.aboutMe}
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span>Name:</span>
                <p>{contactDetails.fullName}</p>
              </div>
              <div className="detail-item">
                <span>Email:</span>
                <p>{contactDetails.email}</p>
              </div>
              <div className="detail-item">
                <span>Experience:</span>
                <p>{contactDetails.experience}</p>
              </div>
              <div className="detail-item">
                <span>Location:</span>
                <p>{contactDetails.location}</p>
              </div>
            </div>
            <a href="/files/chaitanya_resume.pdf" className="btn btn-primary">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
