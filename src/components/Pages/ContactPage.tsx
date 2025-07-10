import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;