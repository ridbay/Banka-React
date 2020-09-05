import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import {connect} from 'react-redux';


const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(0.1, 1.5),
    },
}));


const NavBar = ({currentUser}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <React.Fragment>
                <AppBar elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            <Link color="inherit" href="/" underline='none'>Home</Link>
                        </Typography>
                        <nav>
                            <Link variant="button" color="inherit" href="/about" className={classes.link}>About Us </Link>
                            <Link variant="button" color="inherit" href="/contact" className={classes.link}>Contact Us</Link>
                        </nav>
                        {currentUser ? <Button href="/signout" color="inherit" variant="outlined" className={classes.link}>SignOut</Button> : (<div>
                            <Button href="/signin" color="inherit" variant="outlined" className={classes.link}>SignIn</Button>
                        <Button href="/signup" color="inherit" variant="outlined" className={classes.link}>SignUp</Button>
                        </div>)}
                        
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    )
}


const mapStateToProps = state => ({
currentUser : state.user.customers
})
export default connect(mapStateToProps)(NavBar);