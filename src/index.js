import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './css/global.css';
import App from './App';

//this is what the browser reads first:::
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	 document.getElementById('root')
);
