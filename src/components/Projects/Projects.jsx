import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform with product listings, cart, and checkout functionality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'project1.jpg',
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A task management application to help users organize their daily tasks and increase productivity.',
    technologies: ['React', 'Redux', 'Firebase'],
    image: 'project2.jpg',
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current weather and forecast for any location.',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS'],
    image: 'project3.jpg',
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'Find recipes based on ingredients you have at home.',
    technologies: ['React', 'Spoonacular API', 'CSS Modules'],
    image: 'project4.jpg',
    demo: '#',
    code: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
