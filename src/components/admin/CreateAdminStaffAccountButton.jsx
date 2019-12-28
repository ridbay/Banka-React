import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';

const CreateAdminStaffAccountButton = () =>{
  const [open, setOpen] = React.useState(false);

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
            autoFocus
            margin="dense"
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
          <TextField
            autoFocus
            margin="dense"
            id="balance"
            label="Opening Balance"
            type="text"
            fullWidth
          />
          <Select
              native
              value='savings'
              
              labelWidth={10}
              inputProps={{
                name: 'acctType',
                id: 'acctType',
              }}

            >

              <option value={"savings"}>Staff</option>
              <option value={"staff"}>Admin</option>
              
            </Select>
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