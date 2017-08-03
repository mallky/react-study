import React, { Component } from 'react';

class DoneBttn extends Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {done: false};
  }

  handleSubmit() {
    this.setState({done: !this.state.done});
    this.props.addClassToTodo();
  }

  render(){
    return (
      <button className="done" onClick={this.handleSubmit}>
        Done
      </button>
    );
  }
}

class RemoveBttn extends Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {remove: false};
  }

  handleSubmit() {
    this.setState({remove: true});
    this.props.removeTodo();
  }

  render(){
    return (
      <button className="remove" onClick={this.handleSubmit}>
        Remove
      </button>
    );
  }
}

function ControlButtonsTodo(props) {
  return (
    <div className="buttons-into-todo">
      <DoneBttn addClassToTodo={props.addClassToTodo}/>
      <RemoveBttn removeTodo={props.removeTodo}/>
    </div>
  );
}

function TodoText(props) {
  return (
    <div className={ props.active ? 'todo-text active' : 'todo-text'}>
      { props.quiz + '' }
    </div>
  );
}

class ToDoItem extends Component{
  constructor(props) {
    super(props);

    this.state = {active: false, remove: false};

    this.addClassToTodo = this.addClassToTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addClassToTodo() {
    this.setState({active: !this.state.active});
  }

  removeTodo() {
    this.setState({remove: true});
  }

  render() {
    if (this.state.remove){
      return null;
    }
    else {
      return (
        <li key={this.props.quiz + ''}>
          <div className="todo">
            <TodoText
              active={this.state.active}
              quiz={this.props.quiz}
            />
            <ControlButtonsTodo
              addClassToTodo={this.addClassToTodo}
              removeTodo={this.removeTodo}
            />
          </div>
        </li>
      );
    }
  }
}

class ToDoList extends Component{
  render() {
    const quiz = this.props.quiz;
    const list = quiz.map( (item, index) =>
      <ToDoItem quiz={item} key={index} index={index + 1} />
    );

    return (
      <div className="todo-list">
        <h2>What you need to do today:</h2>
        <ol>
          {list}
        </ol>
      </div>
    );
  }
}

export default ToDoList;