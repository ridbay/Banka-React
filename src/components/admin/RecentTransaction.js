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
  const customers = USERS_DATA[0];
  const transactions = customers.customers.map(customer=> customer.balance)
  const allBalance = transactions.reduce((accumulator, currentValue) => accumulator + currentValue)
  const firstCustomerTransactions = transactions[0]
  
  const numberWithCommas = (allBalance) => allBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <React.Fragment>
      <Title>Total Balances</Title>
      <Typography component="p" variant="h4">
        &#8358;{numberWithCommas(allBalance)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* to {firstCustomerTransactions[0].beneficiary} */}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* on {firstCustomerTransactions[0].date} */}
      </Typography>

      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}