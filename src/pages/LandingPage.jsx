import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import NavBar from '../components/NavBar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://balogunridwan.com/">
        Banka
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(35),
  },
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            Banka App
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to Banka
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                  <Link color="inherit" href="/signin" underline='none'>
                    Sign In
                  </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                  <Link href="/signup" underline='none'>
                    Sign Up
                  </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Developed by Ridwan Balogun
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}