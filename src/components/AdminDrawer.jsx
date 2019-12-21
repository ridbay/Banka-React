import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import {customerListItems, adminListItems} from '../components/AdminDrawerMenuList';
import CreateAccountButton from '../components/CreateAccountButton';
import CreateAdminStaffAccountButton from '../components/CreateAdminStaffAccountButton';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        // position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
    
})) 
const AdminDrawer = (props) => {
    const classes = useStyles();
    const pathName = window.location.pathname.split("/")[1];

    const {open, handleDrawerClose} = props;
    return (
        <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List>{pathName === 'customer' ? (customerListItems) : (adminListItems)} </List>
        {/* <List>{customerListItems}</List>
        <List>{adminListItems}</List> */}
        <Divider />
      <List>{open ? (pathName === 'customer' ? (<CreateAccountButton/>) : (<CreateAdminStaffAccountButton/>)): null}</List>
      </Drawer>
    )
}

export default AdminDrawer
