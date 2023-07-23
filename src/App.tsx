import './App.css';
import { CustomToolbar, MainView } from './components/index';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomToolbar title='Fellowship of Christian Athletes' headerElementVariant='h5' />
      <MainView />
    </ThemeProvider>
  );
}

export default App;
