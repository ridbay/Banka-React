
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
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: Overview,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
