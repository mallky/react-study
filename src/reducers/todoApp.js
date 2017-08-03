import { ADD_TODO, DONE_TODO, REMOVE_TODO, ONSUBMIT_VALUE, ONCHANGE_VALUE } from '../actions/actions'
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

function todoApp(state = initState, action) {
    switch (action.type) {

      case ADD_TODO:
        const arr = state.todos.slice();
        if (action.text) {
          arr.push(
            {
              text: action.text,
              completed: false,
              removed: false
            } );
        }
        return {...state, todos: arr};

      case DONE_TODO:
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              });
            }
            return todo;
          })
        });

      case REMOVE_TODO:
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                removed: true
              });
            }
            return todo;
          })
        });
      
      case ONCHANGE_VALUE:
        return {...state, value: action.value };
      
      case ONSUBMIT_VALUE:
        return {...state, value: '' };

      default:
        return state;
    }
}

export default todoApp;