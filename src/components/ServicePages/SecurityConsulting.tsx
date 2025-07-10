import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, FileText, Zap, CheckCircle, ArrowLeft, ExternalLink, Award } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const SecurityConsulting: React.FC = () => {
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
      title: "Security Architecture Review",
      description: "Comprehensive evaluation of security controls and architecture design"
    },
    {
      title: "Compliance Assessment",
      description: "Assessment against industry standards like ISO 27001, NIST, PCI DSS"
    },
    {
      title: "Risk Management Strategy",
      description: "Development of risk assessment frameworks and mitigation strategies"
    },
    {
      title: "Security Training & Awareness",
      description: "Employee training programs and security awareness initiatives"
    },
    {
      title: "Incident Response Planning",
      description: "Development of incident response procedures and playbooks"
    },
    {
      title: "Security Policy Development",
      description: "Creation of comprehensive security policies and procedures"
    }
  ];

  const benefits = [
    "Expert guidance on security best practices",
    "Compliance with regulatory requirements",
    "Reduced security risks and vulnerabilities",
    "Improved security awareness and culture",
    "Cost-effective security investments",
    "Strategic security roadmap development"
  ];

  const frameworks = [
    "NIST Cybersecurity Framework", "ISO 27001", "PCI DSS", "OWASP",
    "SANS Top 20", "CIS Controls", "COBIT", "ITIL"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-6">
              <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Security <span className="text-blue-600 dark:text-blue-400">Consulting</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Expert guidance on security architecture, compliance requirements, and risk management strategies 
              tailored to your organization's unique needs and industry requirements.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  Strategic Security Guidance
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  I provide strategic cybersecurity consulting services to help organizations build robust security 
                  programs, achieve compliance, and manage cyber risks effectively. My consulting approach combines 
                  industry best practices with practical implementation strategies.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Whether you're looking to establish a security program from scratch, improve existing controls, 
                  or achieve compliance with specific regulations, I provide the expertise and guidance needed to 
                  build a comprehensive security posture that protects your organization.
                </p>
              </div>

              {/* Offerings */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Consulting Services</h2>
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
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Consulting Benefits
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

              {/* Frameworks */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Security Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Certifications
                </h3>
                <div className="space-y-2 text-sm">
                  <div>• CompTIA Security+ CE</div>
                  <div>• CompTIA Network+ CE</div>
                  <div>• QuickHeal Digital Forensics</div>
                  <div>• Microsoft Power Platform</div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">Need Security Strategy?</h3>
                <p className="text-sm mb-4 opacity-90">Let's build your security roadmap</p>
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
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

export default SecurityConsulting;