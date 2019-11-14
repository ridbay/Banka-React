import React from 'react';
import {Link} from "react-router-dom";

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
              Banka App
            </Typography>
            <Button color='inherit' component={Link} to='/'>Home</Button>
            <Button color='inherit' component={Link} to='/signin'>Sign In</Button>
            <Button color='inherit' component={Link} to='/signup'>Sign Up</Button>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;