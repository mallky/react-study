export const  ADD_TODO = 'ADD_TODO';
export const  REMOVE_TODO = 'REMOVE_TODO';
export const  DONE_TODO = 'DONE_TODO';
export const  PREV_STATE = 'PREV_STATE';
export const  NEXT_STATE = 'NEXT_STATE';

export function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
}

export function removeTodo() {
    return {
      type: REMOVE_TODO,
      remove: true
    }
}

export function doneTodo(done) {
    return {
      type: DONE_TODO,
      done
    }
}

export function prevState(state) {
    return {
      type: PREV_STATE,
      state
    }
}

export function nextState(state) {
    return {
      type: NEXT_STATE,
      state
    }
}



