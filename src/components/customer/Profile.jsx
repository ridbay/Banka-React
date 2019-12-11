import React from 'react';
import clsx from 'clsx';
import { CUSTOMER } from '../../Data/userData';


import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10, 21),
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    content: {
        flexGrow: 1,
        // height: '100vh',
        width: '70vw',
        // overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Profile() {
    const classes = useStyles();

    const { role, fname, lName, imageUrl, phone } = CUSTOMER[1];
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div  className={classes.root}>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} sm={12} md={8} lg={9}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={`${imageUrl}`}
                                        title={`${fname}'s picture`}
                                    />
                                </CardActionArea>

                            </Card>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                This is the second side
                            </Paper>
                        </Grid>
                        {/* Recent Transactions */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                This is the bottom
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
