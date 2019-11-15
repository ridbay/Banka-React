import React from 'react';
// import {Link} from "react-router-dom";

import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (

        <AppBar>
          <Toolbar>
  
            <Typography variant="h6" color="inherit" noWrap>
            <Link color="inherit" href="/" underline='none'>Banking App</Link>
              
            </Typography>
            <Button color='inherit'><Link color="inherit" href="/" underline='none'>Home</Link></Button>
            <Button color='inherit'><Link color="inherit" href="/signin" underline='none'>Sign In</Link></Button>
            <Button color='inherit'><Link color="inherit" href="/signup" underline='none'>Sign Up</Link></Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;