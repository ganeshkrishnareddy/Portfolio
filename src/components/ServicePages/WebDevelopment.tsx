import React from 'react';
import { Code, Palette, Shield, Zap, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';

interface ServicePageProps {
  onBack: () => void;
}

const WebDevelopment: React.FC<ServicePageProps> = ({ onBack }) => {
  const offerings = [
    {
      title: "Custom Website Development",
      description: "Tailored websites built from scratch to match your brand and business requirements"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and order processing"
    },
    {
      title: "Content Management Systems",
      description: "Easy-to-use CMS solutions that allow you to update content without technical knowledge"
    },
    {
      title: "Web Application Development",
      description: "Interactive web applications with complex functionality and database integration"
    },
    {
      title: "Website Redesign & Modernization",
      description: "Transform outdated websites into modern, responsive, and high-performing platforms"
    },
    {
      title: "Performance Optimization",
      description: "Speed optimization, SEO improvements, and technical enhancements for better user experience"
    }
  ];

  const benefits = [
    "Increased online visibility and brand recognition",
    "Higher conversion rates and customer engagement",
    "Mobile-responsive design for all devices",
    "Search engine optimized for better rankings",
    "Secure and reliable hosting solutions",
    "Ongoing maintenance and support"
  ];

  const technologies = [
    "React.js & Next.js", "Node.js & Express", "HTML5 & CSS3", "JavaScript & TypeScript",
    "WordPress & WooCommerce", "MySQL & MongoDB", "Tailwind CSS", "Git & GitHub"
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-full mb-6">
            <Code className="h-10 w-10 text-teal-600 dark:text-teal-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Web Development <span className="text-teal-600 dark:text-teal-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Transform your digital presence with custom web solutions that combine cutting-edge technology, 
            stunning design, and exceptional user experience to drive your business forward.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Palette className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3" />
                Crafting Digital Experiences
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                I specialize in creating modern, responsive websites that not only look stunning but also perform exceptionally. 
                With expertise in both frontend and backend development, I deliver complete web solutions that help businesses 
                establish a strong online presence and achieve their digital goals.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Every project is approached with meticulous attention to detail, ensuring your website is optimized for 
                performance, security, and search engines while providing an intuitive user experience across all devices.
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
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
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
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-xl text-white text-center">
              <h3 className="text-lg font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-sm mb-4 opacity-90">Let's discuss your web development needs</p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-2 bg-white text-teal-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Contact Me
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;