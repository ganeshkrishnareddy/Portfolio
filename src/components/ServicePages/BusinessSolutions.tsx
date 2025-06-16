import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Cog, Database, Zap, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const BusinessSolutions: React.FC = () => {
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
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to increase efficiency and reduce manual errors"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business requirements"
    },
    {
      title: "Data Collection & Analysis",
      description: "Automated data gathering and insightful analytics to drive informed business decisions"
    },
    {
      title: "System Integration",
      description: "Connect disparate systems and applications for seamless data flow and operations"
    },
    {
      title: "Business Intelligence Tools",
      description: "Transform raw data into actionable insights with custom dashboards and reporting"
    },
    {
      title: "Workflow Optimization",
      description: "Analyze and improve existing processes to maximize productivity and minimize costs"
    }
  ];

  const benefits = [
    "Significant reduction in operational costs",
    "Improved accuracy and reduced human errors",
    "Enhanced productivity and efficiency",
    "Better decision-making with data insights",
    "Scalable solutions that grow with your business",
    "Competitive advantage through innovation"
  ];

  const technologies = [
    "Python & C++", "Database Management", "API Development", "Cloud Solutions",
    "Automation Scripts", "Data Analytics", "System Architecture", "Security Implementation"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-full mb-6">
              <Briefcase className="h-10 w-10 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Business <span className="text-orange-600 dark:text-orange-400">Solutions</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Transform your business operations with custom software solutions and automation tools designed to 
              increase efficiency, reduce costs, and drive sustainable growth.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Cog className="h-6 w-6 text-orange-600 dark:text-orange-400 mr-3" />
                  Optimizing Business Operations
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  I specialize in developing custom business solutions that address your unique operational challenges. 
                  From automating repetitive tasks to creating comprehensive data analysis systems, I help businesses 
                  leverage technology to work smarter, not harder.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  My approach involves thoroughly understanding your current processes, identifying bottlenecks and 
                  inefficiencies, then designing and implementing solutions that deliver measurable improvements in 
                  productivity, accuracy, and cost-effectiveness.
                </p>
              </div>

              {/* Offerings */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Solution Services</h2>
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
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                  Business Impact
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Database className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                  Solution Stack
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
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">Transform Your Business</h3>
                <p className="text-sm mb-4 opacity-90">Let's discuss your automation needs</p>
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Schedule Consultation
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

export default BusinessSolutions;