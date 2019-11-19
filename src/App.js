import React from 'react';
import './App.css';
import HomePage from '../src/pages/HomePage';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import NavBar from '../src/components/NavBar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className='App'>
       <CssBaseline />
      <NavBar />
      <Router>
        <div className='container'>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={HomePage} />

        </Switch>
        </div>
      </Router>
    </div>
        );
      }
      
      export default App;
