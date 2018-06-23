import React from 'react';
import {Route, Switch} from "react-router-dom";

import Login from "./containers/Login/Login";

// const ProtectedRoute = ({isAllowed, ...props}) => (
//   isAllowed ? <Route {...props}/> : <Redirect to="/" />
// );

const Routes = ({user}) => (
  <Switch>
    <Route path="/" exact component={Login}/>
    {/*<ProtectedRoute*/}
      {/*isAllowed={user && user.role === 'admin'}*/}
      {/*path="/products/new"*/}
      {/*exact*/}
      {/*component={}*/}
    {/*/>*/}
  </Switch>
);

export default Routes;
