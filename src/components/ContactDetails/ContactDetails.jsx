import React from 'react';
import { contactDetails } from '../../constants/Constants';
import {useTheme} from "../../context/ThemeContext";

const ContactDetails = () => {
    const {theme} = useTheme();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 max-w-lg mx-auto md:mx-0">
      <div className="flex items-center gap-4">
        <span className={`font-semibold ${theme.navText} min-w-[100px]`}>Experience:</span>
        <span className="text-gray-600 dark:text-gray-400">{contactDetails.experience}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={`font-semibold ${theme.navText} min-w-[100px]`}>Email:</span>
        <span className="text-gray-600 dark:text-gray-400">{contactDetails.email}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={`font-semibold ${theme.navText} min-w-[100px]`}>Phone:</span>
        <span className="text-gray-600 dark:text-gray-400">{contactDetails.phone}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={`font-semibold ${theme.navText} min-w-[100px]`}>Location:</span>
        <span className="text-gray-600 dark:text-gray-400">{contactDetails.location}</span>
      </div>
    </div>
  );
};

export default ContactDetails;
