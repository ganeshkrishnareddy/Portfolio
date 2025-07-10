import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Shield, GitBranch, Zap, CheckCircle, ArrowLeft, ExternalLink, Lock } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SecureDevelopment: React.FC = () => {
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
      title: "Secure Code Review",
      description: "Comprehensive analysis of source code to identify security vulnerabilities and weaknesses"
    },
    {
      title: "Security Testing Integration",
      description: "Integration of security testing tools and processes into CI/CD pipelines"
    },
    {
      title: "DevSecOps Implementation",
      description: "Implementation of security practices throughout the software development lifecycle"
    },
    {
      title: "Secure API Development",
      description: "Development of secure APIs with proper authentication, authorization, and data protection"
    },
    {
      title: "Threat Modeling",
      description: "Systematic identification and analysis of potential security threats in applications"
    },
    {
      title: "Security Architecture Design",
      description: "Design of secure application architectures with defense-in-depth principles"
    }
  ];

  const benefits = [
    "Reduced security vulnerabilities in production",
    "Early detection of security issues in development",
    "Compliance with secure coding standards",
    "Improved application security posture",
    "Cost-effective security implementation",
    "Enhanced developer security awareness"
  ];

  const technologies = [
    "OWASP SAST Tools", "SonarQube", "Checkmarx", "Veracode", "Snyk",
    "Docker Security", "Kubernetes Security", "AWS Security", "Azure Security"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full mb-6">
              <Code className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Secure <span className="text-green-600 dark:text-green-400">Development</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Secure coding practices, code review, and implementation of security controls throughout 
              the software development lifecycle to build resilient and secure applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  Security-First Development
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  I specialize in integrating security practices into the software development process, ensuring 
                  that applications are built with security as a fundamental requirement rather than an afterthought. 
                  My approach focuses on secure coding practices, automated security testing, and continuous security monitoring.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  From secure architecture design to implementation of security controls, I help development teams 
                  build applications that are resilient against common security threats while maintaining performance 
                  and usability requirements.
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
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Development Benefits
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
                  <GitBranch className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  Security Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security Principles */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Security Principles
                </h3>
                <div className="space-y-2 text-sm">
                  <div>• Defense in Depth</div>
                  <div>• Principle of Least Privilege</div>
                  <div>• Fail Secure</div>
                  <div>• Input Validation</div>
                  <div>• Secure by Default</div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">Secure Your Code?</h3>
                <p className="text-sm mb-4 opacity-90">Let's build security into your development process</p>
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Start Secure Development
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

export default SecureDevelopment;