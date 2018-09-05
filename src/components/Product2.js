import React from 'react';
import styled from 'styled-components';
import './Products.css';

const ProductsCSS = styled.div`
	width:96%;
	margin:0 auto;
	padding:2rem 0;
`

const TheProductCSS = styled.div`
	display:flex;
	flex-flow:row nowrap;
	width:92%;
	margin:4rem auto;
	background-color:blue;
	min-height:25rem;
`

const ProductIMG = styled.div`
	width:40rem;
	height:25rem;
	margin:1rem;
	background-color:#993300;
`

const ProductsDesc = styled.div`
	padding:1rem;
	font-size:1.6rem;
	line-height: 1.4em;
	width:100%;
	height:100%;
	background-color:#3399cc;
`

const Product2 = () =>
{
  return (
	<ProductsCSS>
  		<TheProductCSS>
			<ProductIMG></ProductIMG>
			<ProductsDesc>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto delectus placeat deleniti, rerum maiores temporibus, velit possimus deserunt minima. Quia tempore, officiis aspernatur molestiae suscipit voluptatum provident, illum temporibus dolorem!</p>

				<ul className="product__content">
					<li>Item #1</li>
					<li>Item #2</li>
					<li>Item #3</li>
					<li>Item #4</li>
					<li>Item #5</li>
				</ul>

				<a href="#"><div className="product__buyButton">purchase now!</div></a>

			</ProductsDesc>
		</TheProductCSS>
	</ProductsCSS>
  );
}

export default Product2