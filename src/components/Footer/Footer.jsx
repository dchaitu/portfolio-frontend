import React from 'react';
import { contactDetails } from '../../constants/Constants';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12 mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{contactDetails.name}</h3>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wider text-gray-800 dark:text-white mb-6 relative pb-3">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block">About</Link></li>
              <li><Link to="/skills" className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 hover:pl-2 transition-all duration-300 block">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wider text-gray-800 dark:text-white mb-6 relative pb-3">
              Contact Info
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
            </h4>
            <div className="space-y-4">
              <p className="flex items-center"><i className="fas fa-envelope mr-3 text-blue-500"></i> {contactDetails.email}</p>
              <p className="flex items-center"><i className="fas fa-phone mr-3 text-blue-500"></i> {contactDetails.phone}</p>
              <p className="flex items-center"><i className="fas fa-map-marker-alt mr-3 text-blue-500"></i> {contactDetails.location}</p>
              <div className="mt-6">
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
