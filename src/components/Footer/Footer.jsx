import React from 'react';
import { contactDetails } from '../../constants/Constants';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer} style={{
      '--footer-bg': theme.footerBg,
      '--footer-text': theme.footerText,
      '--footer-icon-color': theme.footerIconColor,
    }}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>{contactDetails.name}</h3>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p><i className="fas fa-envelope"></i> {contactDetails.email}</p>
              <p><i className="fas fa-phone"></i> {contactDetails.phone}</p>
              <p><i className="fas fa-map-marker-alt"></i> {contactDetails.location}</p>
              <div className={styles.socialLinks}>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
