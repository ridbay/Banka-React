import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <CssBaseline />
        <NavBar />
        <Router>
          <div className='container'>
            <Switch>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/" component={Home} />

            </Switch>
          </div>
        </Router>
        <Footer />
      </div>

    </ThemeProvider>

  );
}

export default App;
