import React from 'react';

//pages
import Products from './Products.js';
import About from './About.js';
import Contact from './Contact.js';
import Faq from './Faq.js';

//css
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="container">
      <section className="currentTheme" />

      <Products />
      <Faq />
      <About />
      <Contact />
    </div>
  );
};

export default MainContent;
