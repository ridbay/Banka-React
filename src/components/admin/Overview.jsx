import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import RecentTransaction from './RecentTransaction';
import Transactions from './Transactions';



const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        width:'100vw',
        overflow: 'auto',
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

const Overview = () => {
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent RecentTransaction */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <RecentTransaction />
                            </Paper>
                        </Grid>
                        {/* Recent Transactions */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Transactions />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default Overview;
