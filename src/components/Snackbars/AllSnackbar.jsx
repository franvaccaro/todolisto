import React from 'react';
import { IconButton } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';

function AllSnackbar() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  const snackbarPosition = ({
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal } = snackbarPosition;

  const handleSnackbarClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({
      type: 'CLEAR_ALERT',
    });
  };

  const SnackbarAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleSnackbarClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert severity={alert.severity} action={SnackbarAction} variant="filled">
        {alert.message}
      </Alert>
    </Snackbar>
  );
}

export default AllSnackbar;
