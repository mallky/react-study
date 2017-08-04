import React, { Component } from 'react';
import './Footer.css';

function day(n) {
  switch (n){
    case 1:
      return 'monday';
    case 2:
      return 'tuesday';
    case 3:
      return 'wednesday';
    case 4:
      return 'thursday';
    case 5:
      return 'friday';
    case 6:
      return 'saturday';
    case 0:
      return 'sunday';
    default:
      return 'MISTAKE';
  }
}
function minutes(n) {
  return n < 10 ? '0' + n : n;
}


class ClearBttn extends Component{
  constructor(props){
    super(props);

    this.handlerClearLocalStorage = this.handlerClearLocalStorage.bind(this);
  }

  handlerClearLocalStorage() {
    localStorage.clear();
  }

  render() {
    return <div>
      <button className="clear-bttn" onClick={this.handlerClearLocalStorage}>
        Clear saved data
      </button>
    </div>;
  }
}

class Clock extends Component {
  render () {
    return (
      <div id="date">
        <div>
          Today is { day(this.props.date.getDay()) }
        </div>
        <div>
          { this.props.date.getHours() }:{ minutes(this.props.date.getMinutes()) }:{ minutes(this.props.date.getSeconds()) }
        </div>
      </div>
    );
  };
}

class Footer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="footer">
        <Clock date={this.state.date}/>
        <ClearBttn />
      </div>
    );
  }
}

export default Footer;

