import React, { useState } from 'react';
import { Globe, Clock, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  tooltip?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="mb-6 relative">
      <div className="flex justify-between mb-1">
        <div className="flex items-center">
          <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
          {tooltip && (
            <div className="relative ml-2">
              <Info 
                className="h-4 w-4 text-slate-400 cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-lg z-10 w-64">
                  {tooltip}
                </div>
              )}
            </div>
          )}
        </div>
        <span className="text-slate-600 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

interface SkillBubbleProps {
  skill: string;
  color: string;
  icon?: React.ReactNode;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, color, icon }) => (
  <div className={`px-4 py-2 rounded-full ${color} text-white text-sm font-medium shadow-sm transform transition-transform hover:scale-105 flex items-center gap-2`}>
    {icon}
    {skill}
  </div>
);

interface LanguageItemProps {
  language: string;
  level: string;
  color: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language, level, color }) => (
  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
    <div className="flex items-center">
      <Globe className="h-5 w-5 text-teal-500 mr-3" />
      <span className="font-medium text-slate-800 dark:text-white">{language}</span>
    </div>
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {level}
    </span>
  </div>
);

interface TechnicalSkillItemProps {
  skill: string;
  experience: string;
  color: string;
}

const TechnicalSkillItem: React.FC<TechnicalSkillItemProps> = ({ skill, experience, color }) => (
  <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
    <div className="flex items-center">
      <Clock className="h-5 w-5 text-teal-500 mr-3" />
      <span className="font-medium text-slate-800 dark:text-white">{skill}</span>
    </div>
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {experience}
    </span>
  </div>
);

const Skills: React.FC = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const technicalSkills = [
    { 
      skill: 'Cybersecurity', 
      percentage: 90, 
      color: 'bg-teal-600',
      tooltip: 'CompTIA Security+ certified, vulnerability assessment, digital forensics, penetration testing'
    },
    { 
      skill: 'C++', 
      percentage: 85, 
      color: 'bg-blue-600',
      tooltip: 'Object-oriented programming, data structures, algorithms, competitive programming'
    },
    { 
      skill: 'Linux Administration', 
      percentage: 85, 
      color: 'bg-red-500',
      tooltip: 'Red Hat trained, server configuration, Bash scripting, system optimization'
    },
    { 
      skill: 'JavaScript', 
      percentage: 80, 
      color: 'bg-yellow-500',
      tooltip: 'ES6+, DOM manipulation, async programming, modern frameworks'
    },
    { 
      skill: 'Python', 
      percentage: 75, 
      color: 'bg-blue-500',
      tooltip: 'Automation scripts, security tools, data analysis, web scraping'
    },
    { 
      skill: 'React.js', 
      percentage: 70, 
      color: 'bg-blue-400',
      tooltip: 'Component-based architecture, hooks, state management, modern React patterns'
    }
  ];

  const softSkills = [
    { skill: 'Problem Solving', percentage: 95, color: 'bg-purple-600' },
    { skill: 'Team Collaboration', percentage: 90, color: 'bg-indigo-500' },
    { skill: 'Communication', percentage: 85, color: 'bg-orange-500' },
    { skill: 'Project Management', percentage: 80, color: 'bg-pink-500' }
  ];

  const toolsAndPlatforms = [
    { skill: 'Git', color: 'bg-orange-600', icon: <span>📝</span> },
    { skill: 'MySQL', color: 'bg-blue-500', icon: <span>🗄️</span> },
    { skill: 'MongoDB', color: 'bg-green-600', icon: <span>🍃</span> },
    { skill: 'WordPress', color: 'bg-blue-700', icon: <span>📰</span> },
    { skill: 'Node.js', color: 'bg-green-500', icon: <span>⚡</span> },
    { skill: 'VS Code', color: 'bg-blue-500', icon: <span>💻</span> },
    { skill: 'Nmap', color: 'bg-red-600', icon: <span>🔍</span> },
    { skill: 'Wireshark', color: 'bg-blue-600', icon: <span>🦈</span> }
  ];

  const frameworks = [
    { skill: 'React.js', color: 'bg-blue-400' },
    { skill: 'Node.js', color: 'bg-green-500' },
    { skill: 'Express.js', color: 'bg-gray-600' },
    { skill: 'Tailwind CSS', color: 'bg-teal-500' }
  ];

  const languages = [
    { language: 'English', level: 'Fluent', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    { language: 'Telugu', level: 'Native', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
    { language: 'Hindi', level: 'Fluent', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    { language: 'Tamil', level: 'Intermediate', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' }
  ];

  const detailedTechnicalSkills = [
    { skill: 'HTML, CSS, JavaScript', experience: '3+ years', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' },
    { skill: 'React.js, Node.js', experience: '2+ years', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
    { skill: 'Python Security Tools', experience: '2+ years', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    { skill: 'Linux System Admin', experience: '1+ year', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
    { skill: 'Cybersecurity Fundamentals', experience: '1+ year', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
    { skill: 'Database Management', experience: '2+ years', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            A comprehensive set of technical and soft skills developed through education, certifications, 
            internships, and hands-on project experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {frameworks.map((framework, index) => (
                <SkillBubble key={index} {...framework} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {toolsAndPlatforms.map((tool, index) => (
                <SkillBubble key={index} {...tool} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="w-full text-left flex items-center justify-between bg-slate-200 dark:bg-slate-700 p-4 rounded-lg mb-3 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white flex items-center">
                <Globe className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                Languages
              </h3>
              {showLanguages ? <ChevronUp /> : <ChevronDown />}
            </button>
            {showLanguages && (
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <LanguageItem key={index} {...lang} />
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setShowExperience(!showExperience)}
              className="w-full text-left flex items-center justify-between bg-slate-200 dark:bg-slate-700 p-4 rounded-lg mb-3 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            >
              <h3 className="text-xl font-semibold text-slate-slate-800 dark:text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                Technical Experience
              </h3>
              {showExperience ? <ChevronUp /> : <ChevronDown />}
            </button>
            {showExperience && (
              <div className="space-y-3">
                {detailedTechnicalSkills.map((skill, index) => (
                  <TechnicalSkillItem key={index} {...skill} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;