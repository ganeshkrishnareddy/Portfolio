import React from 'react';
import { Code, Users, Briefcase, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full w-max mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <ChevronRight className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600 dark:text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Menu: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom website development tailored to your business needs",
      icon: <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      features: [
        "Responsive website design",
        "E-commerce solutions",
        "Content Management Systems",
        "Website maintenance and updates"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      icon: <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics and Reporting"
      ]
    },
    {
      title: "Business Solutions",
      description: "Custom software solutions to streamline your business operations",
      icon: <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      features: [
        "Process Automation",
        "Data Collection Tools",
        "Custom Scripts Development",
        "System Integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-teal-600 dark:text-teal-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Professional services offered through ProgVision to help businesses establish and enhance their digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;