import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Code } from 'lucide-react';

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
            A passionate and detail-oriented Computer Science Student Aspiring to become a Cyber Security Analyst, 
            Full Stack Developer & Linux administrator.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I am P Ganesh Krishna Reddy, a passionate and detail-oriented Computer Science and 
              Engineering student at Lovely Professional University with a strong foundation in 
              web development, cybersecurity, and system administration. With hands-on experience 
              through internships, projects, and certifications, I have developed a solid skill set in 
              C++, Python, JavaScript, and frameworks like React.js and Node.js.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              During my internship at Red Hat, I gained practical exposure to Linux system administration, 
              focusing on optimizing servers, automating tasks using Bash scripting, and enhancing system 
              security. I have also built security-oriented projects, including a Secure File Transfer System, 
              a Vulnerability Scanning Tool, and conducted Web Application Security Audits.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My achievements include earning prestigious certifications like CompTIA Security+ CE, 
              Network+ CE, and receiving the Reliance Foundation Undergraduate Scholarship for academic 
              excellence. I'm a quick learner, a team player, and always eager to explore new technologies, 
              especially in the areas of cybersecurity, cloud computing, and system automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-max">
                <ShieldCheck className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Cybersecurity</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Specialized in digital forensics, system security, and vulnerability assessment.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-max">
                <Code className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Web Development</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Experienced in frontend and backend development using modern frameworks.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-max">
                <Briefcase className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">System Administration</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Skilled in Linux system optimization and server security configuration.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-max">
                <GraduationCap className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Committed to staying updated with the latest technologies and security practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;