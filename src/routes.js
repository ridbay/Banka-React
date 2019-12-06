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
// core components/views for Admin layout
import Overview from "./components/customer/Overview";
import Profile from "./components/customer/Profile";
import Transactions from "./components/customer/TransactionsView";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: Overview,
    layout: "/customer"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: Person,
    component: Profile,
    layout: "/customer"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "content_paste",
    component: Transactions,
    layout: "/customer"
  },
  
];

export default dashboardRoutes;
