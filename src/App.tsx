import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { CustomToolbar, MainContainer } from './components/index';
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
      </Router>
    </ThemeProvider>
  );
}

export default App;
