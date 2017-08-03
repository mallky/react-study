export const  ADD_TODO = 'ADD_TODO';
export const  REMOVE_TODO = 'REMOVE_TODO';
export const  DONE_TODO = 'DONE_TODO';
export const  ONCHANGE_VALUE = 'ONCHANGE_VALUE';
export const  ONSUBMIT_VALUE = 'ONSUBMIT_VALUE';
export const  PREV_STATE = 'PREV_STATE';
export const  NEXT_STATE = 'NEXT_STATE';

export function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
}

export function removeTodo(index) {
    return {
      type: REMOVE_TODO,
      index
    }
}

export function doneTodo(index) {
    return {
      type: DONE_TODO,
      index
    }
}

export function prevState(index) {
    return {
      type: PREV_STATE,
      index
    }
}

export function nextState(index) {
    return {
      type: NEXT_STATE,
      index
    }
}

export function onChangeValue(value) {
    return {
      type: ONCHANGE_VALUE,
      value
    }
}

export function onSubmitValue() {
    return {
      type: ONSUBMIT_VALUE
    }
}