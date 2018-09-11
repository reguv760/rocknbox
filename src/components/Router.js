import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './../App';

//setup multi-page website
//Step 2a: Load App (designed site) in <BrowserRouter>

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Router;
