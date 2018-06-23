import React from 'react';
import {Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import UserMenu from "./Menus/UserMenu";



const Toolbar = ({user, logout}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/" exact><a>Garnet</a></LinkContainer>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      {user ? <UserMenu user={user} logout={logout} /> : null }
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;
