import { ADD_TODO, DONE_TODO } from '../actions/actions'
const initState = {
   todos: ['Wake up!', 'Eat breakfast!', 'Go sleep!']
};

function todoApp(state = initState, action) {
    switch (action.type) {

      case ADD_TODO:
        const arr = state.todos.slice();
        if (action.text) {
          arr.push(action.text);
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

      default:
        return state;
    }
}

export default todoApp;