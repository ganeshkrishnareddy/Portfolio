import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Code, Award, Users, Target, Lightbulb, ExternalLink, Building2, MapPin, Globe } from 'lucide-react';

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
                I am <span className="font-semibold text-teal-600 dark:text-teal-400">P Ganesh Krishna Reddy</span>, 
                a final-year B.Tech Computer Science and Engineering student at Lovely Professional University. 
                I aspire to excel as a <span className="font-semibold">Cybersecurity Analyst</span>, 
                <span className="font-semibold"> Full Stack Developer</span>, and <span className="font-semibold">Linux Administrator</span>.
              </p>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Key Achievements:</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• <span className="font-medium">Red Hat Internship:</span> Linux system administration & server optimization</li>
                  <li>• <span className="font-medium">CompTIA Security+ CE & Network+ CE</span> certified</li>
                  <li>• <span className="font-medium">Reliance Foundation Scholarship</span> recipient (₹2,00,000)</li>
                  <li>• <span className="font-medium">200+ clients served</span> through ProgVision freelance agency</li>
                </ul>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                My technical foundation spans <span className="font-medium text-slate-800 dark:text-white">C++, Python, JavaScript, React.js, and Node.js</span>. 
                I've developed impactful projects including:
              </p>
              
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                  <span><span className="font-medium">Secure File Transfer System</span> with AES encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                  <span><span className="font-medium">Vulnerability Scanner</span> using Python & Nmap</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2"></div>
                  <span><span className="font-medium">Web Application Security Audits</span> with comprehensive reporting</span>
                </li>
              </ul>
            </div>

            {/* ProgVision Company Details */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-8 rounded-xl border border-teal-100 dark:border-teal-800">
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">About ProgVision</h3>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                <span className="font-semibold text-teal-600 dark:text-teal-400">ProgVision</span> is an innovative startup I founded to bring together the power of 
                <span className="font-medium"> technology and financial strategy</span>. Our mission is to deliver smart, scalable solutions that help individuals and businesses thrive in the digital age.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3">We offer three core services:</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2">💻</span>
                    <div>
                      <span className="font-medium">Software Development</span> – Building custom web and mobile apps, scalable platforms, and automation tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💹</span>
                    <div>
                      <span className="font-medium">Financial Consulting</span> – Providing tailored financial planning, investment advice, and strategic insights for sustainable growth.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📈</span>
                    <div>
                      <span className="font-medium">Stock Market Advisory</span> – Delivering in-depth market research, portfolio analysis, and real-time investment guidance.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-3">
                  With a talented team and a vision-driven approach, <span className="font-semibold text-teal-600 dark:text-teal-400">ProgVision</span> is committed to quality, transparency, and results that matter.
                </p>
                <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span><span className="font-medium">Offices:</span> Hyderabad, Tirupati, Jalandhar</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Available for in-person and remote consultations</span>
                </div>
              </div>

              <a 
                href="https://progvision.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors shadow-md"
              >
                <Globe className="h-5 w-5 mr-2" />
                Explore ProgVision
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
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
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Specialized in digital forensics, vulnerability assessment, and security auditing with industry-recognized certifications.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium">Tools:</span> Nmap, Burp Suite, Wireshark, Metasploit
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-max">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Web Development</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Full-stack development expertise with modern frameworks, serving 200+ clients through ProgVision.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium">Stack:</span> React.js, Node.js, WordPress, WooCommerce
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full w-max">
                <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">System Administration</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Linux system optimization and automation through Red Hat internship experience.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium">Skills:</span> Bash scripting, Apache, MySQL, Security configs
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full w-max">
                <GraduationCap className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Committed to staying current with emerging technologies and security practices.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium">Recent:</span> QuickHeal Digital Forensics, Power Platform
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                "Ganesh delivered exceptional web development services for our business. His attention to detail and technical expertise exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Client Feedback</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">ProgVision Client</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                "His cybersecurity knowledge and practical approach to problem-solving make him a valuable asset to any team."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Industry Recognition</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Professional Network</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                "Ganesh consistently demonstrates strong technical skills and leadership qualities in collaborative projects."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                  <GraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Academic Excellence</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">University Peer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;