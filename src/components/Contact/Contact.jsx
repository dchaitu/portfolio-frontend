import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import {contactDetails, siteKey} from '../../constants/Constants';
import Social from '../Social/Social';
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
      className={`py-16 px-4 sm:px-6 lg:px-8 ${theme.backgroundColor} ${theme.navText} text-gray-800 dark:text-gray-200 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className={`text-3xl sm:text-4xl ${theme.navText} font-bold mb-12 relative inline-block`}>
            Get In <span className="text-blue-500">Touch</span>
            <div className="absolute w-20 h-1 bg-blue-500 bottom-[-10px] left-1/2 -translate-x-1/2 rounded-sm"></div>
          </h2>
        </div>
        
        <div className={`flex flex-col lg:flex-row border border-gray-200 dark:border-gray-700 gap-8 mt-8 lg:mt-12 ${theme.backgroundColor} ${theme.navText} rounded-lg shadow-lg overflow-hidden p-4 lg:p-0`}>
          <div className="p-8 lg:w-2/5 border-r border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 relative pb-4">
              Contact Information
              <div className="absolute left-0 bottom-0 w-16 h-1 bg-blue-500"></div>
            </h3>
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-100">Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible!</p>
            
            <div className="flex items-start mb-5">
              <i className="fas fa-envelope text-blue-500 mr-4 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme.navText}`}>Email</h4>
                <a href={`mailto:${contactDetails.email}`} className="text-blue-500 hover:underline break-all">{contactDetails.email}</a>
              </div>
            </div>
            
            <div className="flex items-start mb-5">
              <i className="fas fa-phone text-blue-500 mr-4 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme.navText}`}>Phone</h4>
                <a href={`tel:${contactDetails.phone}`} className="text-blue-500 hover:underline">{contactDetails.phone}</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <i className="fas fa-map-marker-alt text-blue-500 mr-4 mt-1"></i>
              <div>
                <h4 className={`font-semibold ${theme.navText}`}>Location</h4>
                <p className="text-gray-600 dark:text-gray-400">{contactDetails.location}</p>
              </div>
            </div>
            <div className="mt-8">
              <Social/>
            </div>
          </div>
          
          <div className="p-8 lg:w-3/5">
            {submitStatus.message && (
              <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-8 py-4 rounded-lg font-semibold text-center max-w-md shadow-lg animate-slideIn ${submitStatus.success ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-5">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-5">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="mb-5">
                <ReCAPTCHA sitekey={siteKey} onChange={(value) => setRecaptchaValue(value)} theme={theme.type === 'dark' ? 'dark' : 'light'} />
              </div>
              <button
                type="submit" 
                className="w-full py-4 bg-blue-500 text-white font-bold rounded-md text-base cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                disabled={!recaptchaValue || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
