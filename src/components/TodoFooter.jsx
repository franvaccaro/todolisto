import React from 'react';
import '../App.css';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

function TodoFooter() {
  const todoArr = useSelector((state) => state.todoArr);
  const dispatch = useDispatch();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      className="todoFilter"
    >
      <Grid item alignSelf="center" sx={{ pl: 2 }}>
        {todoArr.todos.length}
        {' '}
        {todoArr.todos.length > 1 ? 'tasks' : 'task'}
        {' '}
        left
      </Grid>
      <Grid item alignSelf="center" sx={{ pr: 0 }}>
        <button
          type="button"
          className="clearBtn"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Clear All
        </button>
      </Grid>
    </Grid>
  );
}

export default TodoFooter;
