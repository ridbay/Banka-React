import React, { Component } from 'react';

import { user } from '../../src/Data/userData';


import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    paper: {

    }
  }));

export default function Profile() {
    const classes = useStyles();

    const { firstName, lastName, image, accountNumber, accountType, customerType } = user;


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className={classes.profile-image}>
                    <img src={image} alt="" height="50px" width="50px" />
                    </div>
                    <hr/>
                    <Typography>{firstName}, {lastName}</Typography>
                    <Typography>{accountNumber}</Typography>
                    <Typography>{accountType}</Typography>
                    <Typography>You're {customerType}</Typography>

                </div>
            </Paper>

            
        </div>
    )
}
