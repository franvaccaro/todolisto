/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/prefer-default-export
export const addTodo = (todo) => (dispatch, getState) => {
  const { todoArr } = getState();
  // eslint-disable-next-line no-unused-expressions
  todoArr.todos.filter((thisTodo) => thisTodo.task === todo).length === 0
    ? todoArr.todos.length < 10
      ? dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Date.now(),
          task: todo,
          checked: false,
        },
      }) : dispatch({
        type: 'SET_ALERT',
        payload: {
          message: 'You can only add 10 tasks.',
          severity: 'warning',
        },
      })
    : dispatch({
      type: 'SET_ALERT',
      payload: {
        message: 'You already added this task.',
        severity: 'warning',
      },
    });
};
