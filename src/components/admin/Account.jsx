import React, { useState } from 'react';
import MaterialTable from 'material-table';
import ToggleOffOutlinedIcon from '@material-ui/icons/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';

import { CUSTOMER } from '../../Data/userData';

const Account = () => {
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname', },
      { title: 'Account Number', field: 'accountNumber', type: 'numeric', editable: 'never' },
      { title: 'Account Type', field: 'accountType', lookup: { 'Savings': 'Savings', 'Current': 'Current' } },
      { title: 'Balance', field: 'balance', type: 'numeric' }
    ],
    // data: [
    //   { name: 'Ridwan', surname: 'Balogun', accountNumber: 3042901179, accountType: 'Savings' },
    //   { name: 'Barakat', surname: 'Obatade', accountNumber: 5638268938, accountType: 'Current' },
    // ],
    data: CUSTOMER,

  });

  const [isActivated, setIsActivated] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const activatePopUp = (isActivated, rowData) => {
    isActivated ? (alert('You want to Deactivate ' + rowData.length + ' accounts')) : (alert('You want to Activate ' + rowData.length + ' accounts'))
  }
  return (

    <MaterialTable
      title="Account"
      columns={state.columns}
      data={state.data}

      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      actions={[
        rowData => ({
          tooltip: 'Deactivate All Selected Accounts',
          icon: isActivated ? ToggleOffOutlinedIcon : ToggleOnOutlinedIcon,
          onClick: (evt, rowData) => {
            setIsActivated(!isActivated);
            setSelectedRow(rowData)
            activatePopUp(isActivated, rowData)
          },
        }),
      ]}
      options={{
        selection: true,
        rowStyle: rowData => ({
          backgroundColor: (selectedRow && selectedRow[0].tableData.id === rowData.tableData.id) ? '#ffcccc' : '#FFF'
        })
      }}
    />
  );
}


export default Account;