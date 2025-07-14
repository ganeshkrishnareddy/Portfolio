import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Palette, Shield, Zap, CheckCircle, ArrowLeft, ExternalLink, Code, Globe } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const AppDevelopment: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const offerings = [
    {
      title: "Cross-Platform Mobile Apps",
      description: "Build once, deploy everywhere with React Native and Flutter frameworks"
    },
    {
      title: "Native iOS & Android Development",
      description: "Platform-specific apps with optimal performance and native user experience"
    },
    {
      title: "Backend API Integration",
      description: "Seamless integration with REST APIs, GraphQL, and real-time data synchronization"
    },
    {
      title: "App Store Deployment",
      description: "Complete deployment process for both Google Play Store and Apple App Store"
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Web applications that work like native apps with offline capabilities"
    },
    {
      title: "App Maintenance & Updates",
      description: "Ongoing support, bug fixes, and feature updates to keep your app current"
    }
  ];

  const benefits = [
    "Cross-platform compatibility for wider reach",
    "Native performance and user experience",
    "Secure authentication and data protection",
    "Offline functionality and data synchronization",
    "Push notifications and real-time updates",
    "App store optimization and deployment"
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Node.js", "Firebase", 
    "MongoDB", "REST APIs", "GraphQL", "Redux"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </button>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full mb-6">
              <Smartphone className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              App Development <span className="text-green-600 dark:text-green-400">Services</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Create powerful mobile applications that engage users and drive business growth with modern frameworks, 
              secure architecture, and seamless user experience across all platforms.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Palette className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  Mobile-First Development
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  I specialize in creating high-performance mobile applications that deliver exceptional user experiences 
                  across iOS and Android platforms. Using modern frameworks like React Native and Flutter, I build 
                  scalable apps that meet your business objectives while maintaining native performance.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every app is designed with security, performance, and user experience in mind, ensuring your mobile 
                  presence stands out in today's competitive marketplace while providing seamless functionality across all devices.
                </p>
              </div>

              {/* Offerings */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">What I Offer</h2>
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
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Technologies Used
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
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ready to Build Your App?</h3>
                <p className="text-sm mb-4 opacity-90">Let's discuss your mobile app requirements</p>
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Contact Me
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppDevelopment;