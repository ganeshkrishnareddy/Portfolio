import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Smartphone, TrendingUp, Briefcase, ArrowRight, Users, Globe, Zap } from 'lucide-react';

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
    <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-700 transform hover:-translate-y-2">
      <div className="mb-6 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 p-4 rounded-full w-max group-hover:scale-110 transition-transform">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={handleLearnMore}
        className="flex items-center text-teal-600 dark:text-teal-400 font-semibold group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors hover:gap-3"
      >
        <span>Learn More</span>
        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
        "Responsive Design & Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "Performance Optimization"
      ],
      path: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Cross-platform mobile and desktop applications designed to solve real-world problems with intuitive interfaces and robust functionality.",
      icon: <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      features: [
        "Cross-Platform Mobile Apps",
        "Desktop Applications",
        "API Integration",
        "User Experience Design"
      ],
      path: "/services/app-development"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to enhance your online presence, drive traffic, and convert visitors into customers.",
      icon: <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting"
      ],
      path: "/services/digital-marketing"
    },
    {
      title: "Business Solutions",
      description: "Custom software solutions and automation tools designed to streamline operations, increase efficiency, and drive business growth.",
      icon: <Briefcase className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
      features: [
        "Process Automation",
        "Custom Software Development",
        "System Integration",
        "Data Analytics Solutions"
      ],
      path: "/services/business-solutions"
    }
  ];

  const stats = [
    { number: "200+", label: "Satisfied Clients", icon: <Users className="h-6 w-6" /> },
    { number: "25+", label: "Websites Delivered", icon: <Globe className="h-6 w-6" /> },
    { number: "3+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Professional <span className="text-teal-600 dark:text-teal-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Comprehensive digital solutions through ProgVision, my freelance agency. From web development to digital marketing, 
            I help businesses establish and grow their online presence with cutting-edge technology and strategic insights.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
                <div className="text-teal-600 dark:text-teal-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;