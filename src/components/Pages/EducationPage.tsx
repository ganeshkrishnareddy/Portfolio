import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Education from '../Education';

const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <Education />
      </div>
      <Footer />
    </div>
  );
};

export default EducationPage;