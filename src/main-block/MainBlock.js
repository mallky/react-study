import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodo} from '../actions/actions';
import ToDoList from './left-form/List';
import TextArea from './right-form/Form';
import './MainBlock.css';

class MainBlock extends Component {
  render() {
    return (
      <div className="mainSection">
        <ToDoList
          quiz={this.props.todos}
        />
        <TextArea
          addTodos={this.props.addTodos}
        />
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    todos: state.todos
  }
};

var mapDispatchToProps = function (dispatch) {
  return {
    addTodos: bindActionCreators(addTodo, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainBlock);