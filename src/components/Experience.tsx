import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Clock, Building2, Award, CheckCircle } from 'lucide-react';

interface ExperienceItemProps {
  period: string;
  duration: string;
  title: string;
  company: string;
  location: string;
  type: string;
  achievements: string[];
  tools?: string[];
  isLast?: boolean;
  companyLogo?: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  period,
  duration,
  title,
  company,
  location,
  type,
  achievements,
  tools,
  isLast = false,
  companyLogo
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-teal-500 to-teal-300 dark:from-teal-400 dark:to-teal-600" />
      )}
      
      {/* Timeline Dot - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute left-0 top-6 w-8 h-8 bg-teal-500 hover:bg-teal-600 rounded-full border-4 border-white dark:border-slate-900 z-10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-expanded={isExpanded}
        aria-label={`Toggle details for ${title}`}
      >
        <div className="w-full h-full rounded-full bg-teal-500 flex items-center justify-center">
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-white" />
          ) : (
            <ChevronDown className="h-4 w-4 text-white" />
          )}
        </div>
      </button>

      {/* Experience Card */}
      <div className="ml-12 mb-8">
        {/* Header - Always Visible */}
        <div 
          className="bg-slate-800 dark:bg-slate-700 p-4 sm:p-6 rounded-lg shadow-lg cursor-pointer hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <div className="flex items-center mb-2 sm:mb-0">
              <Calendar className="h-4 w-4 text-slate-400 mr-2" />
              <span className="text-slate-300 text-sm">{period}</span>
              <span className="mx-2 text-slate-500">•</span>
              <Clock className="h-4 w-4 text-slate-400 mr-1" />
              <span className="text-slate-300 text-sm">{duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-slate-400 mr-1" />
              <span className="text-slate-300 text-sm">{type}</span>
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          
          <div className="flex items-center">
            {companyLogo && (
              <div className="mr-3 bg-white dark:bg-slate-600 p-2 rounded-full">
                {companyLogo}
              </div>
            )}
            <div>
              <p className="text-teal-400 font-semibold">{company}</p>
              <p className="text-slate-400 text-sm">{location}</p>
            </div>
          </div>
        </div>

        {/* Expandable Details */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-b-lg shadow-lg border-t-2 border-teal-500">
            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                <Award className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            {tools && tools.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  🔧 Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "February 2022 - Present",
      duration: "3+ years",
      title: "Freelancer | Cybersecurity Analyst & Web Developer",
      company: "Independent Contractor",
      location: "Remote",
      type: "Remote",
      companyLogo: <Building2 className="h-6 w-6 text-teal-600" />,
      achievements: [
        "Conducted comprehensive security audits and penetration testing for 75+ clients, identifying critical vulnerabilities and providing detailed remediation reports.",
        "Developed secure web applications and implemented security best practices, resulting in 100% client satisfaction and zero security incidents post-deployment.",
        "Specialized in digital forensics investigations, malware analysis, and incident response, helping organizations recover from security breaches and strengthen their defenses.",
        "Built automated security scanning tools using Python and Bash, reducing manual testing time by 60% while improving accuracy of vulnerability detection."
      ],
      tools: ["Python", "Burp Suite", "Nmap", "Wireshark", "Metasploit", "React.js", "Node.js", "Linux", "Bash", "MySQL"]
    },
    {
      period: "June 2024 - July 2024",
      duration: "2 months",
      title: "Linux System Administration Training",
      company: "Red Hat",
      location: "Remote",
      type: "Remote",
      companyLogo: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#EE0000">
          <path d="M18.5 9.5c0-1.1-.9-2-2-2h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c1.1 0 2-.9 2-2s-.9-2-2-2h-1c-1.7 0-3 1.3-3 3 0 .8.3 1.5.8 2-.5.5-.8 1.2-.8 2 0 1.7 1.3 3 3 3h1c1.1 0 2-.9 2-2zm-6-6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2v-10c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      achievements: [
        "Gained practical experience in Linux system administration by configuring and managing servers, focusing on system optimization and security.",
        "Automated server management tasks using Bash scripting, reducing manual efforts and improving system efficiency.",
        "Assisted in configuring firewalls and managing network services to maintain secure communication across systems."
      ],
      tools: ["Linux", "Red Hat Enterprise Linux", "Bash Scripting", "Apache", "MySQL", "SSH", "Firewall Configuration"],
      isLast: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="text-teal-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            My professional journey and hands-on experience in the technology industry.
          </p>
        </div>

        {/* Professional Experience Details - Always Expanded */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 dark:bg-slate-700 p-4 sm:p-6 rounded-lg mb-8 border border-slate-700 dark:border-slate-600">
            <div className="flex items-center">
              <Building2 className="h-6 w-6 text-teal-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Professional Experience Details</h3>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                {...exp}
                isLast={exp.isLast || index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;