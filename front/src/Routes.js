import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Login from "./containers/Login/Login";
import AdminUserList from "./containers/AdminUserList/AdminUserList";
import SkillsCategories from "./containers/SkillsCategories/SkillsCategories";
import CreateUser from "./containers/CreateUser/CreateUser";
import Companies from "./containers/CompaniesList/CompaniesList";
// import AddInfo from "./containers/AddInfo/AddInfo";

const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props}/> : <Redirect to="/"/>
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
        <ProtectedRoute
            isAllowed={user && user.role === 'admin'}
            path="/create-user/"
            component={CreateUser}
        />
        <ProtectedRoute
            isAllowed={user && user.role === 'admin'}
            path="/edit-user/:id"
            component={CreateUser}
        />
        <ProtectedRoute
            isAllowed={user && user.role === 'admin'}
            path="/companies"
            component={Companies}
        />
    </Switch>
);

export default Routes;
