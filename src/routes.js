
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


// core components/views for Admin layout


import Overview from "../src/components/customer/Overview";
import Transactions from "../src/pages/customer/Transactions";
import UserProfile from "../src/pages/customer/Profile";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: Overview,
    layout: "/customer"
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/customer"
  },
  {
    path: "/table",
    name: "Transactions",
    icon: MonetizationOnIcon,
    component: Transactions,
    layout: "/customer"
  },
  
  
];

export default dashboardRoutes;
