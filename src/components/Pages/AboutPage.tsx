import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import About from '../About';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;