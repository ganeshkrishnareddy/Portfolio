import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, X, Github, Linkedin, Mail, Code, Users, Briefcase, Home, User, Award, Briefcase as BriefcaseIcon, FolderOpen, GraduationCap, MessageCircle, ChevronDown, Shield } from 'lucide-react';

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

  // Close mobile menu when clicking outside and handle body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent background scroll when menu is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const services = [
    {
      title: "Web Development",
      icon: <Code className="h-4 w-4" />,
      path: "/services/web-development"
    },
    {
      title: "Cybersecurity Services", 
      icon: <Shield className="h-4 w-4" />,
      path: "/services/cybersecurity"
    },
    {
      title: "Security Consulting",
      icon: <Users className="h-4 w-4" />,
      path: "/services/security-consulting"
    },
    {
      title: "Secure Development",
      icon: <Briefcase className="h-4 w-4" />,
      path: "/services/secure-development"
    }
  ];

  const navLinks = [
    { name: 'Home', link: '#home', route: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'About', link: '#about', route: '/about', icon: <User className="h-4 w-4" /> },
    { name: 'Skills', link: '#skills', route: '/skills', icon: <Award className="h-4 w-4" /> },
    { name: 'Experience', link: '#experience', route: '/experience', icon: <BriefcaseIcon className="h-4 w-4" /> },
    { name: 'Services', link: '#services', route: '/services', icon: <Code className="h-4 w-4" /> },
    { name: 'Projects', link: '#projects', route: '/projects', icon: <FolderOpen className="h-4 w-4" /> },
    { name: 'Education', link: '#education', route: '/education', icon: <GraduationCap className="h-4 w-4" /> },
    { name: 'Contact', link: '#contact', route: '/contact', icon: <MessageCircle className="h-4 w-4" /> },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, link: 'https://github.com/ganeshkrishnareddy', ariaLabel: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, link: 'https://linkedin.com/in/pganeshkrishnareddy', ariaLabel: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, link: 'mailto:pganeshkrishnareddy@gmail.com', ariaLabel: 'Email' },
  ];

  const handleNavClick = (link: string, route?: string) => {
    setIsOpen(false);
    
    // Check if we should navigate to a dedicated page
    if (route && route !== '/') {
      navigate(route);
    } else {
      // Handle home page navigation and scrolling
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToSection(link);
        }, 100);
      } else {
        scrollToSection(link);
      }
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
    setIsOpen(false);
    navigate(path);
  };

  const isServicePage = location.pathname.startsWith('/services/');

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => handleNavClick('#home')}
              className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white transition-colors hover:text-teal-600 dark:hover:text-teal-400 z-50"
            >
              <span className="text-teal-600">Ganesh</span>Krishna<span className="text-teal-600">Reddy</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-1">
              {navLinks.map((navLink) => (
                <button
                  key={navLink.name}
                  onClick={() => handleNavClick(navLink.link, navLink.route)}
                  className={`px-3 py-2 text-sm transition-colors rounded-md ${
                    (activeSection === navLink.link.replace('#', '') && location.pathname === '/') || location.pathname === navLink.route
                      ? 'text-teal-600 dark:text-teal-400 font-medium bg-teal-50 dark:bg-teal-900/30'
                      : 'text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
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
                  className="px-3 py-2 text-sm text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 flex items-center gap-1"
                >
                  Service Pages
                  <ChevronDown className="h-3 w-3" />
                </button>
                
                {showServices && (
                  <div
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                    className="absolute top-full left-0 w-48 py-2 mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700"
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
            <div className="hidden lg:flex gap-3 items-center">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="p-2 text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-slate-800 dark:text-white focus:outline-none p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-50 mobile-menu-container"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Portal - Fixed positioning */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Slide Panel */}
          <div
            className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] mobile-menu-container ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Menu</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-4">
                  {/* Main Navigation */}
                  <div className="space-y-1 mb-6">
                    {navLinks.map((navLink) => (
                      <button
                        key={navLink.name}
                        onClick={() => handleNavClick(navLink.link, navLink.route)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors rounded-lg ${
                          (activeSection === navLink.link.replace('#', '') && location.pathname === '/') || location.pathname === navLink.route
                            ? 'text-teal-600 dark:text-teal-400 font-medium bg-teal-50 dark:bg-teal-900/30'
                            : 'text-slate-800 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        {navLink.icon}
                        {navLink.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* Services Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-4 mb-3">
                      Service Pages
                    </h4>
                    <div className="space-y-1">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => handleServiceNavigation(service.path)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left rounded-lg"
                        >
                          {service.icon}
                          {service.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="border-t border-slate-200 dark:border-slate-700 p-6">
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.ariaLabel}
                      className="p-3 text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900/30"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;