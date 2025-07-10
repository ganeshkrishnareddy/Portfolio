import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Skills from '../Skills';

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;