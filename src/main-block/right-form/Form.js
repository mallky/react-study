import React, { Component } from 'react';
import PrevNextButtons from './prev-next-buttons/PrevNextButtons';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    this.props.addTodos(this.props.value);
    this.props.onSubmitValue();
    e.preventDefault();
  }
  handleChange(e) {
    this.props.onChangeValue(e.target.value)
  }

  render() {
    const value = this.props.value;

    return (
      <div className="text-area">
        <form onSubmit={this.handleSubmit}>
          <label>Write what you want to do today:</label>
          <textarea value={value} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <PrevNextButtons 
          toPrevState={this.props.toPrevState}
          toNextState={this.props.toNextState}
        />
      </div>
    );
  }
}

export default TextArea;