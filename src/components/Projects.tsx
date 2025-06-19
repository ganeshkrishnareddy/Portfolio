import React, { useState } from 'react';
import { Calendar, ExternalLink, Lock, Server, Shield, Github, Globe, Filter, Code } from 'lucide-react';

interface ProjectProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
  icon: React.ReactNode;
  category: string;
  githubLink?: string;
  liveLink?: string;
  achievements?: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  period, 
  description, 
  technologies, 
  image,
  icon,
  githubLink,
  liveLink,
  achievements
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white dark:bg-slate-700 p-2 rounded-full">
          {icon}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{period}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
        
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-slate-800 dark:bg-slate-700 text-white rounded-md flex items-center justify-center transition-colors hover:bg-slate-900 dark:hover:bg-slate-600"
            >
              <Github className="h-4 w-4 mr-2" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-4 bg-teal-600 text-white rounded-md flex items-center justify-center transition-colors hover:bg-teal-700"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
          {!githubLink && !liveLink && (
            <a 
              href="https://github.com/ganeshkrishnareddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-full py-2 rounded-md flex items-center justify-center transition-colors ${
                isHovered 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="mr-2">View Details</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
