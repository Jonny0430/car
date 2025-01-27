// Example of light and dark theme
// ../scss/MaterialTheme.js

import { createTheme } from '@mui/material/styles';

export const light = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#fff',
    },
  },
});

export const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
  },
});
