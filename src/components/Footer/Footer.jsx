import React from 'react';
import { contactDetails } from '../../constants/Constants';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer style={{
      backgroundColor: theme.footerBg,
      color: theme.textLight,
      padding: '4rem 0 0',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            textAlign: 'center',
          },
        }}>
          <div style={{
            '& h3': {
              color: theme.textColor,
              fontSize: '1.5rem',
              marginBottom: '1rem',
            },
            '& p': {
              lineHeight: '1.6',
              color: theme.textLight,
            },
          }}>
            <h3>{contactDetails.name}</h3>
            <p>Turning ideas into reality through code and design.</p>
          </div>
          
          <div style={{
            '& h4': {
              color: theme.textColor,
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '0.75rem',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '40px',
                height: '2px',
                backgroundColor: theme.primaryColor,
              },
            },
            '& ul': {
              listStyle: 'none',
              padding: 0,
              margin: 0,
            },
            '& li': {
              marginBottom: '0.75rem',
            },
            '& a': {
              color: theme.textLight,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: theme.primaryColor,
                paddingLeft: '5px',
              },
            },
          }}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div style={{
            '& h4': {
              color: theme.textColor,
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '0.75rem',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '40px',
                height: '2px',
                backgroundColor: theme.primaryColor,
              },
            },
          }}>
            <h4>Follow Me</h4>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-start',
              '@media (max-width: 768px)': {
                justifyContent: 'center',
              },
            }}>
              <Social />
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: `1px solid ${theme.borderColor}`,
          padding: '1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
          '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            textAlign: 'left',
          },
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            '& a': {
              color: theme.textLight,
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme.primaryColor,
              },
            },
            '& span': {
              color: theme.textLight,
              opacity: 0.5,
            },
          }}>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
