import { ADD_TODO, DONE_TODO, REMOVE_TODO, ONSUBMIT_VALUE, ONCHANGE_VALUE, PREV_STATE, NEXT_STATE } from '../actions/actions'
const initState = {
  todos: [ {
    text: 'Wake up!',
    completed: false,
    removed: false
  }, {
    text: 'Eat breakfast!',
    completed: false,
    removed: false
  }, {
    text: 'Go sleep!',
    completed: false,
    removed: false
  }],
  value: ''
};

let prevState = initState.todos,
  nextState = initState.todos;

function todoApp(state = initState, action) {
    switch (action.type) {

      case ADD_TODO:
        prevState = state.todos.slice();
        nextState = state.todos.slice();
        if (action.text) {
          nextState.push(
            {
              text: action.text,
              completed: false,
              removed: false
            } );
        }
        return {...state, todos: nextState};



      case DONE_TODO:
        prevState = state.todos.slice();
        nextState = state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }

          return todo;
        });
        return {...state, todos: nextState};



      case REMOVE_TODO:
        prevState = state.todos.slice();
        nextState = state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              removed: true
            });
          }
          return todo;
        });
        return {...state, todos: nextState};



      case PREV_STATE:
        return {...state, todos: prevState};



      case NEXT_STATE:
        return {...state, todos: nextState};



      case ONCHANGE_VALUE:
        return {...state, value: action.value };



      case ONSUBMIT_VALUE:
        return {...state, value: '' };

      default:
        return state;
    }
}

export default todoApp;