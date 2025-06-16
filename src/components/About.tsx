import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Code, Award, Users, Target, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Passionate Computer Science student with expertise in cybersecurity, full-stack development, and system administration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Who I Am</h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                I'm <span className="font-semibold text-teal-600 dark:text-teal-400">P Ganesh Krishna Reddy</span>, 
                a dedicated Computer Science and Engineering student at Lovely Professional University with a clear vision 
                for my future in technology. I aspire to excel as a <span className="font-semibold">Cybersecurity Analyst</span>, 
                <span className="font-semibold"> Full Stack Developer</span>, and <span className="font-semibold">Linux Administrator</span>.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                My technical foundation is built on <span className="font-medium text-slate-800 dark:text-white">C++, Python, JavaScript, React.js, and Node.js</span>, 
                complemented by hands-on experience gained through my internship at <span className="font-semibold text-teal-600 dark:text-teal-400">Red Hat</span>, 
                where I specialized in Linux system administration, server optimization, Bash scripting, and security implementations.
              </p>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I've developed impactful projects including a <span className="font-medium">Secure File Transfer System</span>, 
                <span className="font-medium"> Vulnerability Scanner</span>, and conducted comprehensive <span className="font-medium">Web Application Security Audits</span>. 
                My commitment to excellence is validated by <span className="font-semibold text-teal-600 dark:text-teal-400">CompTIA Security+ CE and Network+ CE certifications</span>, 
                and I'm honored to be a recipient of the <span className="font-semibold text-teal-600 dark:text-teal-400">Reliance Foundation Undergraduate Scholarship</span>.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                <Target className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                Core Strengths
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  Quick Learner
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  Team Player
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  Detail-Oriented
                </div>
                <div className="flex items-center text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  Problem Solver
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                <Lightbulb className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Cybersecurity', 'Cloud Computing', 'System Automation', 'DevSecOps', 'Network Defense'].map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-max">
                <ShieldCheck className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Cybersecurity</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Specialized in digital forensics, vulnerability assessment, and security auditing with industry-recognized certifications and hands-on project experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-max">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Web Development</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Full-stack development expertise using modern frameworks and technologies, with a focus on secure, scalable applications and user experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-max">
                <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">System Administration</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Linux system optimization, server security configuration, and automation through scripting, backed by real-world internship experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full w-max">
                <GraduationCap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Committed to staying current with emerging technologies, security practices, and industry trends through certifications and practical application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;