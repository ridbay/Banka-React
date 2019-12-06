import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import ProfileMenu from '../../components/ProfileMenu';
import Overview from '../../components/customer/Overview';
import Profile from '../../components/customer/Profile'
import AdminNavbar from '../../components/AdminNavbar'
import AdminDrawer from '../../components/AdminDrawer'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

}));


const Dashboard = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);


  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = event => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AdminNavbar handleDrawerOpen={handleDrawerOpen} handleProfileMenuOpen={handleProfileMenuOpen} open={open}/>
      <ProfileMenu isMenuOpen={isMenuOpen} handleProfileMenuClose={handleProfileMenuClose} anchorEl={anchorEl} />
      <AdminDrawer open={open} handleDrawerClose={handleDrawerClose} />
      
      <Overview />
      <Profile/>
    </div>
  );
}

export default Dashboard;
