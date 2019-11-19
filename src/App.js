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
            <Route exact path="/" component={Home} />

          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
