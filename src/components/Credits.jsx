import React from 'react';
import '../App.css';
import { Grid, Link, useMediaQuery } from '@mui/material';

function Credits() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Grid
      container
      direction="column"
      sx={{ pt: isMobile ? 0 : 8, pb: 2 }}
      gap={1}
    >
      <Grid item className="creditsTitle">
        CREDITS
      </Grid>
      <Grid item className="creditsTitle">
        {'Developer '}
        <Link href="https://github.com/franvaccaro" underline="hover">
          Franco Vaccaro
        </Link>
      </Grid>
      <Grid item className="creditsTitle">
        {'Designer '}
        <Link href="https://www.behance.net/bqad" underline="hover">
          Adrián Vaccaro
        </Link>
      </Grid>
    </Grid>
  );
}

export default Credits;
