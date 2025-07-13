import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import CybersecurityServices from './components/ServicePages/CybersecurityServices';
import AboutPage from './components/Pages/AboutPage';
import SkillsPage from './components/Pages/SkillsPage';
import ExperiencePage from './components/Pages/ExperiencePage';
import ServicesPage from './components/Pages/ServicesPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import EducationPage from './components/Pages/EducationPage';
import ContactPage from './components/Pages/ContactPage';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Update the document title
    document.title = "Ganesh Krishna Reddy - Portfolio";
  }, []);
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
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

  // Main portfolio page component
  const MainPortfolio = () => (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
  
  return (
    <div className="antialiased text-slate-800 dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
      </Routes>
    </div>
  );
}

export default App