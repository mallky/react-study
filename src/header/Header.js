import React, { Component } from 'react';
import './Header.css';

const user = {
  name: 'Makar',
  lastName: 'Kuzmichev'
};

function Welcome (user) {
  return <div>Hello, {user.name}!</div>;
}

function Greatings(props) {
  if (props.isToggleOn) {
    return (
      <Welcome name={user.name}/>
    );
  }
  else {
    return null;
  }
}

class ButtonLogIn extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Log in</button>
    );
  }
}
class ButtonLogOut extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Log out</button>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {isToggleOn: false};

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let button = null;

    if (this.state.isToggleOn) {
      button = <ButtonLogOut onClick={this.handler}/>;
    }
    else {
      button = <ButtonLogIn onClick={this.handler}/>;
    }

    return (
      <div className="toggle">
        <Greatings isToggleOn={this.state.isToggleOn}/>
        {button}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Scheduler</h1>
        <Login />
      </div>
    );
  }
}

export default Header;
