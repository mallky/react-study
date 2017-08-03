import React, { Component } from 'react';

class DoneBttn extends Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.addClassToTodo(this.props.index);
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
  }

  handleSubmit() {
    this.props.removeTodo(this.props.index);
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
      <DoneBttn 
        addClassToTodo={props.addClassToTodo}
        index={props.index}
      />
      <RemoveBttn 
        removeTodo={props.removeTodo}
        index={props.index}
      />
    </div>
  );
}

function TodoText(props) {
  return (
    <div className={ props.completed ? 'todo-text active' : 'todo-text'}>
      { props.quiz + '' }
    </div>
  );
}

class ToDoItem extends Component{

  render() {
    if (this.props.removed){
      return null;
    }
    else {
      return (
        <li key={this.props.quiz + ''}>
          <div className="todo">
            <TodoText
              completed={this.props.completed}
              quiz={this.props.quiz}
            />
            <ControlButtonsTodo
              addClassToTodo={this.props.addClassToTodo}
              index={this.props.index}
              removeTodo={this.props.removeTodo}
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
      <ToDoItem 
        quiz={item.text}
        completed={item.completed}
        removed={item.removed}
        key={index}
        index={index}
        addClassToTodo={this.props.addClassToTodo}
        removeTodo={this.props.removeTodo}
      />
    );

    return (
      <div className="todo-list">
        <ol>
          {list}
        </ol>
      </div>
    );
  }
}

export default ToDoList;