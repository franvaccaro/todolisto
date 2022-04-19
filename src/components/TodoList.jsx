import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import {
  Card, CardContent, Grid,
} from '@mui/material';
import TodoCard from './TodoCard';
import Greetings from './Greetings';
import TodoFooter from './TodoFooter';

function TodoList() {
  const todoArr = useSelector((state) => state.todoArr);
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={{ pt: 4, pb: 2.5 }}
    >
      <Greetings />
      <Grid item>
        {todoArr.todos.length > 0
          ? (
            <Grid sx={{ pt: 1 }}>
              <Card
                variant="outlined"
                style={{
                  borderRadius: '10px',
                  boxShadow: '0px -1px 0px rgba(161, 44, 115, 0.25)',
                }}
              >
                <CardContent sx={{ pt: 1, mb: -2 }}>
                  {todoArr.todos.map((todo, index) => (
                    <TodoCard
                      todo={todo}
                      index={index}
                      key={todo.id}
                    />
                  ))}
                  <TodoFooter />
                </CardContent>
              </Card>
            </Grid>
          )
          : null}
      </Grid>
    </Grid>
  );
}

export default TodoList;
