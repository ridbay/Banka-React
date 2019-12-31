
import React from 'react';
import routes from '../../routes';
import { Switch, Route, Redirect } from "react-router-dom";


const SwitchRoutes = (props)=> {
   console.log("this are props", props.state[0].role);
    return (
    <Switch>
      {routes.map((route, key) => {
        if (route.layout === "/customer") {
          return (
            <Route
              path={route.layout + route.path}
              component={route.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/customer" to="/customer/dashboard" />
    </Switch>)
};

  export default SwitchRoutes