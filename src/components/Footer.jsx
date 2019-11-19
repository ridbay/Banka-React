import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://balogunridwan.com/">
        RidBank
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: "#3f51b5",
    color: "white",
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Your Dependable Bank
        </Typography>
        <Typography variant="subtitle1" align="center" color='textPrimary' component="p">
          Developed by Ridwan Balogun.
        </Typography>
        <Copyright />
      </footer>
    
  );
}