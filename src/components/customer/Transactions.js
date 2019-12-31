import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from './Title';


import { CUSTOMER } from '../../util/userData';


// Generate Order Data
// function createData(id, date, name, accountNumber, accountType, amount) {
//   return { id, date, name, accountNumber, accountType, amount };
// }

// const rows = [
//   createData(0, '16 Mar, 2019', 'Elvis Presley', '3042863673', 'Savings', 312.44),
//   createData(1, '16 Mar, 2019', 'Paul McCartney', '3042863673', 'Current', 866.99),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', '3042863673', 'Savings', 100.81),
//   createData(3, '16 Mar, 2019', 'Michael Jackson', '3042863673', 'Savings', 654.39),
//   createData(4, '15 Mar, 2019', 'Bruce Springsteen', '3042863673', 'Current', 212.79),
// ];


const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



export default function Transactions() {

  const getRoute = () => {
    return window.location.pathname === "/customer/dashboard";
  };
  const classes = useStyles();
  
  const {transactions} = CUSTOMER['1'];
  console.log(transactions.id)
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>Bank</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Amount (&#8358;)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.beneficiary}</TableCell>
              <TableCell>{row.accountNumber}</TableCell>
              <TableCell>{row.bank}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {getRoute() ? (<Link color="primary" href="/customer/transactions">
          See more transactions
        </Link>) : null }
        
      </div>
    </React.Fragment>
  );
}