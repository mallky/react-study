import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {value: ''};
  }

  handleSubmit(e) {
    this.props.addTodos(this.state.value);
    this.setState({value: ''});
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    const value = this.state.value;

    return (
      <div className="text-area">
        <form onSubmit={this.handleSubmit}>
          <label>Write what you want to do today:</label>
          <textarea value={value} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TextArea;