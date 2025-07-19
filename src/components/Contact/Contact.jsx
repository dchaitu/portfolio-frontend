import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import {contactDetails, siteKey} from '../../constants/Constants';
import Social from '../Social/Social';
import './Contact.css';
import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try{
      const res = await fetch("https://t5nfirnhxl.execute-api.us-east-1.amazonaws.com/dev/contact/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          recaptcha_token: recaptchaValue,
        })
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Data from Contact Component "+data);
      setSubmitStatus({
        success: true,
        message: data.message || 'Your message has been sent successfully! I will get back to you soon.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
    } catch (error) {
      console.error("Error submitting form",error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });

    }finally {
      setIsSubmitting(false);
    }

  };

  const { theme } = useTheme();
  
  return (
    <section 
      id="contact" 
      className="contact" 
      style={{
        '--primary-color': theme.primaryColor,
        '--primary-dark': theme.primaryDark,
        '--bg-color': theme.bgColor,
        '--text-color': theme.textColor,
        '--text-light': theme.textLight,
        '--card-bg': theme.cardBg,
        '--card-shadow': theme.cardShadow,
        '--border-color': theme.borderColor,
        '--input-bg': theme.inputBg,
        '--focus-shadow': theme.focusShadow,
        '--btn-shadow': theme.btnShadow,
        '--btn-hover-shadow': theme.btnHoverShadow,
        '--disabled-bg': theme.disabledBg,
        '--success-bg': theme.successBg,
        '--success-text': theme.successText,
        '--success-border': theme.successBorder,
        '--error-bg': theme.errorBg,
        '--error-text': theme.errorText,
        '--card-secondary-bg': theme.cardSecondaryBg,
        '--contact-info-bg': theme.contactInfoBg,
        '--contact-info-text': theme.contactInfoText,
        '--contact-info-text-light': theme.contactInfoTextLight,
        backgroundColor: theme.bgColor,
      }}
    >
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!</p>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href="mailto:{contactDetails.email}">{contactDetails.email}</a>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <a href="tel:{contactDetails.phone}">{contactDetails.phone}</a>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>{contactDetails.location}</p>
              </div>
            </div>
            
            <Social/>
          </div>
          
          <div className="contact-form">
            {submitStatus.message && (
              <div className={`alert ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <ReCAPTCHA sitekey={siteKey} onChange={(value) => setRecaptchaValue(value)} />

              <button
                type="submit" 
                className="btn-submit" 
                disabled={!recaptchaValue}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
