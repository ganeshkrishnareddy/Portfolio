import React from 'react';
import { ArrowDownCircle, Shield, Code, Server, Download, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              P Ganesh Krishna Reddy
            </h1>
            <div className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6">
              <p className="font-semibold text-2xl text-slate-800 dark:text-white mb-2">
                Securing Systems. Building Solutions.
              </p>
              <p className="text-lg">
                Bridging <span className="font-semibold text-teal-600 dark:text-teal-400">Cybersecurity</span> & 
                <span className="font-semibold text-teal-600 dark:text-teal-400"> Web Development</span> with Precision.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-teal-500" />
                <span className="text-slate-700 dark:text-slate-200">Security+ Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                <Code className="h-5 w-5 text-teal-500" />
                <span className="text-slate-700 dark:text-slate-200">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm">
                <Server className="h-5 w-5 text-teal-500" />
                <span className="text-slate-700 dark:text-slate-200">Red Hat Trained</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors shadow-md flex items-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors shadow-md border border-slate-200 dark:border-slate-600"
              >
                Hire Me
              </a>
              <a 
                href="https://drive.google.com/file/d/19lJoyBZQaV3dGkbjDskPyDy4GvjsapZM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 hover:bg-slate-900 dark:hover:bg-slate-100 rounded-md transition-colors shadow-md flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
              <a 
                href="https://topmate.io/pganeshkrishnareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Consultation
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ganesh Krishna Reddy - Cybersecurity Analyst & Full Stack Developer" 
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-8 border-white dark:border-slate-800 shadow-xl relative z-10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-lg rotate-12 opacity-70 z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-500 rounded-full opacity-70 z-0"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="animate-bounce text-slate-400 hover:text-teal-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownCircle className="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;