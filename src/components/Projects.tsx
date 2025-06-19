import React, { useState } from 'react';
import {
  Calendar,
  ExternalLink,
  Lock,
  Server,
  Shield,
  Github,
  Globe,
  Filter,
  Code,
  Terminal
} from 'lucide-react';

// Interface
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

// Project Card
const ProjectCard: React.FC<ProjectProps> = ({
  title,
  period,
  description,
  technologies,
  image,
  icon,
  githubLink,
  liveLink,
  achievements,
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
              {achievements.map((a, i) => (
                <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
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
              className="flex-1 py-2 px-4 bg-slate-800 dark:bg-slate-700 text-white rounded-md flex items-center justify-center hover:bg-slate-900 dark:hover:bg-slate-600"
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
              className="flex-1 py-2 px-4 bg-teal-600 text-white rounded-md flex items-center justify-center hover:bg-teal-700"
            >
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Projects Section
const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'Security', 'Web Development', 'System Administration'];

  const allProjects: ProjectProps[] = [
    // Add 15 projects here (sample 5 per category)
    {
      title: "Web Application Security Audit",
      period: "Jan 2024 - Mar 2024",
      description: "Identified XSS, SQLi, and other security flaws in real-world apps.",
      technologies: ["HTML", "PHP", "MySQL", "Security Testing"],
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Security"
    },
    {
      title: "Secure File Transfer System",
      period: "Oct 2024 - Dec 2024",
      description: "Secure file sharing using AES, role-based access, SSH",
      technologies: ["Python", "AES", "MySQL"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      icon: <Lock className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Security"
    },
    {
      title: "Phishing Simulation Lab",
      period: "Jul 2023 - Sep 2023",
      description: "Simulated phishing scenarios using GoPhish.",
      technologies: ["GoPhish", "SMTP", "HTML Emails"],
      image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Security"
    },
    {
      title: "Network Vulnerability Scanner",
      period: "May 2023 - Jun 2023",
      description: "Automated Nmap scanning and reporting.",
      technologies: ["Python", "Nmap"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Security"
    },
    {
      title: "Server Hardening Toolkit",
      period: "Mar 2023 - Apr 2023",
      description: "Hardened Linux server using Bash scripts.",
      technologies: ["Linux", "Bash", "Apache"],
      image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Security"
    },

    // Web Dev
    {
      title: "E-commerce Dashboard",
      period: "Dec 2023 - Feb 2024",
      description: "React & Node.js dashboard for managing orders & products.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },
    {
      title: "ProgVision WordPress Theme",
      period: "Jul 2023 - Sep 2023",
      description: "Custom theme development for clients.",
      technologies: ["WordPress", "PHP", "SEO"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },
    {
      title: "Personal Portfolio Website",
      period: "Feb 2022 - Present",
      description: "Fully responsive personal branding site.",
      technologies: ["React", "Tailwind", "Netlify"],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },
    {
      title: "Blog Engine with Markdown",
      period: "Nov 2022 - Dec 2022",
      description: "Blog system with markdown post support.",
      technologies: ["React", "Markdown", "Vite"],
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },
    {
      title: "Event Registration System",
      period: "Aug 2022 - Sep 2022",
      description: "Full-stack event registration platform.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      image: "https://images.pexels.com/photos/21067/pexels-photo.jpg",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "Web Development"
    },

    // SysAdmin
    {
      title: "Linux Server Monitoring",
      period: "Feb 2023 - Mar 2023",
      description: "Setup Grafana + Prometheus for server stats.",
      technologies: ["Linux", "Grafana", "Prometheus"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    },
    {
      title: "User Management Tool",
      period: "May 2022 - Jun 2022",
      description: "CLI tool to add/remove users.",
      technologies: ["Bash", "Linux"],
      image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
      icon: <Terminal className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    },
    {
      title: "Backup Cron Service",
      period: "Apr 2022 - May 2022",
      description: "Automatic daily backups with logs.",
      technologies: ["Cron", "Bash", "Rsync"],
      image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    },
    {
      title: "Apache & Nginx Reverse Proxy",
      period: "Jan 2022 - Feb 2022",
      description: "Configured proxy for multiple web apps.",
      technologies: ["Apache", "Nginx"],
      image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    },
    {
      title: "Log Analyzer",
      period: "Dec 2021 - Jan 2022",
      description: "Analyzed server logs using Python.",
      technologies: ["Python", "Regex"],
      image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
      icon: <Server className="h-5 w-5 text-teal-600 dark:text-teal-400" />, category: "System Administration"
    },
  ];

  const filtered = selectedCategory === 'All'
    ? allProjects.slice(0, visibleCount)
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-white">
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-4"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-teal-100 dark:hover:bg-teal-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        {/* Load More */}
        {selectedCategory === 'All' && visibleCount < allProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="text-center mt-16">
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
    </section>
  );
};

export default Projects;
