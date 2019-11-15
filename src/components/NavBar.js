import React from 'react';
// import {Link} from "react-router-dom";

import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/signin">Sign In</Link>
        //         </li>
        //         <li>
        //             <Link to="/signup">Sign Up</Link>
        //         </li>
        //     </ul>
        // </nav>

        <AppBar position="relative">
          <Toolbar>
  
            <Typography variant="h6" color="inherit" noWrap>
            <Link color="inherit" href="/" underline='none'>Banka App</Link>
              
            </Typography>
            <Button color='inherit'><Link color="inherit" href="/" underline='none'>Home</Link></Button>
            <Button color='inherit'><Link color="inherit" href="/signin" underline='none'>Sign In</Link></Button>
            <Button color='inherit'><Link color="inherit" href="/signup" underline='none'>Sign Up</Link></Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;