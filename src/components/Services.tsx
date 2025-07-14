import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Smartphone, TrendingUp, Briefcase, ArrowRight, Users, Globe, Zap, Star, Award, Shield, Search, Target, Lock, FileText } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features, path }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(path);
  };

  return (
    <div className="group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-700 transform hover:-translate-y-3 hover:scale-105">
      <div className="mb-4 sm:mb-6 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 p-3 sm:p-4 rounded-full w-max group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
      
      <ul className="space-y-2 mb-4 sm:mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
            <div className="mr-3 flex-shrink-0">
              {typeof feature === 'object' ? feature.icon : <div className="w-2 h-2 bg-teal-500 rounded-full"></div>}
            </div>
            <span className="text-xs sm:text-sm">{typeof feature === 'object' ? feature.text : feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={handleLearnMore}
        className="flex items-center text-teal-600 dark:text-teal-400 font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-all duration-300 hover:gap-3 text-sm sm:text-base group-hover:scale-105"
      >
        <span>Learn More</span>
        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </div>
  );
};

const Services: React.FC = () => {
const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies, focusing on performance, security, and user experience.",
    icon: <Code className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
    features: [
      { text: "Responsive Design & Development", icon: <Globe className="h-4 w-4 text-teal-500" /> },
      { text: "E-commerce Solutions", icon: <Code className="h-4 w-4 text-teal-500" /> },
      { text: "Content Management Systems", icon: <FileText className="h-4 w-4 text-teal-500" /> },
      { text: "Performance Optimization", icon: <Zap className="h-4 w-4 text-teal-500" /> }
    ],
    path: "/services/web-development"
  },
  {
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets, identify vulnerabilities, and ensure compliance with industry standards.",
    icon: <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />,
    features: [
      { text: "Web Application Security Audit", icon: <Search className="h-4 w-4 text-red-500" /> },
      { text: "Penetration Testing & Reporting", icon: <Target className="h-4 w-4 text-red-500" /> },
      { text: "Digital Forensics & Incident Response", icon: <Shield className="h-4 w-4 text-red-500" /> },
      { text: "Vulnerability Assessment", icon: <Lock className="h-4 w-4 text-red-500" /> }
    ],
    path: "/services/cybersecurity"
  },
  {
    title: "App Development",
    description: "Custom mobile applications for Android and iOS with modern frameworks, secure architecture, and seamless user experience.",
    icon: <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400" />,
    features: [
      { text: "Cross-Platform Development", icon: <Smartphone className="h-4 w-4 text-green-500" /> },
      { text: "Native iOS & Android Apps", icon: <Code className="h-4 w-4 text-green-500" /> },
      { text: "Backend API Integration", icon: <Zap className="h-4 w-4 text-green-500" /> },
      { text: "App Store Deployment", icon: <Globe className="h-4 w-4 text-green-500" /> }
    ],
    path: "/services/app-development"
  },
  {
    title: "Marketing Services with SEO",
    description: "Digital marketing strategies, search engine optimization, and online presence enhancement to grow your business visibility.",
    icon: <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    features: [
      { text: "Search Engine Optimization", icon: <Search className="h-4 w-4 text-blue-500" /> },
      { text: "Content Marketing Strategy", icon: <FileText className="h-4 w-4 text-blue-500" /> },
      { text: "Social Media Management", icon: <Users className="h-4 w-4 text-blue-500" /> },
      { text: "Analytics & Performance Tracking", icon: <TrendingUp className="h-4 w-4 text-blue-500" /> }
    ],
    path: "/services/marketing-seo"
  }
];

  const stats = [
    { number: "75+", label: "Projects Delivered", icon: <Users className="h-6 w-6" /> },
    { number: "20+", label: "Websites Built", icon: <Globe className="h-6 w-6" /> },
    { number: "3+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Comprehensive cybersecurity and full-stack development services to protect and build your digital infrastructure.
          </p>
        </div>

        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-xl text-white text-center mb-16">
          <div className="flex items-center justify-center mb-3">
            <Award className="h-6 w-6 mr-2" />
            <span className="font-semibold">Trusted by 75+ Clients Worldwide</span>
          </div>
          <p className="text-sm opacity-90">
            Delivering exceptional cybersecurity and development solutions with proven results
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
                <div className="text-teal-600 dark:text-teal-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              path={service.path}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-blue-600 p-8 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how I can help bring your vision to life with innovative solutions tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-teal-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
            <a 
              href="https://calendly.com/pganeshkrishnareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;