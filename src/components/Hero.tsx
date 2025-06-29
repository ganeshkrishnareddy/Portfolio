import React from 'react';
import { ArrowDownCircle, Shield, Code, Server, Download, Calendar, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-2 text-sm sm:text-base">Hello, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
              P Ganesh Krishna Reddy
            </h1>
            <div className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6">
              <p className="font-semibold text-xl sm:text-2xl text-slate-800 dark:text-white mb-2">
                Securing Systems. Building Solutions.
              </p>
              <p className="text-base sm:text-lg mb-4">
                Bridging <span className="font-semibold text-teal-600 dark:text-teal-400">Cybersecurity</span> & 
                <span className="font-semibold text-teal-600 dark:text-teal-400"> Web Development</span> with Precision.
              </p>
            </div>

            {/* ProgVision Company Introduction */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-4 sm:p-6 rounded-xl mb-6 border border-teal-100 dark:border-teal-800">
              <div className="flex items-center mb-3">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400 mr-2" />
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">Founder of ProgVision</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                I'm the founder of <span className="font-semibold text-teal-600 dark:text-teal-400">ProgVision</span>, 
                a dynamic company that bridges the gap between <span className="font-medium">technology, finance, and market intelligence</span>. 
                We specialize in <span className="font-medium">software development</span>, <span className="font-medium">financial consulting</span>, 
                and <span className="font-medium">stock market advisory</span>—empowering clients to grow with precision, innovation, and trust.
              </p>
              <a 
                href="https://progvision.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm transition-colors"
              >
                🌐 Visit ProgVision
                <ArrowDownCircle className="h-4 w-4 ml-1 rotate-[-90deg]" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-sm">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500" />
                <span className="text-slate-700 dark:text-slate-200">Security+ Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-sm">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500" />
                <span className="text-slate-700 dark:text-slate-200">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-sm">
                <Server className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500" />
                <span className="text-slate-700 dark:text-slate-200">Red Hat Trained</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a 
                href="#projects" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors shadow-md flex items-center text-sm sm:text-base"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors shadow-md border border-slate-200 dark:border-slate-600 text-sm sm:text-base"
              >
                Hire Me
              </a>
              <a 
                href="https://drive.google.com/file/d/19lJoyBZQaV3dGkbjDskPyDy4GvjsapZM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 hover:bg-slate-900 dark:hover:bg-slate-100 rounded-md transition-colors shadow-md flex items-center gap-2 text-sm sm:text-base"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </a>
              <a 
                href="https://topmate.io/pganeshkrishnareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md flex items-center gap-2 text-sm sm:text-base"
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Book Consultation</span>
                <span className="sm:hidden">Book Call</span>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ganesh Krishna Reddy - Cybersecurity Analyst & Full Stack Developer" 
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 sm:border-8 border-white dark:border-slate-800 shadow-xl relative z-10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-lg rotate-12 opacity-70 z-0"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-full opacity-70 z-0"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 sm:mt-16">
          <a 
            href="#about" 
            className="animate-bounce text-slate-400 hover:text-teal-600 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDownCircle className="h-8 w-8 sm:h-10 sm:w-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;