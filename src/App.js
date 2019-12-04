import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import CustomerDashboard from './pages/customer/CustomerDashboad';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6746c3',
      main: '#673ab7',
      dark: '#000063',
      contrastText: '#fff',
    },
    secondary: {
      light: '#bc477b',
      main: '#f50057',
      dark: '#560027',
      contrastText: '#fff'
    }
  }
})


const hist = createBrowserHistory();
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='App'>
        <CssBaseline />

        <Router history={hist}>
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/customer" component={CustomerDashboard} />

            </Switch>
          </div>
        </Router>

      </div>

    </MuiThemeProvider>

  );
}

export default App;
