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
    nextState = initState.todos,
    localStateStore = [initState.todos],
    counterPrev = 0,
    stateStoreLength = 0;

function todoApp(state = initState, action) {
    switch (action.type) {

      case ADD_TODO:
        nextState = state.todos.slice();
        if (action.text) {
          nextState.push(
            {
              text: action.text,
              completed: false,
              removed: false
            } );
        }
        localStateStore.push(nextState);
        return {...state, todos: nextState};



      case DONE_TODO:
        nextState = state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        });
        localStateStore.push(nextState);
        return {...state, todos: nextState};



      case REMOVE_TODO:
        nextState = state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              removed: true
            });
          }
          return todo;
        });
        localStateStore.push(nextState);
        return {...state, todos: nextState};



      case PREV_STATE:
        stateStoreLength = localStateStore.length - 1;
        if ( counterPrev < stateStoreLength ) {
          counterPrev += 1;
        }
        prevState = localStateStore[ stateStoreLength - counterPrev ];
        return {...state, todos: prevState};



      case NEXT_STATE:
        stateStoreLength = localStateStore.length - 1;
        if ( counterPrev > 0 ) {
          counterPrev -= 1;
        }
        nextState = localStateStore[ stateStoreLength - counterPrev ];
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