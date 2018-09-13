import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Container from './components/Container';
import Footer from './components/Footer';
//import './css/App.css';

class App extends Component {
  //this is the main index page:::
  //create main structure here:::
  render() {
    return (
      <div className="mainContainer">
        <Navigation />

        <Container />

        <Footer />
      </div>
    );
  }
}

export default App;
