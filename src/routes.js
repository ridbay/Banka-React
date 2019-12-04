/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


// core components/views for Admin layout


import DashboardPage from "../src/pages/customer/Dashboard";
import Transactions from "../src/pages/customer/Transactions";
import UserProfile from "../src/pages/customer/Profile";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Transactions",
    icon: MonetizationOnIcon,
    component: Transactions,
    layout: "/admin"
  },
  
  
];

export default dashboardRoutes;
