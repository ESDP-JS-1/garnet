import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Login from "./containers/Login/Login";
import AdminUserList from "./containers/AdminUserList/AdminUserList";

const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props}/> : <Redirect to="/" />
);

const Routes = ({user}) => (
  <Switch>
    <Route path="/" exact component={Login}/>
    {/*<Route path="/admin" component={AdminUserList}/>*/}
    <ProtectedRoute
      isAllowed={user && user.role === 'admin'}
      path="/users-list/"
      component={AdminUserList}
    />
  </Switch>
);

export default Routes;
