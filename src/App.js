import React from 'react';
import './App.css';
import LandingPage from '../src/pages/LandingPage';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import NavBar from '../src/components/NavBar'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />

          <Route path="/signup" component={SignUp} />
            <Route path="/" component={LandingPage} />

        </Switch>
      </Router>
    </div>
        );
      }
      
      export default App;
