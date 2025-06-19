import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:pganeshkrishnareddy@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Show success message
    alert('Thank you for your message! Your email client should open now. I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-teal-500" />,
      title: "Phone",
      details: "+91-8374622779",
      link: "tel:+918374622779",
      description: "Available Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: <Mail className="h-5 w-5 text-teal-500" />,
      title: "Email",
      details: "pganeshkrishnareddy@gmail.com",
      link: "mailto:pganeshkrishnareddy@gmail.com",
      description: "I respond within 24 hours"
    },
    {
      icon: <MapPin className="h-5 w-5 text-teal-500" />,
      title: "Location",
      details: "Punjab, India",
      link: null,
      description: "Available for remote work globally"
    }
  ];

  const quickActions = [
    {
      title: "Discovery Call",
      description: "Not sure where to start? Book a discovery call",
      icon: <Users className="h-6 w-6" />,
      link: "https://topmate.io/pganeshkrishnareddy",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Project Inquiry",
      description: "Have a project idea? Let's build it together!",
      icon: <MessageCircle className="h-6 w-6" />,
      link: "https://wa.me/918374622779?text=Hi%20I%20have%20a%20project%20inquiry",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Quick Chat",
      description: "Quick 1:1 Chat on WhatsApp",
      icon: <Send className="h-6 w-6" />,
      link: "https://wa.me/918374622779?text=Ganesh%2C%20let%27s%20have%20a%20quick%20discussion",
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Ready to collaborate? Whether you're looking for a cybersecurity expert, full-stack developer, 
            or need help with your digital transformation, I'm here to help bring your vision to life.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${action.color} text-white p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <div className="flex justify-center mb-4">
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-sm opacity-90">{action.description}</p>
            </a>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send me a message</h3>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
              <div className="flex items-center text-blue-700 dark:text-blue-300">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">
                  All messages are forwarded directly to: pganeshkrishnareddy@gmail.com
                </span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Job Opportunity / Project Inquiry / Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                  placeholder="Hello Ganesh, I would like to discuss..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors shadow-md flex items-center justify-center"
              >
                <span className="mr-2">Send Message</span>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-300 font-medium">{item.details}</p>
                    )}
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time Info */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-8">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                <h4 className="font-semibold text-slate-800 dark:text-white">Response Time</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>• <span className="font-medium">Email:</span> Within 24 hours</li>
                <li>• <span className="font-medium">Project Inquiries:</span> Same day response</li>
                <li>• <span className="font-medium">Urgent Matters:</span> Call directly for immediate assistance</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connect With Me</h4>
              
              <div className="grid grid-cols-4 gap-4">
                <a 
                  href="https://github.com/ganeshkrishnareddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-600 hover:bg-teal-100 dark:hover:bg-teal-900/30 p-3 rounded-full text-slate-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com/in/pganeshkrishnareddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-600 hover:bg-teal-100 dark:hover:bg-teal-900/30 p-3 rounded-full text-slate-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                
                <a 
                  href="https://x.com/_this_is_ganesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-200 dark:bg-slate-600 hover:bg-teal-100 dark:hover:bg-teal-900/30 p-3 rounded-full text-slate-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center justify-center"
                  aria-label="Twitter/X"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a 
                  href="mailto:pganeshkrishnareddy@gmail.com" 
                  className="bg-slate-200 dark:bg-slate-600 hover:bg-teal-100 dark:hover:bg-teal-900/30 p-3 rounded-full text-slate-700 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;