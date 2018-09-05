import React from 'react';
import styled from 'styled-components';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import './Container.css';


const ContainerCSS = styled.div`
	display:flex;
	flex-flow: column nowrap;
	width:100%;
	margin:0 auto;
	min-height:140rem;
	background-color:#999;
`

const Container = () =>
{
  return (  	
  	<ContainerCSS>
	  	<div className="container">
			<section className="currentTheme">
			</section>

			
			<section id="products" className="products">

				<h2>AVAILABLE BOXES</h2>
				
				<Product1/>
				<Product2/>
				<Product3/>
				
			</section>

			<section id="FAQ" className="content">
				<h2>FAQ</h2>

				<div className="questionAnswer">
					<h3>Question #1?</h3>
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates non odit ab quos alias temporibus illum voluptatem perspiciatis error debitis? Sed sapiente facere et error, illum corrupti iusto neque. Ipsa.</blockquote>
				</div>

				<div className="questionAnswer">
					<h3>Question #2?</h3>
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates non odit ab quos alias temporibus illum voluptatem perspiciatis error debitis? Sed sapiente facere et error, illum corrupti iusto neque. Ipsa.</blockquote>
				</div>

				<div className="questionAnswer">
					<h3>Question #3?</h3>
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates non odit ab quos alias temporibus illum voluptatem perspiciatis error debitis? Sed sapiente facere et error, illum corrupti iusto neque. Ipsa.</blockquote>
				</div>

				<div className="questionAnswer">
					<h3>Question #4?</h3>
					<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates non odit ab quos alias temporibus illum voluptatem perspiciatis error debitis? Sed sapiente facere et error, illum corrupti iusto neque. Ipsa.</blockquote>
				</div>
			</section>
		</div>
	</ContainerCSS>
  );
}
export default Container;