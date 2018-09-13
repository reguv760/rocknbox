import React from 'react';
import Products from './Products.js';
import About from './About.js';
import Contact from './Contact.js';
import Faq from './Faq.js';
import './MainContent.css';

const MainContent = () => {
  return (
    <div class="container">
      <section className="currentTheme" />

      <Products />
      <Faq />
      <About />
      <Contact />
    </div>
  );
};

export default MainContent;
