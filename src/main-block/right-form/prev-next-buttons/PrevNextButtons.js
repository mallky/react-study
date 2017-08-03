import React, {Component} from 'react';
import './PrevNextButtons.css';

class PrevNextButtons extends Component {
  render() {
    return (
      <div className="form-buttons">
        <button className="prev">Previous state</button>
        <button className="next">Next state</button>
      </div>
    );
  }
}

export default PrevNextButtons;