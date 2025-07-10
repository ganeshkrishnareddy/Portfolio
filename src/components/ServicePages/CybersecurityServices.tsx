import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Target, Search, Zap, CheckCircle, ArrowLeft, ExternalLink, AlertTriangle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const CybersecurityServices: React.FC = () => {
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
      title: "Web Application Security Audit",
      description: "Comprehensive security assessment of web applications to identify vulnerabilities and security flaws"
    },
    {
      title: "Penetration Testing & Reporting",
      description: "Systematic testing of systems and networks to identify exploitable vulnerabilities"
    },
    {
      title: "Digital Forensics & Incident Response",
      description: "Investigation of security incidents and collection of digital evidence for legal proceedings"
    },
    {
      title: "Vulnerability Assessment",
      description: "Systematic identification and analysis of security weaknesses in systems and applications"
    },
    {
      title: "Security Architecture Review",
      description: "Evaluation of security controls and architecture to ensure robust protection"
    },
    {
      title: "Compliance Assessment",
      description: "Assessment of compliance with industry standards and regulatory requirements"
    }
  ];

  const benefits = [
    "Proactive identification of security vulnerabilities",
    "Reduced risk of data breaches and cyber attacks",
    "Compliance with industry security standards",
    "Improved security posture and risk management",
    "Detailed remediation guidance and support",
    "Cost-effective security solutions"
  ];

  const tools = [
    "Nmap", "Burp Suite", "Wireshark", "GoPhish", "Metasploit", "OWASP ZAP",
    "Nessus", "Volatility", "Autopsy", "Bash Scripting"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full mb-6">
              <Shield className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              🔐 Cybersecurity <span className="text-red-600 dark:text-red-400">Services</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Safeguard your systems with cutting-edge security solutions. Comprehensive cybersecurity services 
              to protect your digital assets and ensure business continuity.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Target className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                  Comprehensive Security Solutions
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  As a CompTIA Security+ certified cybersecurity professional, I provide comprehensive security services 
                  to protect organizations from cyber threats. My approach combines industry-standard methodologies 
                  with hands-on experience to deliver actionable security solutions.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  From vulnerability assessments to incident response, I help organizations build robust security 
                  postures that protect against evolving cyber threats while maintaining business operations and 
                  ensuring compliance with industry standards.
                </p>
              </div>

              {/* Offerings */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Security Services</h2>
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
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  Security Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Search className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  🛠️ Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-4">Security Track Record</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Security Audits:</span>
                    <span className="font-bold">75+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vulnerabilities Found:</span>
                    <span className="font-bold">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Incidents:</span>
                    <span className="font-bold">0</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">Need Security Assessment?</h3>
                <p className="text-sm mb-4 opacity-90">Let's secure your digital assets</p>
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-2 bg-white text-red-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Request Assessment
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

export default CybersecurityServices;