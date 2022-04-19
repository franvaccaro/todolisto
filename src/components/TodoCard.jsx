import React from 'react';
import '../App.css';
import {
  Typography, IconButton, Grid, Stack, useMediaQuery,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { handleCheckbox } from '../redux/actions/checkboxAction';
import deleteIcon from '../assets/icon_delete.svg';

function TodoCard(props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch();
  const todoData = props;
  const date = new Date(todoData.todo.id).toLocaleDateString('en-GB', {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',
  });
  const time = new Date(todoData.todo.id).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <Grid
      container
      sx={{ flexWrap: 'nowrap' }}
      justifyContent="space-between"
      direction="row"
    >
      <Grid item style={{ display: 'flex' }}>
        <IconButton
          onClick={() => dispatch(handleCheckbox(todoData.todo.id))}
        >
          <Checkbox checked={todoData.todo.checked} style={{ color: '#7E2B5D' }} fontSize="large" />
        </IconButton>
        <Typography
          className="task"
          color="textPrimary"
          alignSelf="center"
          variant="p"
          padding={1}
          style={{
            textDecoration: todoData.todo.checked ? 'line-through' : '',
            color: todoData.todo.checked ? '#595959' : '',
          }}
        >
          {todoData.todo.task}
        </Typography>
      </Grid>
      <Grid item alignSelf="center">
        <Stack direction="row" spacing={1}>
          {isMobile
            ? null
            : (
              <>
                <Typography
                  className="date"
                  color="secondary"
                  style={{
                    color: todoData.todo.checked ? '#4A1A37' : '',
                  }}
                  variant="p"
                  padding={1}
                >
                  {`${date} - ${time}`}
                </Typography>
                <Grid
                  className="chip"
                  alignSelf="center"
                  style={{
                    background: todoData.todo.checked ? '#4E9B32' : '',
                  }}
                >
                  {todoData.todo.checked ? 'Done' : 'Pending'}
                </Grid>
              </>
            )}
          <IconButton
            style={{ color: '#c9460b' }}
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: todoData.todo.id } })}
          >
            <img src={deleteIcon} width="24" height="24" className="deleteIcon" alt="delete" />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default TodoCard;
