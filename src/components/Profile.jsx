import React, { Component } from 'react';

import { user } from '../../src/Data/userData';


import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
}));


export default function Profile() {
    const classes = useStyles();

    const { firstName, lastName, image, accountNumber, accountType, customerType } = user;


    return (
        <div>

            <img src={image} alt="" height="50px" width="50px" />
            <p>{firstName}, {lastName}</p>
            <p>{accountNumber}</p>
            <p>{accountType}</p>
            <p>You're {customerType}</p>
        </div>
    )
}
