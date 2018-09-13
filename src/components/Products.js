import React from 'react';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="products">
      <h2>AVAILABLE BOXES</h2>

      <Product1 />
      <Product2 />
      <Product3 />
    </section>
  );
};

export default Products;
