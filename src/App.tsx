import { Alert, CssBaseline, Snackbar, ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { CustomToolbar, MainContainer } from './components/index';
import { subscribeToEmployeeRecordUpdated } from './utils/pubsub';
import { DetailView, TableView } from './views';

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
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    subscribeToEmployeeRecordUpdated((data: any) => {
      if (data.success) {
        setSnackbarMessage('Employee record updated successfully!');
        setSnackbarOpen(true);
      }
    });
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <CustomToolbar title='Fellowship of Christian Athletes' headerElementVariant='h5' />
        <MainContainer>
          <Switch>
            <Route path='/' exact component={TableView} />
            <Route path='/details/:id' component={DetailView} />
          </Switch>
        </MainContainer>
        <Snackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
          <Alert elevation={6} variant='filled' onClose={handleSnackbarClose} severity='success'>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Router>
    </ThemeProvider>
  );
}

export default App;
