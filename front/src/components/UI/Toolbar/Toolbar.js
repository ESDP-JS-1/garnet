import React from 'react';
import {Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import UserMenu from "./Menus/UserMenu";
import AdminMenu from "./Menus/AdminMenu";



const Toolbar = ({user, logout}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to={user ? `/${user.role}/${user.username}`: '/'} exact><a>Garnet</a></LinkContainer>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      {user ? user.role==='admin' ? <AdminMenu user={user} logout={logout} /> : <UserMenu user={user} logout={logout} /> : null }
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;
