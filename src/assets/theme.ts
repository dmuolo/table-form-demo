import { createTheme } from '@mui/material';

export const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#012d61',
    },
    secondary: {
      main: '#ff0000',
    },
    info: {
      main: '#f0b422',
    },
  },
  typography: {
    fontFamily: 'Gotham A, Gotham B, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: 16,
  },
});
