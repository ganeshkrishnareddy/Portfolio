import React, { useState } from 'react';
import { Globe, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
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

interface SkillBubbleProps {
  skill: string;
  color: string;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, color }) => (
  <div className={`px-4 py-2 rounded-full ${color} text-white text-sm font-medium shadow-sm transform transition-transform hover:scale-105`}>
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
    { skill: 'C++', percentage: 85, color: 'bg-blue-600' },
    { skill: 'JavaScript', percentage: 80, color: 'bg-yellow-500' },
    { skill: 'Python', percentage: 75, color: 'bg-blue-500' },
    { skill: 'React.js', percentage: 70, color: 'bg-blue-400' },
    { skill: 'Linux Administration', percentage: 85, color: 'bg-red-500' },
    { skill: 'Cybersecurity', percentage: 90, color: 'bg-teal-600' },
  ];

  const softSkills = [
    { skill: 'Problem Solving', percentage: 95, color: 'bg-purple-600' },
    { skill: 'Team Collaboration', percentage: 90, color: 'bg-indigo-500' },
    { skill: 'Project Management', percentage: 80, color: 'bg-pink-500' },
    { skill: 'Communication', percentage: 85, color: 'bg-orange-500' },
  ];

  const toolsAndPlatforms = [
    { skill: 'MySQL', color: 'bg-blue-500' },
    { skill: 'MongoDB', color: 'bg-green-600' },
    { skill: 'WordPress', color: 'bg-blue-700' },
    { skill: 'WooCommerce', color: 'bg-purple-600' },
    { skill: 'Git', color: 'bg-orange-600' },
    { skill: 'VS Code', color: 'bg-blue-500' },
    { skill: 'Bash Scripting', color: 'bg-gray-700' },
    { skill: 'Node.js', color: 'bg-green-500' },
  ];

  const languages = [
    { language: 'English', level: 'Fluent', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    { language: 'Telugu', level: 'Native', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
    { language: 'Hindi', level: 'Fluent', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    { language: 'Tamil', level: 'Intermediate', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
  ];

  const detailedTechnicalSkills = [
    { skill: 'HTML, CSS, JavaScript', experience: '3 years', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' },
    { skill: 'React.js, Node.js', experience: '2 years', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
    { skill: 'Python', experience: '3 years', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
    { skill: 'Git & GitHub', experience: '2 years', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
    { skill: 'Cybersecurity Fundamentals', experience: '1 year', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
    { skill: 'Networking (CCNA-level)', experience: '1 year', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400' },
    { skill: 'Linux Command Line', experience: '1 year', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400' },
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
            A comprehensive set of technical and soft skills I've developed through education,
            internships, and personal projects.
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
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-12 mb-6">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolsAndPlatforms.map((skill, index) => (
                <SkillBubble key={index} {...skill} />
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
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white flex items-center">
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
