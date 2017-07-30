import React, { Component } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainBlock from './main-block/MainBlock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainBlock />
        <Footer />
      </div>
    );
  }
}

export default App;
