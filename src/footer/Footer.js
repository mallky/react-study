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
function ChangedSentence(val) {
  if (+val % 2 === 0) {
   return <div className="text">Divisible by 2</div>
  }
  else {
    return <div className="text">Not divisible by 2!</div>
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

const element = React.createElement(
  'div',
  {className: 'greeting'},
  'Hello, world!'
);

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
        {ChangedSentence(this.state.date.getMinutes())}
        {element}
        <Clock date={this.state.date}/>
      </div>
    );
  }
}

export default Footer;

