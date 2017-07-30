export const  ADD_TODO = 'ADD_TODO';
export const  REMOVE_TODO = 'REMOVE_TODO';
export const  DONE_TODO = 'DONE_TODO';

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function removeTodo(text) {
    return { type: REMOVE_TODO, text }
}

export function doneTodo(text) {
    return { type: DONE_TODO, text }
}



