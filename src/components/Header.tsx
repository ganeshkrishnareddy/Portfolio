import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, Github, Linkedin, Mail, Code, Users, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'services', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Web Development",
      icon: <Code className="h-5 w-5" />,
      path: "/services/web-development"
    },
    {
      title: "App Development", 
      icon: <Users className="h-5 w-5" />,
      path: "/services/app-development"
    },
    {
      title: "Digital Marketing",
      icon: <Users className="h-5 w-5" />,
      path: "/services/digital-marketing"
    },
    {
      title: "Business Solutions",
      icon: <Briefcase className="h-5 w-5" />,
      path: "/services/business-solutions"
    }
  ];

  const navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Education', link: '#education' },
    { name: 'Contact', link: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, link: 'https://github.com/ganeshkrishnareddy', ariaLabel: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, link: 'https://linkedin.com/in/pganeshkrishnareddy', ariaLabel: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, link: 'mailto:pganeshkrishnareddy@gmail.com', ariaLabel: 'Email' },
  ];

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        scrollToSection(link);
      }, 100);
    } else {
      // If on home page, scroll directly
      scrollToSection(link);
    }
  };

  const scrollToSection = (link: string) => {
    const targetId = link.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleServiceNavigation = (path: string) => {
    setShowServices(false);
    navigate(path);
  };

  const isServicePage = location.pathname.startsWith('/services/');

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavClick('#home')}
            className="text-xl font-bold text-slate-800 dark:text-white transition-colors hover:text-teal-600 dark:hover:text-teal-400"
          >
            <span className="text-teal-600">Ganesh</span>Krishna
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((navLink) => (
              <button
                key={navLink.name}
                onClick={() => handleNavClick(navLink.link)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeSection === navLink.link.replace('#', '') && !isServicePage
                    ? 'text-teal-600 dark:text-teal-400 font-medium'
                    : 'text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400'
                }`}
              >
                {navLink.name}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                className="px-4 py-2 text-sm text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors"
              >
                Service Pages
              </button>
              
              {showServices && (
                <div
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                  className="absolute top-full left-0 w-48 py-2 mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceNavigation(service.path)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
                    >
                      {service.icon}
                      {service.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex gap-4 items-center">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((navLink) => (
              <button
                key={navLink.name}
                onClick={() => handleNavClick(navLink.link)}
                className={`px-4 py-2 text-left transition-colors ${
                  activeSection === navLink.link.replace('#', '') && !isServicePage
                    ? 'text-teal-600 dark:text-teal-400 font-medium'
                    : 'text-slate-800 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400'
                }`}
              >
                {navLink.name}
              </button>
            ))}
            
            {/* Services in Mobile Menu */}
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-slate-400 mb-2">Service Pages</p>
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceNavigation(service.path)}
                  className="flex items-center gap-2 w-full py-2 text-slate-800 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 transition-colors text-left"
                >
                  {service.icon}
                  {service.title}
                </button>
              ))}
            </div>
          </nav>
          
          {/* Social Links - Mobile */}
          <div className="flex gap-6 mt-4 px-4 py-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;