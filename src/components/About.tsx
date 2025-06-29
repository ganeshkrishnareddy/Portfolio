import React from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Code, Award, Users, Target, Lightbulb, ExternalLink, Building2, MapPin, Globe, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const testimonials = [
    {
      quote: "Working with Ganesh was a game-changer. His full-stack development skills and deep understanding of business requirements helped us launch our platform on time and with exceptional quality.",
      author: "Ramesh Varma",
      position: "CEO, TechRise Solutions",
      icon: <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      quote: "Ganesh's cybersecurity insights saved our company from a critical vulnerability. His structured approach and hands-on testing proved his expertise in real-world environments.",
      author: "Neha Sharma",
      position: "CISO, FinSecure Corp",
      icon: <ShieldCheck className="h-5 w-5 text-red-600 dark:text-red-400" />,
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      quote: "From idea to execution, Ganesh led our web revamp with strategy, precision, and creative flair. The new site boosted conversions by 35% in the first month.",
      author: "Ankita Reddy",
      position: "Marketing Director, Market Movers",
      icon: <Award className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      quote: "ProgVision's comprehensive approach to digital transformation exceeded our expectations. Their team delivered both technical excellence and strategic business value.",
      author: "Vikram Singh",
      position: "CTO, InnovateTech",
      icon: <Building2 className="h-5 w-5 text-green-600 dark:text-green-400" />,
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      quote: "The automation solutions Ganesh developed for our operations reduced manual work by 60% and significantly improved our team's productivity and accuracy.",
      author: "Priya Patel",
      position: "Operations Manager, DataFlow Systems",
      icon: <Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    }
  ];

  const scrollTestimonials = (direction: 'left' | 'right') => {
    const container = document.getElementById('testimonials-container');
    if (container) {
      const scrollAmount = 320; // Width of one testimonial card + gap
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg px-4">
            Passionate Computer Science student with expertise in cybersecurity, full-stack development, and system administration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column - About Me Content */}
          <div className="space-y-6 sm:space-y-8 h-full flex flex-col">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6">Who I Am</h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
                I am <span className="font-semibold text-teal-600 dark:text-teal-400">P Ganesh Krishna Reddy</span>, 
                a final-year B.Tech Computer Science and Engineering student at Lovely Professional University. 
                I aspire to excel as a <span className="font-semibold">Cybersecurity Analyst</span>, 
                <span className="font-semibold"> Full Stack Developer</span>, and <span className="font-semibold">Linux Administrator</span>.
              </p>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-3 sm:p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">Key Achievements:</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li>• <span className="font-medium">Red Hat Internship:</span> Linux system administration & server optimization</li>
                  <li>• <span className="font-medium">CompTIA Security+ CE & Network+ CE</span> certified</li>
                  <li>• <span className="font-medium">Reliance Foundation Scholarship</span> recipient (₹2,00,000)</li>
                  <li>• <span className="font-medium">200+ clients served</span> through ProgVision freelance agency</li>
                </ul>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
                My technical foundation spans <span className="font-medium text-slate-800 dark:text-white">C++, Python, JavaScript, React.js, and Node.js</span>. 
                I've developed impactful projects including:
              </p>
              
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Secure File Transfer System</span> with AES encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Vulnerability Scanner</span> using Python & Nmap</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Web Application Security Audits</span> with comprehensive reporting</span>
                </li>
              </ul>
            </div>

            {/* ProgVision Company Details */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 sm:p-8 rounded-xl border border-teal-100 dark:border-teal-800">
              <div className="flex items-center mb-4">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">About ProgVision</h3>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
                <span className="font-semibold text-teal-600 dark:text-teal-400">ProgVision</span> is an innovative startup I founded to bring together the power of 
                <span className="font-medium"> technology and financial strategy</span>. Our mission is to deliver smart, scalable solutions that help individuals and businesses thrive in the digital age.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-3 text-sm sm:text-base">We offer three core services:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-base">💻</span>
                    <div>
                      <span className="font-medium">Software Development</span> – Building custom web and mobile apps, scalable platforms, and automation tools.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-base">💹</span>
                    <div>
                      <span className="font-medium">Financial Consulting</span> – Providing tailored financial planning, investment advice, and strategic insights for sustainable growth.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-base">📈</span>
                    <div>
                      <span className="font-medium">Stock Market Advisory</span> – Delivering in-depth market research, portfolio analysis, and real-time investment guidance.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-lg mb-4">
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mb-3">
                  With a talented team and a vision-driven approach, <span className="font-semibold text-teal-600 dark:text-teal-400">ProgVision</span> is committed to quality, transparency, and results that matter.
                </p>
                <div className="flex items-center text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span><span className="font-medium">Offices:</span> Hyderabad, Tirupati, Jalandhar</span>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span>Available for in-person and remote consultations</span>
                </div>
              </div>

              <a 
                href="https://progvision.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors shadow-md text-sm sm:text-base"
              >
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Explore ProgVision
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Right Column - 2x2 Grid Layout for Cards */}
          <div className="h-full flex flex-col space-y-6">
            {/* Top Row - Main Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow h-full">
                <div className="mb-4 bg-teal-100 dark:bg-teal-900/30 p-2 sm:p-3 rounded-full w-max">
                  <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3">Cybersecurity</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Specialized in digital forensics, vulnerability assessment, and security auditing with industry-recognized certifications.
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Tools:</span> Nmap, Burp Suite, Wireshark, Metasploit
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow h-full">
                <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 p-2 sm:p-3 rounded-full w-max">
                  <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Full-stack development expertise with modern frameworks, serving 200+ clients through ProgVision.
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Stack:</span> React.js, Node.js, WordPress, WooCommerce
                </div>
              </div>
            </div>

            {/* Middle Row - Additional Expertise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow h-full">
                <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 p-2 sm:p-3 rounded-full w-max">
                  <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3">System Administration</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Linux system optimization and automation through Red Hat internship experience.
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Skills:</span> Bash scripting, Apache, MySQL, Security configs
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-shadow h-full">
                <div className="mb-4 bg-orange-100 dark:bg-orange-900/30 p-2 sm:p-3 rounded-full w-max">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-3">Continuous Learning</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Committed to staying current with emerging technologies and security practices.
                </p>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Recent:</span> QuickHeal Digital Forensics, Power Platform
                </div>
              </div>
            </div>

            {/* Bottom Row - Strengths and Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 sm:p-6 rounded-xl h-full">
                <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400 mr-2" />
                  Core Strengths
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                    Quick Learner
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                    Team Player
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                    Detail-Oriented
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 flex-shrink-0"></div>
                    Problem Solver
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-4 sm:p-6 rounded-xl h-full">
                <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400 mr-2" />
                  Areas of Interest
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Cybersecurity', 'Cloud Computing', 'System Automation', 'DevSecOps', 'Network Defense'].map((interest, index) => (
                    <span key={index} className="px-2 sm:px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Section with Horizontal Scrolling */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white flex items-center">
              <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400 mr-3" />
              What People Say
            </h3>
            
            {/* Navigation Buttons */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollTestimonials('left')}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollTestimonials('right')}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Testimonials Container */}
          <div className="relative">
            <div 
              id="testimonials-container"
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-none w-80 sm:w-96 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 snap-start hover:shadow-xl transition-shadow"
                >
                  {/* Quote Icon */}
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-full ${testimonial.bgColor} mr-4 flex-shrink-0`}>
                      {testimonial.icon}
                    </div>
                    <Quote className="h-6 w-6 text-slate-300 dark:text-slate-600 flex-shrink-0" />
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:hidden">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const container = document.getElementById('testimonials-container');
                    if (container) {
                      container.scrollTo({
                        left: index * 320,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-teal-500 dark:hover:bg-teal-400 transition-colors"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Scroll Hint for Mobile */}
          <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4 sm:hidden">
            Swipe left or right to see more testimonials
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;