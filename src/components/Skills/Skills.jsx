import React from 'react';
import { skills } from '../../constants/Constants';
import { useTheme } from '../../context/ThemeContext';
import skillIcons from '../../constants/SkillIcons';

const Skills = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="skills" 
      className={`py-24 px-4 sm:px-6 lg:px-8 ${theme.backgroundColor} ${theme.navText}  transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 relative inline-block">
            My <span className="text-blue-500">Skills</span>
            <div className="absolute w-20 h-1 bg-blue-500 bottom-[-10px] left-1/2 -translate-x-1/2 rounded-sm"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((category, index) => (
            <div key={index} className={`${theme.lightBg} rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-2`}>
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold ${theme.navText} relative inline-block pb-2`}>
                  {category.name}
                  <div className="absolute w-1/2 h-1 bg-blue-500 bottom-0 left-1/2 -translate-x-1/2 rounded-sm"></div>
                </h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
                {category.technologies.map((item, itemIndex) => (
                  <div key={itemIndex} className="group relative flex flex-col items-center" title={item}>
                    <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-md group-hover:scale-105">
                      <img 
                        src={skillIcons[item]} 
                        alt={item} 
                        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
