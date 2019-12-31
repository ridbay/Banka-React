import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


import USERS_DATA from '../../util/userData';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function RecentTransaction() {
  const classes = useStyles();
  const { transactions } = USERS_DATA;

  return (
    <React.Fragment>
      <Title>Recent Transaction</Title>
      <Typography component="p" variant="h4">
      {/* &#8358;{transactions[0].amount} */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* to {transactions[0].beneficiary} */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* on {transactions[0].date} */}
      </Typography>
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}