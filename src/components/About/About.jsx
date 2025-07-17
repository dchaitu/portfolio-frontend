import React from 'react';
import { contactDetails } from '../../constants/Constants';
import { useTheme } from '../../context/ThemeContext';
import './About.css';

const About = () => {
  const { theme } = useTheme();
  return (
    <section id="about" className="about" style={{
      '--primary-color': theme.primaryColor,
      '--bg-color': theme.bgColor,
      '--text-color': theme.textColor,
      backgroundColor: theme.bgColor,
    }}>
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src={contactDetails.photo} 
              alt={contactDetails.fullName} 
              className="profile-image"
              style={{
                width: '350px',
                // height: '350px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `4px solid ${theme.primaryColor}`,
              }}
            />
          </div>
          <div className="about-text">
            <h3>{contactDetails.role}</h3>
            <p>Hi, I'm {contactDetails.fullName}. {contactDetails.about}</p>
            <p>{contactDetails.completeBio}</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Experience:</span>
                <span className="detail-value">{contactDetails.experience}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{contactDetails.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{contactDetails.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{contactDetails.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
