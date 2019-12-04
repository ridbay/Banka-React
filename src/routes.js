
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


// core components/views for Admin layout


import Dashboard from "./components/customer/Dashboard";
import Transactions from "../src/pages/customer/Transactions";
import UserProfile from "../src/pages/customer/Profile";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
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
