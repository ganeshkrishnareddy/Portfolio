import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Projects from '../Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;