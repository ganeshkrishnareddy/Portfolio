import React, { useState } from 'react';
import { Calendar, ExternalLink, Lock, Server, Shield } from 'lucide-react';

interface ProjectProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  period, 
  description, 
  technologies, 
  image,
  icon
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
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData = [
    {
      title: "Secure File Transfer System",
      period: "Oct 2024 - Dec 2024",
      description: "A secure file transfer application using Python, implementing encryption (AES) to ensure data security during transfers.",
      technologies: ["Python", "AES Encryption", "SSH", "MySQL"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Lock className="h-5 w-5 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Server Hardening & Automation",
      period: "June 2024 - Aug 2024",
      description: "Developed automated scripts for server configuration and deployment with real-time log monitoring system.",
      technologies: ["Linux", "Bash Scripting", "Apache", "MySQL"],
      image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Vulnerability Scanning Tool",
      period: "Apr 2024 - May 2024",
      description: "Built a vulnerability scanning tool using Python and Nmap to detect common security vulnerabilities in web servers.",
      technologies: ["Python", "Nmap", "Web Security", "Email Notifications"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Web Application Security Audit",
      period: "Jan 2024 - Mar 2024",
      description: "Performed security testing on a demo web application to identify vulnerabilities and suggest security improvements.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WooCommerce"],
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            A showcase of my technical skills and problem-solving abilities through various projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
