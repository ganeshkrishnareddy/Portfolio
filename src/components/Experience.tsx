import React, { useState } from 'react';
import { Calendar, MapPin, Code, Users, Briefcase, ChevronDown, ChevronUp, Clock, Building2 } from 'lucide-react';

interface TimelineItemProps {
  period: string;
  duration: string;
  title: string;
  organization: string;
  location: string;
  description: string[];
  tools?: string[];
  logo?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  period, 
  duration,
  title, 
  organization, 
  location, 
  description,
  tools,
  logo,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="relative">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 z-10"></div>
        <div className="w-px h-full bg-teal-200 dark:bg-teal-800 mt-2"></div>
      </div>
      
      <div className="ml-8 mb-8">
        {/* Collapsible Header */}
        <button
          onClick={onToggle}
          className="w-full text-left bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-700"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                {logo && (
                  <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Building2 className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  </div>
                )}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">
                    {title.split(' | ')[0]} <span className="text-teal-600 dark:text-teal-400">—</span> {title.split(' | ')[1]}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium text-sm sm:text-base">{organization}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{period}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-medium text-teal-600 dark:text-teal-400">{duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{location}</span>
                </div>
              </div>
            </div>
            
            <div className="ml-4 flex-shrink-0">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-slate-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              )}
            </div>
          </div>
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-teal-600 dark:text-teal-400" />
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2">
                  {description.map((item, index) => (
                    <li key={index} className="flex items-start text-slate-600 dark:text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tools & Technologies */}
              {tools && tools.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2 text-teal-600 dark:text-teal-400" />
                    🔧 Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium border border-teal-200 dark:border-teal-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      period: "February 2022 - Present",
      duration: "3+ years",
      title: "Freelancer | Cybersecurity Analyst & Web Developer",
      organization: "Independent Contractor",
      location: "Remote",
      logo: "freelance",
      description: [
        "Conducted comprehensive security audits and penetration testing for 75+ clients, identifying critical vulnerabilities and providing detailed remediation reports with 100% client satisfaction rate.",
        "Developed secure web applications and implemented security best practices, resulting in zero security incidents post-deployment across all client projects.",
        "Specialized in digital forensics investigations, malware analysis, and incident response, helping organizations recover from security breaches and strengthen their defenses.",
        "Built automated security scanning tools using Python and Bash, reducing manual testing time by 60% while improving accuracy of vulnerability detection.",
        "Served 200+ clients through ProgVision agency, delivering web development, digital marketing, and cybersecurity solutions with proven business impact."
      ],
      tools: ["Python", "Bash", "Nmap", "Burp Suite", "Wireshark", "React.js", "Node.js", "WordPress", "Linux", "MySQL"]
    },
    {
      period: "June 2024 - July 2024",
      duration: "2 months",
      title: "Intern | Linux System Administration",
      organization: "Red Hat",
      location: "Remote",
      logo: "redhat",
      description: [
        "Gained practical experience in Linux system administration by configuring and managing enterprise-grade servers, focusing on system optimization and security hardening.",
        "Automated server management tasks using Bash scripting and system tools, reducing manual efforts by 40% and improving system efficiency across multiple environments.",
        "Assisted in configuring firewalls, SELinux policies, and managing network services to maintain secure communication across distributed systems.",
        "Participated in system monitoring and performance tuning activities, learning industry best practices for enterprise Linux environments."
      ],
      tools: ["Red Hat Enterprise Linux", "Bash", "Apache", "MySQL", "Firewall Configuration", "SELinux", "System Monitoring", "Performance Tuning"]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work <span className="text-teal-600 dark:text-teal-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            My professional journey and hands-on experience in cybersecurity, web development, and system administration.
          </p>
        </div>
        
        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="text-center bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 sm:p-6 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">3+</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Clients Served</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 sm:p-6 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">75+</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Security Audits</div>
          </div>
          <div className="text-center bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 sm:p-6 rounded-xl">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Success Rate</div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <TimelineItem 
                key={index}
                period={exp.period}
                duration={exp.duration}
                title={exp.title}
                organization={exp.organization}
                location={exp.location}
                description={exp.description}
                tools={exp.tools}
                logo={exp.logo}
                isExpanded={expandedItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 sm:p-8 rounded-xl text-white max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Ready to Work Together?</h3>
            <p className="text-sm sm:text-base mb-6 opacity-90">
              Let's discuss how my experience can help secure and enhance your digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Users className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/19lJoyBZQaV3dGkbjDskPyDy4GvjsapZM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;