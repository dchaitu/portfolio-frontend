import React from 'react';
import { skills } from '../../constants/Constants';
import { useTheme } from '../../context/ThemeContext';
import skillIcons from '../../constants/SkillIcons';
import './Skills.css';

const Skills = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      id="skills" 
      className="skills"
      style={{
        '--primary-color': theme.primaryColor,
        '--primary-dark': theme.primaryDark,
        '--bg-secondary': theme.bgSecondary,
        '--card-bg': theme.cardBg,
        '--bg-light': theme.bgLight,
        '--text-color': theme.textColor,
        '--text-light': theme.textLight,
        '--border-color': theme.borderColor,
        '--box-shadow': theme.boxShadow,
        backgroundColor: theme.bgSecondary,
      }}
    >
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <h3 className="category-title">{category.name}</h3>
              </div>
              <div className="technologies">
                {category.technologies.map((item, itemIndex) => (
                  <div key={itemIndex} className="skill-item" title={item}>
                    <div className="skill-info">
                      <img 
                        src={skillIcons[item]} 
                        alt={item} 
                        className="skill-icon"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.target.style.display = 'none';
                          const fallback = document.createElement('span');
                          fallback.className = 'skill-name';
                          fallback.textContent = item;
                          e.target.parentNode.appendChild(fallback);
                        }}
                      />
                    </div>
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
