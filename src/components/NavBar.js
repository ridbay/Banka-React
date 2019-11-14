import React from 'react';
import {
    Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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

        <AppBar>
            <Toolbar>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>Sign In</Button>
                <Button color='inherit'>Sign Up</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;