import React, { Component } from 'react';
import Favicon from 'react-favicon';
import rocknboxFavIcon from './assets/favicon/favicon.ico';
import Navigation from './components/Navigation';
import Container from './components/Container';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  //this is the main index page:::
  //create main structure here:::
  render() {
    return (
      <div className="mainContainer">
        <Favicon url={rocknboxFavIcon} />
        <Navigation />

        <Container />

        <Footer />
      </div>
    );
  }
}

export default App;
