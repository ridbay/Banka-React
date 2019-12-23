import React, {useState} from 'react';
import MaterialTable from 'material-table';
import ToggleOffOutlinedIcon from '@material-ui/icons/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';

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
const [activate, setActivate] = useState(false);
console.log(activate)
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
          icon: activate ? ToggleOffOutlinedIcon : ToggleOnOutlinedIcon,
          onClick: (evt, data) => {
            setActivate(!activate);
            console.log(activate)

              return(
                  activate? (alert('You want to deactivate ' + data.length + ' accounts'))
                  :
                  (alert('You want to Activate ' + data.length + ' accounts'))
                  
              )
            },
          
          
        }
        
      ]}

      
    />
  );
}


export default Account;