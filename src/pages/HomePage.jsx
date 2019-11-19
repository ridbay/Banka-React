import React from 'react';
import Button from '@material-ui/core/Button';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


import Image from '../img/bg.jpg'

// const Copyright = () => {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://balogunridwan.com/">
//       RidBank
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
  },
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 27),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  footer: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#3f51b5",
    color: "white",
    padding: theme.spacing(0, 8),
  },
}));



const HomePage = () => {
  const classes = useStyles();
  const background = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  };
  return (
    <React.Fragment className={classes.root}>
      <main>
        <div style={{...background}}>
        {/* Hero unit */}
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
        </div>
      </main>

    </React.Fragment>
  );
}

export default HomePage;