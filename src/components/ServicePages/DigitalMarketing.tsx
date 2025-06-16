import React from 'react';
import { TrendingUp, Target, BarChart3, Zap, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';

interface ServicePageProps {
  onBack: () => void;
}

const DigitalMarketing: React.FC<ServicePageProps> = ({ onBack }) => {
  const offerings = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and ranking on search engines to drive organic traffic"
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across all major social platforms"
    },
    {
      title: "Content Strategy & Creation",
      description: "Develop compelling content that resonates with your audience and drives conversions"
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted advertising campaigns that maximize ROI and drive qualified leads"
    },
    {
      title: "Email Marketing Campaigns",
      description: "Nurture leads and maintain customer relationships through strategic email marketing"
    },
    {
      title: "Analytics & Performance Tracking",
      description: "Comprehensive reporting and insights to measure and optimize marketing performance"
    }
  ];

  const benefits = [
    "Increased brand visibility and recognition",
    "Higher quality leads and conversions",
    "Improved customer engagement and loyalty",
    "Better return on marketing investment",
    "Data-driven insights for strategic decisions",
    "Competitive advantage in your market"
  ];

  const tools = [
    "Google Analytics", "Google Ads", "Facebook Ads", "SEMrush", 
    "Mailchimp", "Hootsuite", "Canva", "WordPress"
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-6">
            <TrendingUp className="h-10 w-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Digital Marketing <span className="text-purple-600 dark:text-purple-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Amplify your brand's reach and drive meaningful growth with strategic digital marketing campaigns 
            that connect with your audience and deliver measurable results.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Target className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
                Strategic Digital Growth
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                I help businesses navigate the digital landscape with comprehensive marketing strategies that drive 
                real results. From increasing online visibility to converting visitors into loyal customers, 
                my approach combines creativity with data-driven insights to maximize your marketing ROI.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Every marketing campaign is tailored to your specific business goals, target audience, and industry. 
                I focus on building sustainable growth through authentic engagement, valuable content, and strategic 
                positioning that sets your brand apart from the competition.
              </p>
            </div>

            {/* Offerings */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Marketing Services</h2>
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                Marketing Benefits
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                Marketing Tools
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white text-center">
              <h3 className="text-lg font-bold mb-2">Ready to Grow?</h3>
              <p className="text-sm mb-4 opacity-90">Let's create a winning marketing strategy</p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Get Started
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;