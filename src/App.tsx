import { Alert, CssBaseline, Snackbar, ThemeProvider } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { theme } from './assets/theme';
import { CustomToolbar, MainContainer } from './components/index';
import { subscribeToEmployeeRecordUpdated } from './utils/pubsub';
import { DetailView, TableView } from './views';

interface Props {}

const App: FC<Props> = () => {
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
};

export default App;
