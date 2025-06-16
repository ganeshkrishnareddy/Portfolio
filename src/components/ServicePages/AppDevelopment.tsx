import React from 'react';
import { Smartphone, Monitor, Layers, Zap, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';

interface ServicePageProps {
  onBack: () => void;
}

const AppDevelopment: React.FC<ServicePageProps> = ({ onBack }) => {
  const offerings = [
    {
      title: "Cross-Platform Mobile Apps",
      description: "Native-quality apps that work seamlessly on both iOS and Android platforms"
    },
    {
      title: "Desktop Applications",
      description: "Powerful desktop software for Windows, macOS, and Linux operating systems"
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description: "Web applications that provide native app-like experience across all devices"
    },
    {
      title: "API Development & Integration",
      description: "Custom APIs and third-party service integrations for enhanced functionality"
    },
    {
      title: "App Modernization",
      description: "Update and enhance existing applications with modern features and technologies"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and feature enhancements for your applications"
    }
  ];

  const benefits = [
    "Reach customers on their preferred devices",
    "Improved user engagement and retention",
    "Offline functionality and push notifications",
    "Seamless integration with device features",
    "Scalable architecture for future growth",
    "Cross-platform compatibility and cost efficiency"
  ];

  const technologies = [
    "React Native", "Flutter", "Electron", "Node.js", "Python",
    "SQLite & Firebase", "REST APIs", "Git & CI/CD"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
            <Smartphone className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            App Development <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Bring your ideas to life with custom mobile and desktop applications that deliver exceptional user experiences 
            and drive meaningful engagement across all platforms and devices.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Monitor className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                Building Tomorrow's Applications
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                I develop innovative mobile and desktop applications that solve real-world problems while providing 
                intuitive user experiences. Whether you need a mobile app to connect with customers or a desktop 
                application to streamline business operations, I create solutions that are both functional and engaging.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My approach focuses on understanding your unique requirements and translating them into applications 
                that not only meet your current needs but also scale with your business growth. Every app is built 
                with performance, security, and user experience as top priorities.
              </p>
            </div>

            {/* Offerings */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Development Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offerings.map((offering, index) => (
                  <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{offering.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{offering.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Why Choose App Development?
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                Development Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white text-center">
              <h3 className="text-lg font-bold mb-2">Have an App Idea?</h3>
              <p className="text-sm mb-4 opacity-90">Let's turn your vision into reality</p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Start Your Project
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;