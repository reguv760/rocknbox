import React from 'react';
import styled from 'styled-components';

const ProductsCSS = styled.div`
  width: 96%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TheProductCSS = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 92%;
  margin: 4rem auto;
  background-color: blue;
  min-height: 25rem;
  border-radius: 0.5rem;
`;

const ProductIMG = styled.div`
  width: 40rem;
  height: 25rem;
  margin: 1rem;
  background-color: #993300;
`;

const ProductsDesc = styled.div`
  padding: 1rem;
  font-size: 1.6rem;
  line-height: 1.4em;
  width: 100%;
  height: 100%;
  color: #eee;
`;

const ProductBuyButton = styled.div`
  color: #eee;
  background-color: #d90287;
  border-radius: 0.5rem;
  width: 12rem;
  margin: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.025em;
`;

const Product3 = () => {
  return (
    <ProductsCSS>
      <TheProductCSS>
        <ProductIMG />
        <ProductsDesc>
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
            <li>Item #4</li>
            <li>Item #5</li>
            <li>Item #6</li>
            <li className="exclusive">Item #7</li>
          </ul>

          <a href="#">
            <ProductBuyButton>purchase now!</ProductBuyButton>
          </a>
        </ProductsDesc>
      </TheProductCSS>
    </ProductsCSS>
  );
};

export default Product3;
