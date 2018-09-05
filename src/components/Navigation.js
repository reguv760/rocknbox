import React from 'react';
import './Navigation.css';

const Navigation = () =>
{
  return (  	
  	<nav>
		<div class="logo"></div>

		<div class="newsletter">
			<h2>newsletter</h2>
		</div>

		<ul class="menu">
			<li><a>Link #1</a></li>
			<li><a href="#products">products</a></li>
			<li><a href="#FAQ">FAQ</a></li>
			<li><a>Link #4</a></li>
			<li><a>Link #5</a></li>
		</ul>
	</nav>
  );
}
export default Navigation;