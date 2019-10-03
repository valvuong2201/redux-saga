import * as types from '../constants';

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    text
  }
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id,
    text
  }
}

export function completeTodo(id) {
  return {
    type: types.COMPLETE_TODO,
    id
  }
}

export function completeAll() {
  return {
    type: types.COMPLETE_ALL
  }
}

export function clearCompleted() {
  return {
    type: types.CLEAR_COMPLETED
  }
}

export function allTodos(todos) {
  return {
    type: types.ALL_TODOS,
    todos
  }
}

export function loadTodos() {
  return (dispatch) => {
    fetch('/api/todos').then(
      response => response.json().then(todos => ({ todos, response }))
    ).then(({ todos, response }) => {
      if (response.ok) {
        dispatch(allTodos(todos.todos));
      } else {
        dispatch(allTodos([]));
      }
    });
  }
}