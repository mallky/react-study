import React, { Component } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import MainBlock from './main-block/MainBlock';
import Admin from './Admin/Admin';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    console.log(window.location.hash);
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    })
  }

  render() {
    let Child;

    switch (this.state.route) {
      case '/admin' :
        Child = Admin;
        break;
      case '/main' :
        Child = MainBlock;
        break;
      default :
        Child = MainBlock;
    }

    return (
      <div className="App">
        <Header />
        <Child />
        <Footer />
      </div>
    );
  }
}

export default App;
