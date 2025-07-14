import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Target, Download, ChevronDown, ChevronUp, Award, Code, Shield, Globe, TrendingUp } from 'lucide-react';

interface PhaseProps {
  title: string;
  status: 'completed' | 'ongoing' | 'planned' | 'future';
  description: string;
  skills: string[];
  tools: string[];
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      icon: <Shield className="h-6 w-6 text-green-600" />,
      color: "border-green-500"
    },
    {
      title: "PHASE 2: Cybersecurity Analyst Path",
      status: 'ongoing' as const,
      description: "Advancing cybersecurity expertise with specialized certifications and practical experience in threat detection and digital forensics.",
      skills: ["SOC Analysis", "Threat Detection", "Digital Forensics", "Incident Response", "Log Analysis"],
      tools: ["YARA", "Autopsy", "Splunk", "FTK Imager", "Volatility", "SIEM Tools"],
      icon: <Target className="h-6 w-6 text-yellow-600" />,
      color: "border-yellow-500"
    },
    {
      title: "PHASE 3: Offensive Security",
      status: 'planned' as const,
      description: "Developing penetration testing and ethical hacking skills to identify and exploit vulnerabilities in secure environments.",
      skills: ["Web App Pentesting", "Privilege Escalation", "Exploit Development", "Social Engineering", "Red Team Operations"],
      tools: ["Burp Suite", "Metasploit", "Hydra", "SQLmap", "Gobuster", "Cobalt Strike"],
      icon: <Code className="h-6 w-6 text-blue-600" />,
      color: "border-blue-500"
    },
    {
      title: "PHASE 4: Full-Stack Dev Mastery",
      status: 'ongoing' as const,
      description: "Mastering modern full-stack development with focus on secure, scalable applications and DevOps practices.",
      skills: ["React/Redux", "Node.js/Express", "Database Design", "API Development", "DevOps/CI-CD", "Cloud Architecture"],
      tools: ["React", "Node.js", "MongoDB", "Docker", "AWS", "GitHub Actions"],
      icon: <Globe className="h-6 w-6 text-teal-600" />,
      color: "border-teal-500"
    }
  ];

  const certifications = [
    { name: "CompTIA Security+", status: "✅ Done", target: "–" },
    { name: "CompTIA Network+", status: "✅ Done", target: "–" },
    { name: "QuickHeal Digital Forensics", status: "✅ Done", target: "–" },
    { name: "CompTIA CySA+", status: "⏳ Ongoing", target: "Sept 2025" },
    { name: "CompTIA PenTest+", status: "🔒 Planned", target: "Dec 2025" },
    { name: "OSCP", status: "🎯 Future", target: "2026" }
  ];

  const careerGoals = [
    "SOC Analyst or Pentester – 2025",
    "Full-Stack Engineer at Product-Based MNC – 2025",
    "Build 3 Production-Grade Secure Apps – In Progress",
    "Publish GitHub Security Automation Tools – Coming Soon",
    "Get ₹40+ LPA role via blended Tech + Security skills"
  ];

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

        {/* Certification Timeline */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
            <Award className="h-6 w-6 text-teal-500 mr-3" />
            📊 Certification Timeline
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 text-slate-800 dark:text-white">Certification</th>
                  <th className="text-left py-3 text-slate-800 dark:text-white">Status</th>
                  <th className="text-left py-3 text-slate-800 dark:text-white">Target</th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((cert, index) => (
                  <tr key={index} className="border-b border-slate-100 dark:border-slate-700">
                    <td className="py-3 text-slate-600 dark:text-slate-300">{cert.name}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-300">{cert.status}</td>
                    <td className="py-3 text-slate-600 dark:text-slate-300">{cert.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          <a
            href="https://medium.com/@pganeshkrishnareddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg mr-4"
          >
            <Download className="h-5 w-5 mr-2" />
            Read My Medium Articles
          </a>
          <button className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg">
            📄 Download Full Roadmap (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;