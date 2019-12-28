import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  selectField: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const CreateAdminStaffAccountButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    fName: '',
    lName: '',
    email: '',
    acctType: '',
    password: '',
  });
  

const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Create Admin account
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Admin or Staff user account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create an Admin or Staff user account, please enter the details before. 
          </DialogContentText>
          <TextField
            // autoFocus
            // margin="dense"
            id="fName"
            label="First Name"
            type="text"
            fullWidth
            onChange={handleChange('fName')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lName"
            label="Last Name"
            type="text"
            fullWidth
            onChange={handleChange('lName')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={handleChange('email')}
          />

          <Select
            native
            value={state.acctType}
            className={classes.selectField}
            
            // labelWidth={20}
            onChange={handleChange('acctType')}
            // inputProps={{
            //   name: 'acctType',
            //   id: 'acctType',
            // }}

          >
            <option value="">Account Type</option> 
            <option value={"savings"}>Staff</option>
            <option value={"staff"}>Admin</option>

          </Select>
          <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange('password')}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>(console.log(state))} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default CreateAdminStaffAccountButton;