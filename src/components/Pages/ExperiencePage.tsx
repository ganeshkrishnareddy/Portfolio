import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Experience from '../Experience';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;