import React, {Component} from 'react';
import './PrevNextButtons.css';

class PrevNextButtons extends Component {
  constructor(props) {
    super(props);

    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
  }

  handlerPrev() {
    this.props.toPrevState();
  }

  handlerNext() {
    this.props.toNextState();
  }

  render() {
    return (
      <div className="form-buttons">
        <button className="prev" onClick={this.handlerPrev}>Previous state</button>
        <button className="next" onClick={this.handlerNext}>Next state</button>
      </div>
    );
  }
}

export default PrevNextButtons;