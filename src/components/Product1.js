import React from 'react';
import styled from 'styled-components';

const ProductsCSS = styled.div`
  width: 96%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Product1 = () => {
  return (
    <ProductsCSS>
      <div className="product">
        <div className="product__image" />

        <div className="product__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            delectus placeat deleniti, rerum maiores temporibus, velit possimus
            deserunt minima. Quia tempore, officiis aspernatur molestiae
            suscipit voluptatum provident, illum temporibus dolorem!
          </p>

          <ul className="product__content">
            <li>Item #1</li>
            <li>Item #2</li>
            <li>Item #3</li>
          </ul>

          <a href="#">
            <div className="product__buyButton">purchase now!</div>
          </a>
        </div>
      </div>
    </ProductsCSS>
  );
};

export default Product1;
