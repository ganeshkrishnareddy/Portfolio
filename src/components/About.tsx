import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Code, Award, Users, Target, Lightbulb, ExternalLink, Building2, MapPin, Globe, Quote, ChevronLeft, ChevronRight, Play, Pause, ChevronDown, ChevronUp, Shield, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showProgVision, setShowProgVision] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Ganesh helped us identify critical vulnerabilities in our web application. His clear documentation and timely fixes helped us secure our infrastructure efficiently.",
      author: "Rohit Mehta",
      position: "CTO, Fintronix Systems Pvt. Ltd.",
      icon: <ShieldCheck className="h-5 w-5 text-red-600 dark:text-red-400" />,
      bgColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      quote: "We hired Ganesh to revamp our company website and integrate security testing. He delivered a clean, responsive platform with strong security measures.",
      author: "Anjali Deshmukh",
      position: "CEO, CodeNest Technologies",
      icon: <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      quote: "Ganesh's automated network scanning solution saved our IT team countless hours. His cybersecurity expertise is top-notch.",
      author: "Siddharth Rao",
      position: "IT Head, SecureWave India",
      icon: <Target className="h-5 w-5 text-green-600 dark:text-green-400" />,
      bgColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      quote: "The phishing simulation tool built by Ganesh helped us educate our employees about real-world attacks. It was effective and easy to manage.",
      author: "Kavita Nair",
      position: "HR Manager, Orbit Infosec Pvt. Ltd.",
      icon: <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      quote: "Our internal server was successfully hardened using Ganesh's toolkit. He also provided documentation and training for our admins.",
      author: "Vivek Reddy",
      position: "System Administrator, NetCraft Solutions",
      icon: <Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
      bgColor: "bg-orange-100 dark:bg-orange-900/30"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change testimonial every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Scroll to current testimonial when index changes
  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = currentTestimonial * 320; // Width of one testimonial card + gap
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentTestimonial]);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Pause auto-scroll when user hovers over testimonials
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
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
                I work as a <span className="font-semibold">Freelance Cybersecurity Analyst</span>, 
                <span className="font-semibold"> Penetration Tester</span>, and <span className="font-semibold">Secure Web Developer</span>.
              </p>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 p-3 sm:p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">Key Achievements:</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li>• <span className="font-medium">Security Expertise:</span> 75+ successful security audits and penetration tests</li>
                  <li>• <span className="font-medium">CompTIA Security+ CE & Network+ CE</span> certified</li>
                  <li>• <span className="font-medium">Digital Forensics:</span> QuickHeal Certified Digital Forensic Investigator</li>
                  <li>• <span className="font-medium">Reliance Foundation Scholarship</span> recipient (₹2,00,000)</li>
                  <li>• <span className="font-medium">Red Hat Internship:</span> Linux system administration & server optimization</li>
                </ul>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
                My security expertise includes <span className="font-medium text-slate-800 dark:text-white">penetration testing, vulnerability assessment, digital forensics, and secure development</span>. 
                I've developed impactful projects including:
              </p>
              
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 mb-4 text-sm sm:text-base">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Web Application Security Audits</span> identifying critical vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Penetration Testing Framework</span> with automated reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Digital Forensics Toolkit</span> for incident response</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><span className="font-medium">Secure File Transfer System</span> with AES encryption</span>
                </li>
              </ul>
            </div>

            {/* Cybersecurity Specializations - Now with Dropdown */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 sm:p-8 rounded-xl border border-red-100 dark:border-red-800">
              <button
                onClick={() => setShowProgVision(!showProgVision)}
                className="w-full flex items-center justify-between mb-4 text-left"
              >
                <div className="flex items-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400 mr-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">Cybersecurity Specializations</h3>
                </div>
                {showProgVision ? (
                  <ChevronUp className="h-5 w-5 text-red-600 dark:text-red-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                )}
              </button>
              
              {showProgVision && (
                <div className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    As a <span className="font-semibold text-red-600 dark:text-red-400">certified cybersecurity professional</span>, I specialize in protecting organizations from 
                    <span className="font-medium"> cyber threats and ensuring robust security postures</span>. My expertise spans multiple domains of cybersecurity.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3 text-sm sm:text-base">Core Security Specializations:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start">
                        <span className="mr-2 text-base">🔍</span>
                        <div>
                          <span className="font-medium">Penetration Testing</span> – Comprehensive security assessments using industry-standard methodologies (OWASP, NIST).
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-base">🛡️</span>
                        <div>
                          <span className="font-medium">Vulnerability Assessment</span> – Systematic identification and analysis of security weaknesses in systems and applications.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-base">🔬</span>
                        <div>
                          <span className="font-medium">Digital Forensics</span> – Investigation of security incidents, malware analysis, and evidence collection for legal proceedings.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-base">⚡</span>
                        <div>
                          <span className="font-medium">Incident Response</span> – Rapid response to security breaches, containment strategies, and recovery planning.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2 text-sm sm:text-base">Tools & Technologies:</h4>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mb-3">
                      <span className="font-medium">Security Tools:</span> Nmap, Burp Suite, Wireshark, Metasploit, GoPhish, OWASP ZAP, Nessus
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mb-3">
                      <span className="font-medium">Programming:</span> Python, Bash, C++, JavaScript for security automation and tool development
                    </p>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span>Available for remote security assessments and on-site consultations</span>
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors shadow-md text-sm sm:text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Request Security Assessment
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                  </a>
                </div>
              )}
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

        {/* Enhanced Auto-Scrolling Testimonials Section */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white flex items-center">
              <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400 mr-3" />
              What People Say
            </h3>
            
            {/* Auto-play Controls */}
            <div className="flex items-center gap-3">
              {/* Auto-play Toggle */}
              <button
                onClick={toggleAutoPlay}
                className={`p-2 rounded-full transition-colors ${
                  isAutoPlaying 
                    ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
                aria-label={isAutoPlaying ? "Pause auto-scroll" : "Start auto-scroll"}
                title={isAutoPlaying ? "Pause auto-scroll" : "Start auto-scroll"}
              >
                {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

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
          </div>

          {/* Auto-scrolling Progress Indicator */}
          {isAutoPlaying && (
            <div className="mb-4">
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1">
                <div 
                  className="bg-teal-600 h-1 rounded-full transition-all duration-100 ease-linear"
                  style={{
                    width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`
                  }}
                />
              </div>
            </div>
          )}

          {/* Scrollable Testimonials Container */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              ref={containerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`flex-none w-80 sm:w-96 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 snap-start transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'ring-2 ring-teal-500 shadow-xl scale-105' 
                      : 'hover:shadow-xl'
                  }`}
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

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-teal-600 scale-125'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-teal-400 dark:hover:bg-teal-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-scroll Status */}
            <div className="text-center mt-4">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isAutoPlaying ? (
                  <>
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                      Auto-scrolling • Hover to pause
                    </span>
                  </>
                ) : (
                  'Auto-scroll paused • Click play to resume'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;