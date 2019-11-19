import React from 'react';
import Button from '@material-ui/core/Button';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import Image from '../img/bg.jpg'


const useStyles = makeStyles(theme => ({
 

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${Image})`,
    padding: theme.spacing(10, 0, 60),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

}));



const Home = () => {
  const classes = useStyles();
  const background = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  };
  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to RidBank
              
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              RidBank is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals.
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

    </React.Fragment>
  );
}

export default Home;