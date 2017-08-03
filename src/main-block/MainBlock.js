import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodo} from '../actions/actions';
import {removeTodo} from '../actions/actions';
import {doneTodo} from '../actions/actions';
import {prevState} from '../actions/actions';
import {nextState} from '../actions/actions';
import {onChangeValue} from '../actions/actions';
import {onSubmitValue} from '../actions/actions';
import ToDoList from './left-form/List';
import TextArea from './right-form/Form';
import './MainBlock.css';

class MainBlock extends Component {
  render() {
    return (
      <div>
        <h2>What you need to do today:</h2>
        <div className="mainSection">
          <ToDoList
            quiz={this.props.todos}
            addClassToTodo={this.props.doneTodo}
            removeTodo={this.props.removeTodo}
          />
        <TextArea
          addTodos={this.props.addTodos}
          onChangeValue={this.props.onChangeValue}
          onSubmitValue={this.props.onSubmitValue}
          value={this.props.value}
        />
        </div>
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    todos: state.todos,
    value: state.value
  }
};

var mapDispatchToProps = function (dispatch) {
  return {
    addTodos: bindActionCreators(addTodo, dispatch),
    removeTodo: bindActionCreators(removeTodo, dispatch),
    doneTodo: bindActionCreators(doneTodo, dispatch),
    turnToPrevState: bindActionCreators(prevState, dispatch),
    turnToNextState: bindActionCreators(nextState, dispatch),
    onChangeValue: bindActionCreators(onChangeValue, dispatch),
    onSubmitValue: bindActionCreators(onSubmitValue, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainBlock);