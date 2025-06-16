import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import WebDevelopment from './components/ServicePages/WebDevelopment';
import AppDevelopment from './components/ServicePages/AppDevelopment';
import DigitalMarketing from './components/ServicePages/DigitalMarketing';
import BusinessSolutions from './components/ServicePages/BusinessSolutions';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  
  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Update the document title
    document.title = "Ganesh Krishna Reddy - Portfolio";
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleServiceClick = (service: string) => {
    setCurrentView(service);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'web-development':
        return <WebDevelopment onBack={handleBackToHome} />;
      case 'app-development':
        return <AppDevelopment onBack={handleBackToHome} />;
      case 'digital-marketing':
        return <DigitalMarketing onBack={handleBackToHome} />;
      case 'business-solutions':
        return <BusinessSolutions onBack={handleBackToHome} />;
      default:
        return (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Services onServiceClick={handleServiceClick} />
              <Education />
              <Contact />
            </main>
            <Footer />
          </>
        );
    }
  };
  
  return (
    <div className="antialiased text-slate-800 dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      
      {renderCurrentView()}
    </div>
  );
}

export default App