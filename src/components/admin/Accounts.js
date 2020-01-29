import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Title from './Title';


import USERS_DATA from '../../util/userData';


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
const customersData = USERS_DATA[0].customers;
console.log(customersData)
// const transactions = customers.customers.map(customer=> customer.transactions)
// const firstCustomerTransactions = transactions[0]


const Accounts = ()=> {

  const getRoute = () => {
    return window.location.pathname === "/customer/dashboard";
  };
  const classes = useStyles();
  
  const {transactions} = USERS_DATA['1'];

  return (
    <React.Fragment>
      <Title>Customers Accounts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Created</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Account Number</TableCell>
            <TableCell>Account Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Balance(&#8358;)</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customersData.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.dateCreated}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.accountNumber}</TableCell>
              <TableCell>{row.accountType}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right"><Button>Delete</Button> </TableCell>
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

export default Accounts;