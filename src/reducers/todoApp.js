import { ADD_TODO, DONE_TODO } from '../actions/actions'
const initState = {
  todo: []
};

function todoApp(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text
                    }
                ]
            });
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