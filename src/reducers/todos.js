import { ADDED_TODO, DELETE_TODO, EDITED_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, ALL_TODOS } from '../constants';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADDED_TODO:
      if (action.todo) {
        let todo = action.todo;
        return [
          {
            id: state.length+1,
            text: todo.text,
            completed: todo.completed,
            dateCreated: todo.dateCreated
          },
          ...state
        ];
      } else {
        return state;
      }

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDITED_TODO:
      return state.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, { text: action.text }) : todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo
      );

    case COMPLETE_ALL:
      return state.map(todo => Object.assign({}, todo, { completed: true }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    case ALL_TODOS:
      return [
        ...action.todos,
        ...state
      ];

    default:
      return state;
  }
}
