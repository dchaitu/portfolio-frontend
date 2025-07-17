import React from 'react';
import { projects } from '../../constants/Constants';
import { useTheme } from '../../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { theme } = useTheme();
  return (
    <section id="projects" className="projects" style={{
      '--primary-color': theme.primaryColor,
      '--primary-dark': theme.primaryDark,
      '--bg-secondary': theme.bgSecondary,
      '--card-bg': theme.cardBg,
      '--bg-light': theme.bgLight,
      '--text-color': theme.textColor,
      '--text-light': theme.textLight,
      '--box-shadow': theme.boxShadow,
      backgroundColor: theme.bgSecondary,
    }}>
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-img"
                    />
                  ) : (
                    <span className="project-title">
                      {project.title}
                    </span>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-submit"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
