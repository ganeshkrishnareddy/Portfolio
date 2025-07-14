import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Target, Download, ChevronDown, ChevronUp, Award, Code, Shield, Globe, TrendingUp, ExternalLink, GraduationCap } from 'lucide-react';

interface PhaseProps {
  title: string;
  status: 'completed' | 'ongoing' | 'planned' | 'future';
  description: string;
  skills: string[];
  tools: string[];
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
    id: string;
    link?: string;
    status: 'completed' | 'ongoing' | 'planned';
  }>;
  icon: React.ReactNode;
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const PhaseCard: React.FC<PhaseProps> = ({
  title,
  status,
  description,
  skills,
  tools,
  certifications,
  icon,
  color,
  isExpanded,
  onToggle
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'ongoing': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'planned': return <Target className="h-5 w-5 text-blue-500" />;
      case 'future': return <Target className="h-5 w-5 text-purple-500" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'completed': return '✅ Completed';
      case 'ongoing': return '⏳ In Progress';
      case 'planned': return '🔒 Planned';
      case 'future': return '🎯 Future Goal';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'future': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
    }
  };

  const getCertStatusIcon = (certStatus: string) => {
    switch (certStatus) {
      case 'completed': return '✅';
      case 'ongoing': return '⏳';
      case 'planned': return '🔒';
      default: return '✅';
    }
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border-l-4 ${color} hover:shadow-xl transition-all duration-300`}>
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors rounded-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="mr-4 p-2 bg-slate-100 dark:bg-slate-700 rounded-full">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
                {getStatusIcon()}
                <span className="ml-2">{getStatusText()}</span>
              </span>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-slate-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700 pt-4">
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2 flex items-center">
                🛠 Skills Acquired
              </h4>
              <ul className="space-y-1">
                {skills.map((skill, index) => (
                  <li key={index} className="text-sm text-slate-600 dark:text-slate-300 flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-2 flex items-center">
                🧰 Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          {certifications && certifications.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                🏆 Related Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm">{getCertStatusIcon(cert.status)}</span>
                          <h5 className="font-medium text-slate-800 dark:text-white text-sm">{cert.name}</h5>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">{cert.issuer}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                          {cert.date} • ID: {cert.id}
                        </p>
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 ml-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CareerRoadmap: React.FC = () => {
  const [expandedPhases, setExpandedPhases] = useState<number[]>([0]);

  const togglePhase = (index: number) => {
    setExpandedPhases(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const phases = [
    {
      title: "PHASE 1: Foundations",
      status: 'completed' as const,
      description: "Built strong foundation in cybersecurity, networking, and web development fundamentals through certifications and hands-on projects.",
      skills: ["Networking Fundamentals", "Linux System Administration", "Web Development Basics", "Security Principles", "Version Control"],
      tools: ["Nmap", "Wireshark", "Git", "Visual Studio Code", "Linux CLI", "HTML/CSS/JS"],
      certifications: [
        {
          name: "CS50's Understanding Technology",
          issuer: "Harvard University",
          date: "November 2023",
          id: "1f305a31-6d98-4043-ac2b-35c76bc38a0c",
          link: "https://cs50.harvard.edu/certificates/1f305a31-6d98-4043-ac2b-35c76bc38a0c",
          status: 'completed' as const
        },
        {
          name: "CompTIA Network+ CE",
          issuer: "CompTIA",
          date: "August 2024",
          id: "83JGFW2TN2RQQCKG",
          link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=9LGHCR89B7LLFLS1",
          status: 'completed' as const
        },
        {
          name: "Summer Training on Linux System Administration",
          issuer: "Lovely Professional University",
          date: "August 2024",
          id: "Registration No: 12212186",
          link: "https://drive.google.com/file/d/1ZfYZAIalNs9-qdog4RvJONdAzibGeSUb/view?usp=sharing",
          status: 'completed' as const
        }
      ],
      icon: <Shield className="h-6 w-6 text-green-600" />,
      color: "border-green-500"
    },
    {
      title: "PHASE 2: Cybersecurity Analyst Path",
      status: 'ongoing' as const,
      description: "Advancing cybersecurity expertise with specialized certifications and practical experience in threat detection and digital forensics.",
      skills: ["SOC Analysis", "Threat Detection", "Digital Forensics", "Incident Response", "Log Analysis"],
      tools: ["YARA", "Autopsy", "Splunk", "FTK Imager", "Volatility", "SIEM Tools"],
      certifications: [
        {
          name: "CompTIA Security+ CE",
          issuer: "CompTIA",
          date: "January 2025",
          id: "QDR90YBSZJVQQKWS",
          link: "https://www.certmetrics.com/comptia/public/verification.aspx?code=YLP7LZ44L706VHCZ",
          status: 'completed' as const
        },
        {
          name: "QuickHeal Certified Digital Forensic Investigator",
          issuer: "Quick Heal Academy",
          date: "January 2025",
          id: "LPU-0000-780553",
          link: "https://lms.quickhealacademy.com/certificates/verification/exam?id=LPU-0000-780553",
          status: 'completed' as const
        },
        {
          name: "Microsoft Power Platform Fundamentals (PL-900)",
          issuer: "Coursera",
          date: "April 2025",
          id: "SHY8XOE77RB5",
          link: "https://coursera.org/verify/specialization/SHY8XOE77RB5",
          status: 'completed' as const
        },
        {
          name: "Tata Group - Cybersecurity Analyst Job Simulation",
          issuer: "Forage",
          date: "June 2025",
          id: "X5R5dKq9DkjnwSQW4",
          link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_SLa4iANMguG7m2Zin_1749878938454_completion_certificate.pdf",
          status: 'completed' as const
        },
        {
          name: "Deloitte Australia - Cyber Job Simulation",
          issuer: "Forage",
          date: "June 2025",
          id: "3o683ubu49Fa5G3wB",
          link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_SLa4iANMguG7m2Zin_1748834447065_completion_certificate.pdf",
          status: 'completed' as const
        }
      ],
      icon: <Target className="h-6 w-6 text-yellow-600" />,
      color: "border-yellow-500"
    },
    {
      title: "PHASE 3: Full-Stack Dev Mastery",
      status: 'ongoing' as const,
      description: "Mastering modern full-stack development with focus on secure, scalable applications and DevOps practices.",
      skills: ["React/Redux", "Node.js/Express", "Database Design", "API Development", "DevOps/CI-CD", "Cloud Architecture"],
      tools: ["React", "Node.js", "MongoDB", "Docker", "AWS", "GitHub Actions"],
      icon: <Globe className="h-6 w-6 text-teal-600" />,
      color: "border-teal-500"
    },
    {
      title: "PHASE 4: Offensive Security",
      status: 'planned' as const,
      description: "Developing penetration testing and ethical hacking skills to identify and exploit vulnerabilities in secure environments.",
      skills: ["Web App Pentesting", "Privilege Escalation", "Exploit Development", "Social Engineering", "Red Team Operations"],
      tools: ["Burp Suite", "Metasploit", "Hydra", "SQLmap", "Gobuster", "Cobalt Strike"],
      certifications: [
        {
          name: "CompTIA CySA+",
          issuer: "CompTIA",
          date: "Target: Sept 2025",
          id: "Planned",
          status: 'ongoing' as const
        },
        {
          name: "CompTIA PenTest+",
          issuer: "CompTIA",
          date: "Target: Dec 2025",
          id: "Planned",
          status: 'planned' as const
        },
        {
          name: "OSCP",
          issuer: "Offensive Security",
          date: "Goal: 2026",
          id: "Future",
          status: 'planned' as const
        }
      ],
      icon: <Code className="h-6 w-6 text-blue-600" />,
      color: "border-blue-500"
    }
  ];

  const careerGoals = [
    "SOC Analyst or Pentester – 2025",
    "Full-Stack Engineer at Product-Based MNC – 2025",
    "Build 3 Production-Grade Secure Apps – In Progress",
    "Publish GitHub Security Automation Tools – Coming Soon",
    "Get ₹40+ LPA role via blended Tech + Security skills"
  ];

  const handleEducationClick = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-slate-900 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Career <span className="text-teal-400">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Strategic progression through cybersecurity and full-stack development expertise, 
            building towards senior technical roles in product-based companies.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {phases.map((phase, index) => (
            <PhaseCard
              key={index}
              {...phase}
              isExpanded={expandedPhases.includes(index)}
              onToggle={() => togglePhase(index)}
            />
          ))}
        </div>

        {/* Career Goals */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-3" />
            🎯 Career Goals
          </h3>
          <ul className="space-y-3">
            {careerGoals.map((goal, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://medium.com/@pganeshkrishnareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Read My Medium Articles
            </a>
            <button 
              onClick={handleEducationClick}
              className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg"
            >
              <GraduationCap className="h-5 w-5 mr-2" />
              View More in Education
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;