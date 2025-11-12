import React from 'react';
import { projects } from '../../constants/Constants';
import { useTheme } from '../../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();
  return (
    <section id="projects" className={`py-24 px-4 sm:px-6 lg:px-8 ${theme.backgroundColor} ${theme.navText} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 relative inline-block">
            My <span className="text-blue-500">Projects</span>
            <div className="absolute w-20 h-1 bg-blue-500 bottom-[-10px] left-1/2 -translate-x-1/2 rounded-sm"></div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className={`${theme.navBg} border-2 border-gray-200 dark:border-gray-500 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col`}>
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-3 ${theme.navText}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-md text-center transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
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
