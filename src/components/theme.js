import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FDF3DD',
    },
    secondary: {
      main: '#7E2B5D',
    },
    background: {
      main: '',
      paper: '#180912',
    },
    text: {
      primary: '#FDF3DD',
      secondary: '#4A1A37',
    },
    spacing: [0, 2, 4, 6],
    error: {
      main: '#E70E42',
    },
    divider: '#4A1A37',
  },
});

export default theme;
