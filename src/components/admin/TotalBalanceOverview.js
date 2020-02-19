import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


import {connect} from 'react-redux';

// import USERS_DATA from '../../util/userData';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const RecentTransaction=({customersData})=> {
  const classes = useStyles();
  const balances = customersData.map(customer => customer.balance);
  const allBalance = balances.reduce((accumulator, currentValue) => accumulator + currentValue);

  const numberWithCommas = (allBalance) => allBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  return (
    <React.Fragment>
      <Title>Total Balance</Title>
      <Typography component="p" variant="h4">
        &#8358;{numberWithCommas(allBalance)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        from {balances.length} customer accounts
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {/* on {firstCustomerTransactions[0].date} */}
      </Typography>

      <div>
        <Link color="primary" href="/admin/accounts" onClick={preventDefault}>
          View accounts
        </Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state =>({
  customersData: state.user.currentUser
})
export default connect(mapStateToProps)(RecentTransaction)