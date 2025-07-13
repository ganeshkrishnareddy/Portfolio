import React, { useState } from 'react';
import { Calendar, MapPin, Code, Users, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  period, 
  title, 
  organization, 
  location, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative pl-8 pb-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-0 left-0 h-full w-px bg-teal-200 dark:bg-teal-800 ml-3"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 z-10"></div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
        <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">{organization}</p>
        
        <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [showExperience, setShowExperience] = useState(false);

  const experiences = [
    {
      period: "February 2022 - Present",
      title: "Freelancer | Cybersecurity Analyst & Web Developer",
      organization: "Independent Contractor",
      location: "Remote",
      description: [
        "Conducted comprehensive security audits and penetration testing for 75+ clients, identifying critical vulnerabilities and providing detailed remediation reports.",
        "Developed secure web applications and implemented security best practices, resulting in 100% client satisfaction and zero security incidents post-deployment.",
        "Specialized in digital forensics investigations, malware analysis, and incident response, helping organizations recover from security breaches and strengthen their defenses.",
        "Built automated security scanning tools using Python and Bash, reducing manual testing time by 60% while improving accuracy of vulnerability detection."
      ]
    },
    {
      period: "June 2024 - July 2024",
      title: "Linux System Administration Training",
      organization: "Red Hat",
      location: "Remote",
      description: [
        "Gained practical experience in Linux system administration by configuring and managing servers, focusing on system optimization and security.",
        "Automated server management tasks using Bash scripting, reducing manual efforts and improving system efficiency.",
        "Assisted in configuring firewalls and managing network services to maintain secure communication across systems."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Work <span className="text-teal-600 dark:text-teal-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            My professional journey and hands-on experience in the technology industry.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Experience Dropdown Toggle */}
          <button
            onClick={() => setShowExperience(!showExperience)}
            className="w-full text-left flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mb-6 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-md"
          >
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-teal-600 dark:text-teal-400" />
              Professional Experience Details
            </h3>
            {showExperience ? (
              <ChevronUp className="h-6 w-6 text-slate-600 dark:text-slate-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-slate-600 dark:text-slate-400" />
            )}
          </button>

          {/* Experience Timeline - Collapsible */}
          {showExperience && (
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <TimelineItem 
                  key={index}
                  period={exp.period}
                  title={exp.title}
                  organization={exp.organization}
                  location={exp.location}
                  description={exp.description}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          )}

          {/* Summary when collapsed */}
          {!showExperience && (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">3+</div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">75+</div>
                  <div className="text-slate-600 dark:text-slate-300 text-sm">Projects Completed</div>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-center mt-4">
                Freelance Cybersecurity Analyst & Full-Stack Developer with expertise in security audits, 
                web development, and system administration.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;