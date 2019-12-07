import React, {useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import ProfileMenu from '../../components/ProfileMenu';
import AdminNavbar from '../../components/AdminNavbar';
import AdminDrawer from '../../components/AdminDrawer';

import routes from '../../routes'

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/customer") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/customer" to="/customer/dashboard" />
  </Switch>
);



const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
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
      <div className={classes.container}>{switchRoutes}</div>
    </div>
  );
}
export default Dashboard;