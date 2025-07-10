import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Services from '../Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;