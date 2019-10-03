import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../constants';

export function* createTodo(action) {
  try {
    const todo = { text: action.text, completed: false, dateCreated: Date.now() };
    yield put({ type: types.ADDED_TODO, todo });
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

export function* watchAddToDo() {
  yield takeEvery(types.ADD_TODO, createTodo)
}

export function* editTodo({ id, text }) {
  try {
    yield put({ type: types.EDITED_TODO, id, text })
  } catch (error) {
    console.log('editTodo Error:', error.message);
  }
}

export function* watchEditTodo() {
  yield takeEvery(types.EDIT_TODO, editTodo)
}
