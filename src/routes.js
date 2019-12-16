
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import CustomerOverview from "./components/customer/Overview";
import CustomerProfile from "./components/customer/Profile";
import CustomerTransactions from "./components/customer/TransactionsView";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: CustomerOverview,
    layout: "/customer"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: Person,
    component: CustomerProfile,
    layout: "/customer"
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "content_paste",
    component: CustomerTransactions,
    layout: "/customer"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: Overview,
    layout: "/admin"
  },
  {
    path: "/accounts",
    name: "Accounts",
    icon: Dashboard,
    component: Overview,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
