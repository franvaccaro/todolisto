/* eslint-disable no-unused-expressions */
import '../App.css';
import {
  TextField, IconButton, InputAdornment, Grid, Stack, useMediaQuery,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/addTodoAction';
import logo from '../assets/logo_icon.svg';
import logoText from '../assets/logo_todolisto.svg';

function TodoForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleInput = (value) => {
    setTodo(value.trim());
  };
  const handleReset = () => {
    document.getElementById('form-id').reset();
    setTodo('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todo !== '' ? dispatch(addTodo(todo)) : dispatch({
      type: 'SET_ALERT',
      payload: {
        message: 'Please type your task first.',
      },
    });
    handleReset();
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Grid sx={{ pt: 2, display: 'block' }}>
      <Grid
        container
        sx={{ flexWrap: 'nowrap' }}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <Stack direction="row" spacing={1.5}>
            <Grid className="logo" alignSelf="center">
              <img src={logo} width="54" height="54" alt="logo" />
            </Grid>
            {isMobile ? null
              : (
                <Grid alignSelf="center">
                  <img src={logoText} width="52" height="30" alt="title" />
                </Grid>
              )}
          </Stack>
        </Grid>
        <Grid item className="inputField" alignSelf="center" xs={10}>
          <form id="form-id" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              onChange={(e) => { handleInput(e.target.value); }}
              id="outlined-basic"
              label="Add Task"
              color="secondary"
              focused
              variant="outlined"
              autoComplete="off"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="Search Icon" onClick={(e) => handleSubmit(e)}>
                      <AddCircleIcon color="primary" className="addIcon" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TodoForm;
