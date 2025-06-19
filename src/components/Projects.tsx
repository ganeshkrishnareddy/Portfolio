import React, { useState } from 'react';
import {
  Calendar, ExternalLink, Lock, Server, Shield, Github, Globe, Filter, Code
} from 'lucide-react';

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
              href="https://github.com/pganeshkrishnareddy"
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

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Security', 'Web Development', 'System Administration'];

  const projectsData = [
    {
      title: "Phishing Simulation Lab",
      period: "Jun 2025",
      description: "Designed phishing awareness training using GoPhish with multiple campaign templates.",
      technologies: ["GoPhish", "Email", "Security Awareness"],
      image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Security"
    },
    {
      title: "E-commerce Dashboard",
      period: "May 2025",
      description: "A full-stack dashboard with order management, charts and secure authentication.",
      technologies: ["React.js", "Node.js", "JWT", "MongoDB"],
      image: "https://images.pexels.com/photos/4467732/pexels-photo-4467732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },
    {
      title: "Linux Monitoring Setup",
      period: "Apr 2025",
      description: "Integrated Prometheus and Grafana for Linux server health tracking.",
      technologies: ["Linux", "Grafana", "Prometheus", "Bash"],
      image: "https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    },
    {
      title: "Blog Engine",
      period: "Mar 2025",
      description: "Developed a markdown-based blogging platform with custom theming.",
      technologies: ["Next.js", "Markdown", "Tailwind"],
      image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },
    {
      title: "Backup Cron Service",
      period: "Feb 2025",
      description: "Automated backup service using bash scripting and cron jobs.",
      technologies: ["Linux", "Bash", "Cron", "Automation"],
      image: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            A showcase of my technical skills across web development, security, and system engineering.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            <span className="text-slate-600 dark:text-slate-400 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-teal-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out my GitHub profile for more projects and open-source contributions.
            </p>
            <a
              href="https://github.com/pganeshkrishnareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
