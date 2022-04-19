import React, { useEffect, useState } from 'react';
import '../App.css';
import { Grid, Stack, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import listIcon from '../assets/image_cta.svg';

function Greetings() {
  const todoArr = useSelector((state) => state.todoArr);
  const [dayTime, setDayTime] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 6) {
      setDayTime('night');
    } if (currentTime >= 6 && currentTime < 12) {
      setDayTime('morning');
    } if (currentTime >= 12 && currentTime < 17) {
      setDayTime('afternoon');
    } if (currentTime >= 17 && currentTime < 20) {
      setDayTime('evening');
    } if (currentTime >= 20 && currentTime < 24) {
      setDayTime('night');
    }
  }, [dayTime]);

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    todoArr.todos.length > 0 ? (
      <Grid item sx={{ pb: 4 }}>
        <Stack direction="column" spacing={1}>
          <Grid className="dayTime">
            Good
            {' '}
            {dayTime}
            !
          </Grid>
          <Grid className="dayTimeSubtitle">
            Manage your tasks
          </Grid>
        </Stack>
      </Grid>
    )
      : (
        <Grid
          container
          sx={{ pt: 2 }}
          direction="column"
          alignItems="center"
          spacing={isMobile ? 2 : 4}
        >
          <Grid item className="greetingsTitle">
            Good
            {' '}
            {dayTime}
            !
          </Grid>
          <Grid item className="greetingsSubtitle">
            What do you want to do?
          </Grid>
          <Grid item>
            <img
              src={listIcon}
              className="listIcon"
              width="293"
              height="476"
              alt="Not found"
            />
          </Grid>
        </Grid>
      )
  );
}

export default Greetings;
