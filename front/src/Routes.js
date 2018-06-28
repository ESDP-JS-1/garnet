import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Login from "./containers/Login/Login";
import AdminUserList from "./containers/AdminUserList/AdminUserList";
import SkillsCategories from "./containers/SkillsCategories/SkillsCategories";
// import AddInfo from "./containers/AddInfo/AddInfo";

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
      <ProtectedRoute
      isAllowed={user && user.role === 'admin'}
      path="/skills-categories/"
      component={SkillsCategories}
    />
  </Switch>
);

export default Routes;
