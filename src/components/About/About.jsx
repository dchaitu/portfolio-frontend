import React from 'react';
import { contactDetails } from '../../constants/Constants';
import ContactDetails from '../ContactDetails/ContactDetails';
import {useTheme} from "../../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <section id="about" className={`py-24 ${theme.backgroundColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 relative inline-block text-gray-800 dark:text-gray-200">
            About <span className="text-blue-500">Me</span>
            <div className="absolute w-20 h-1 bg-blue-500 bottom-[-10px] left-1/2 -translate-x-1/2 rounded-sm"></div>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className="flex-1 flex justify-center">
            <img 
              src={contactDetails.photo} 
              alt={contactDetails.fullName} 
              className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full object-cover border-4 border-blue-500"
            />
          </div>
          <div className="flex-[1.5] text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">{contactDetails.role}</h3>
            <p className={`${theme.textColor} leading-loose mb-6 text-lg`}>Hi, I'm {contactDetails.fullName}. {contactDetails.about}</p>
            <p className={`${theme.textColor} leading-loose mb-6 text-lg`}>{contactDetails.completeBio}</p>
            <ContactDetails />
            <a href="/files/Resume_Chaitanya.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full transition-colors duration-300 hover:bg-blue-600 mt-4">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
