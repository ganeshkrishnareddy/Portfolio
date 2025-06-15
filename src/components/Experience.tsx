import React from 'react';
import { Calendar, MapPin, Code, Users, Briefcase } from 'lucide-react';

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
  const experiences = [
    {
      period: "February 2022 - Present",
      title: "Founder & Web Developer",
      organization: "ProgVision – Freelance Agency",
      location: "Remote",
      description: [
        "Developed over 25 websites and provided web development, SEO, and digital marketing services to 200+ clients, helping businesses grow their online presence.",
        "Automated web data collection through software tools and custom scripts, streamlining repetitive tasks effectively.",
        "Tech Stacks Used: Python, C#, C++, .NET Framework, React.js, PHP, HTML"
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
      </div>
    </section>
  );
};

export default Experience;