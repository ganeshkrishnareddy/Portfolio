import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Search, Users, Zap, CheckCircle, ArrowLeft, ExternalLink, BarChart, Globe } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const MarketingSEO: React.FC = () => {
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
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and ranking on search engines with proven SEO strategies"
    },
    {
      title: "Content Marketing Strategy",
      description: "Create engaging content that attracts, educates, and converts your target audience"
    },
    {
      title: "Social Media Management",
      description: "Build and manage your social media presence across all major platforms"
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted advertising campaigns on Google Ads, Facebook, and other platforms"
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Comprehensive tracking and reporting to measure and optimize your marketing ROI"
    },
    {
      title: "Local SEO & Business Listings",
      description: "Optimize your local presence and improve visibility in local search results"
    }
  ];

  const benefits = [
    "Increased organic traffic and search rankings",
    "Higher conversion rates and lead generation",
    "Enhanced brand visibility and recognition",
    "Improved customer engagement and retention",
    "Data-driven insights and optimization",
    "Cost-effective marketing solutions"
  ];

  const tools = [
    "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", 
    "Google Ads", "Facebook Ads", "Mailchimp", "Hootsuite", "Canva", "WordPress"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
              <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Marketing & SEO <span className="text-blue-600 dark:text-blue-400">Services</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Boost your online presence and drive business growth with comprehensive digital marketing strategies, 
              search engine optimization, and data-driven campaigns that deliver measurable results.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  Data-Driven Marketing Solutions
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  I help businesses grow their online presence through strategic digital marketing and SEO optimization. 
                  My approach combines technical SEO expertise with creative content strategies to drive organic traffic, 
                  improve search rankings, and increase conversions.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every campaign is backed by comprehensive analytics and continuous optimization to ensure maximum ROI 
                  and sustainable growth for your business in the competitive digital landscape.
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
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Marketing Benefits
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

              {/* Tools */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                  <Search className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white text-center">
                <h3 className="text-lg font-bold mb-2">Ready to Grow Your Business?</h3>
                <p className="text-sm mb-4 opacity-90">Let's discuss your marketing goals</p>
                <button 
                  onClick={handleContactClick}
                  className="inline-flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
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

export default MarketingSEO;