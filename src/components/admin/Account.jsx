import React, {useState} from 'react';
import MaterialTable from 'material-table';

const Account = () => {
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Account Number', field: 'accountNumber', type: 'numeric' },
      {
        title: 'Account Type',
        field: 'accountType',

        lookup: { 'Savings': 'Savings', 'Current': 'Current' },
      },
    ],
    data: [
      { name: 'Ridwan', surname: 'Balogun', accountNumber: 3042901179, accountType: 'Savings' },
      {
        name: 'Barakat',
        surname: 'Obatade',
        accountNumber: 5638268938,
        accountType: 'Current',
      },
    ],
  });

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
      options={{
        selection: true
      }}
      actions={[
        {
          tooltip: 'Deactivate All Selected Accounts',
          icon: 'delete',
          onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
        }
      ]}
    />
  );
}


export default Account;