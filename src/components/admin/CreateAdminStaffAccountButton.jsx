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
        Create an Account
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create an Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a bank Acount, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            // autoFocus
            // margin="dense"
            id="fName"
            label="First Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="lName"
            label="Last Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
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
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default CreateAdminStaffAccountButton;