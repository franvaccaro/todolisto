const initialState = { todos: [] };

function todosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.task,
            checked: false,
          },
        ],
      };
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id
          ? { ...todo, checked: !todo.checked }
          : todo)),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default todosReducer;
