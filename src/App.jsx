import './App.css';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  Backdrop, Container, CssBaseline,
} from '@mui/material';
import { useSelector } from 'react-redux';
import theme from './components/theme';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Loader from './components/Loaders/Loader';
import AllSnackbar from './components/Snackbars/AllSnackbar';
import Credits from './components/Credits';

function App() {
  const [loading, setLoading] = useState(false);
  const todoArr = useSelector((state) => state.todoArr);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Backdrop
          // eslint-disable-next-line no-shadow
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <Loader />
        </Backdrop>
      )
        : (
          <Container>
            <TodoForm />
            <TodoList />
            <AllSnackbar />
            {todoArr.todos.length > 0
              ? null
              : <Credits />}
          </Container>
        )}
    </ThemeProvider>
  );
}

export default App;
