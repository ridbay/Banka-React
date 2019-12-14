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
        // padding: theme.spacing(1, 2),
    },
    card: {
        maxWidth: 345,
        
    },
    media: {
        height: 240,
    },
    content: {
        flexGrow: 1,
        width: '70vw',

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

    const { role, fname, lname, image, phone, accountNumber,email } = CUSTOMER[1];
    console.log(Image)
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <img src="../../img/ridwan.jpg" alt="" height="50px" width="50px" />
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container justify="center" spacing={3}>

                        <Grid item xs={12} sm={12} md={8} lg={9}>
                            
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={image}
                                        title={`${fname}'s picture`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {fname} {lname} 
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p"> 
                                        {role}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p"> 
                                        Email: {email}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Typography variant="body2" color="textSecondary" component="p"> 
                                        Account Number: {accountNumber}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p"> 
                                        Phone Number: {phone}
                                        </Typography>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/* <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                This is the second side
                            </Paper>
                        </Grid> */}

                    </Grid>
                </Container>
            </main>
        </div>
    )
}
