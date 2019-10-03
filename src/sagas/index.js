import { all } from "redux-saga/effects";
import { watchAddToDo, watchEditTodo } from "./todos";

export default function* rootSaga() {
  yield all([
    watchAddToDo(),
    watchEditTodo()
  ])
};