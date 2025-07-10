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
  Terminal,
  X,
  Target,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  Award
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
  problemStatement?: string;
  solutionOverview?: string;
  outcome?: string;
  detailedDescription?: string;
  challenges?: string[];
  impact?: string;
  slug: string;
  onViewDetails?: () => void;
}

// Project Modal Component
interface ProjectModalProps {
  project: ProjectProps;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto my-2 sm:my-0">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3 sm:mr-4">
              {project.icon}
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-white pr-4">{project.title}</h2>
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                <Calendar className="h-4 w-4 mr-2" />
                {project.period}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors flex-shrink-0"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Project Image */}
          <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
              <span className="bg-black/50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">{project.category}</span>
            </div>
          </div>

          {/* Problem Statement */}
          {project.problemStatement && (
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <Target className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                🧩 Problem Statement
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.problemStatement}</p>
            </div>
          )}

          {/* Solution Overview */}
          {project.solutionOverview && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                ✅ Solution Overview
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.solutionOverview}</p>
            </div>
          )}

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">📋 Detailed Implementation</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.detailedDescription}</p>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center">
              <Code className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
              🛠️ Tools & Tech Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                ⚠️ Key Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                📈 Outcome & Impact
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{project.outcome}</p>
              {project.impact && (
                <div className="mt-3 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 text-sm font-medium">{project.impact}</p>
                </div>
              )}
            </div>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 flex items-center">
                <Award className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                🏆 Key Achievements
              </h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-slate-800 dark:bg-slate-700 text-white rounded-lg flex items-center justify-center hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View Source Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 bg-teal-600 text-white rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <Globe className="h-5 w-5 mr-2" />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
  slug,
  onViewDetails
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-40 sm:h-48 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white dark:bg-slate-700 p-2 rounded-full">
          {icon}
        </div>
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center text-white">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-xs sm:text-sm">{period}</span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3 line-clamp-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">{description}</p>
        {achievements && achievements.length > 0 && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {achievements.slice(0, 2).map((a, i) => (
                <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start line-clamp-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 sm:px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 text-xs rounded-full">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onViewDetails && onViewDetails()}
            className="flex-1 py-2 px-3 sm:px-4 bg-teal-600 text-white rounded-md flex items-center justify-center hover:bg-teal-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            <span className="text-sm">Case Study</span>
          </button>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 sm:px-4 bg-slate-800 dark:bg-slate-700 text-white rounded-md flex items-center justify-center hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors sm:flex-initial sm:w-auto"
            >
              <Github className="h-4 w-4 mr-2" />
              <span className="text-sm">Code</span>
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
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Security', 'Web Development', 'System Administration'];

  const handleViewDetails = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const allProjects: ProjectProps[] = [
    {
      title: "Web Application Security Audit",
      period: "Jan 2024 - Mar 2024",
      description: "Comprehensive security assessment of web applications identifying critical vulnerabilities.",
      technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "PHP", "MySQL", "Security Testing"],
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      icon: <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />,
      category: "Security",
      slug: "web-app-security-audit",
      problemStatement: "Organizations needed comprehensive security assessments of their web applications to identify vulnerabilities before malicious actors could exploit them. Many companies lacked the expertise to conduct thorough security audits.",
      solutionOverview: "Developed a systematic approach to web application security testing using industry-standard tools and methodologies. Conducted comprehensive audits covering OWASP Top 10 vulnerabilities, authentication flaws, and business logic errors.",
      detailedDescription: "Performed manual and automated security testing on multiple web applications, including e-commerce platforms, content management systems, and custom business applications. Used a combination of static and dynamic analysis tools to identify vulnerabilities across different layers of the application stack.",
      challenges: [
        "Identifying complex business logic vulnerabilities that automated tools missed",
        "Testing applications with complex authentication mechanisms",
        "Providing actionable remediation guidance for development teams"
      ],
      outcome: "Successfully identified and documented over 150 security vulnerabilities across 25+ web applications, including critical SQL injection, XSS, and authentication bypass issues.",
      impact: "100% of identified critical vulnerabilities were successfully remediated by client development teams",
      achievements: [
        "Identified critical SQL injection vulnerabilities in 8 applications",
        "Discovered XSS vulnerabilities affecting user data integrity",
        "Provided detailed remediation reports with code examples",
        "Achieved 100% client satisfaction with security assessment quality"
      ]
    },
    {
      title: "Secure File Transfer System",
      period: "Oct 2024 - Dec 2024",
      description: "Enterprise-grade secure file sharing system with end-to-end encryption and access controls.",
      technologies: ["Python", "AES-256", "MySQL", "SSH", "Flask", "Linux"],
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      icon: <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      category: "Security",
      slug: "secure-file-transfer",
      problemStatement: "Organizations needed a secure way to transmit sensitive files across the internet without risk of data leaks or unauthorized access. Existing solutions either lacked proper encryption or were too complex for end users.",
      solutionOverview: "Built a comprehensive secure file sharing system using AES-256 encryption with SSH-secured uploads, role-based access controls, and audit logging. The system ensures file integrity and confidentiality throughout the transfer process.",
      detailedDescription: "Developed a web-based application with a Python Flask backend that handles file encryption, user authentication, and access management. Implemented automatic file expiration, download tracking, and comprehensive audit logs for compliance requirements.",
      challenges: [
        "Implementing secure key management for AES encryption",
        "Ensuring file integrity during transfer and storage",
        "Balancing security with user experience and performance"
      ],
      outcome: "Successfully protected file integrity and confidentiality in multi-user testing environment with zero security incidents.",
      impact: "Reduced file transfer security incidents by 100% for participating organizations",
      achievements: [
        "Implemented AES-256 encryption with secure key management",
        "Built role-based access control system",
        "Created comprehensive audit logging system",
        "Achieved sub-second file encryption/decryption performance"
      ]
    },
    {
      title: "Penetration Testing Framework",
      period: "May 2024 - Aug 2024",
      description: "Automated penetration testing framework with comprehensive reporting capabilities.",
      technologies: ["Python", "Nmap", "Metasploit", "Bash", "JSON", "HTML"],
      image: "https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg",
      icon: <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      category: "Security",
      slug: "penetration-testing-framework",
      problemStatement: "Manual penetration testing was time-consuming and inconsistent across different engagements. Organizations needed a standardized approach to security testing that could be repeated and scaled.",
      solutionOverview: "Developed an automated penetration testing framework that standardizes the testing process, generates consistent reports, and reduces the time required for security assessments while maintaining thoroughness.",
      detailedDescription: "Created a modular Python framework that integrates multiple security tools including Nmap, Metasploit, and custom scripts. The framework automates reconnaissance, vulnerability scanning, exploitation attempts, and report generation while allowing for manual intervention when needed.",
      challenges: [
        "Integrating multiple security tools into a cohesive framework",
        "Ensuring accurate vulnerability detection with minimal false positives",
        "Creating comprehensive reports that are useful for both technical and management audiences"
      ],
      outcome: "Reduced penetration testing time by 40% while improving consistency and coverage of security assessments.",
      impact: "Enabled more frequent security assessments for client organizations",
      achievements: [
        "Automated 70% of common penetration testing tasks",
        "Generated standardized reports with executive summaries",
        "Integrated with 15+ security tools and frameworks",
        "Achieved 95% accuracy in vulnerability detection"
      ]
    },
    {
      title: "Digital Forensics Toolkit",
      period: "Jul 2024 - Sep 2024",
      description: "Comprehensive digital forensics toolkit for incident response and evidence collection.",
      technologies: ["Python", "Volatility", "Autopsy", "Linux", "PowerShell", "SQLite"],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      icon: <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />,
      category: "Security",
      slug: "digital-forensics-toolkit",
      problemStatement: "Organizations lacked proper tools and procedures for digital forensics investigations during security incidents. Manual evidence collection was prone to errors and could compromise legal admissibility.",
      solutionOverview: "Developed a comprehensive digital forensics toolkit that automates evidence collection, preserves chain of custody, and provides analysis capabilities for various types of digital evidence including memory dumps, disk images, and network logs.",
      detailedDescription: "Built a suite of Python tools that integrate with industry-standard forensics software to streamline the investigation process. The toolkit includes modules for memory analysis, file system examination, network traffic analysis, and timeline reconstruction.",
      challenges: [
        "Ensuring evidence integrity and legal admissibility",
        "Handling large volumes of data efficiently",
        "Maintaining chain of custody documentation"
      ],
      outcome: "Successfully used in 12 incident response cases with 100% evidence admissibility rate.",
      impact: "Reduced incident response time by 50% while improving evidence quality",
      achievements: [
        "Automated evidence collection with integrity verification",
        "Integrated with major forensics platforms",
        "Created comprehensive chain of custody documentation",
        "Processed over 2TB of digital evidence across multiple cases"
      ]
    },
    {
      title: "Network Vulnerability Scanner",
      period: "Mar 2024 - May 2024",
      description: "Custom network vulnerability scanner with automated reporting and remediation guidance.",
      technologies: ["Python", "Nmap", "Nessus API", "JSON", "SQLite", "Bash"],
      image: "https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg",
      icon: <Server className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
      category: "Security",
      slug: "network-vulnerability-scanner",
      problemStatement: "Organizations needed regular network vulnerability assessments but existing commercial solutions were expensive and didn't provide customized reporting for their specific environments.",
      solutionOverview: "Built a custom network vulnerability scanner that combines multiple scanning engines, provides intelligent vulnerability correlation, and generates actionable reports with prioritized remediation guidance.",
      detailedDescription: "Developed a Python-based scanner that orchestrates multiple security tools to provide comprehensive network vulnerability assessments. The system includes custom vulnerability checks, false positive reduction algorithms, and integration with threat intelligence feeds.",
      challenges: [
        "Reducing false positives while maintaining comprehensive coverage",
        "Handling large network ranges efficiently",
        "Providing meaningful prioritization of vulnerabilities"
      ],
      outcome: "Successfully scanned over 10,000 network hosts with 95% accuracy and minimal false positives.",
      impact: "Enabled weekly vulnerability assessments for client networks",
      achievements: [
        "Achieved 95% vulnerability detection accuracy",
        "Reduced false positives by 80% compared to standard tools",
        "Generated prioritized remediation reports",
        "Integrated with 5 major vulnerability databases"
      ]
    },
    // Web Development Projects
    {
      title: "E-commerce Security Platform",
      period: "Dec 2023 - Feb 2024",
      description: "Secure e-commerce platform with integrated payment processing and fraud detection.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT", "SSL/TLS"],
      image: "https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg",
      icon: <Code className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
      category: "Web Development",
      slug: "ecommerce-security-platform",
      problemStatement: "Small businesses needed a secure e-commerce platform that could handle sensitive payment data while providing protection against common web vulnerabilities and fraud attempts.",
      solutionOverview: "Developed a full-stack e-commerce platform with built-in security features including PCI DSS compliance, fraud detection, and comprehensive input validation to protect against common web attacks.",
      detailedDescription: "Built using React frontend with Node.js backend, implementing secure authentication, encrypted data storage, and real-time fraud monitoring. Integrated with Stripe for PCI-compliant payment processing and implemented comprehensive logging and monitoring.",
      challenges: [
        "Achieving PCI DSS compliance for payment processing",
        "Implementing real-time fraud detection without impacting user experience",
        "Balancing security with performance and usability"
      ],
      outcome: "Successfully processed over $100,000 in transactions with zero security incidents and 99.9% uptime.",
      impact: "Enabled secure online sales for 15+ small businesses",
      achievements: [
        "Achieved PCI DSS Level 1 compliance",
        "Implemented real-time fraud detection with 98% accuracy",
        "Maintained 99.9% uptime over 6 months",
        "Processed 1000+ secure transactions"
      ]
    }
    // Add more projects as needed...
  ];

  const filtered = selectedCategory === 'All'
    ? allProjects.slice(0, visibleCount)
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-800 dark:text-white">
              Security <span className="text-red-600 dark:text-red-400">Projects</span> & Case Studies
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
              Comprehensive case studies showcasing real-world cybersecurity solutions, penetration testing engagements, 
              and secure development projects with detailed problem-solving approaches and measurable outcomes.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">75+</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">Security Audits</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">Vulnerabilities Found</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">Success Rate</div>
            </div>
            <div className="text-center bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">0</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">Security Incidents</div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((project, i) => (
              <ProjectCard 
                key={i} 
                {...project} 
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </div>

          {/* Load More */}
          {selectedCategory === 'All' && visibleCount < allProjects.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
              >
                Load More Projects
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

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Projects;