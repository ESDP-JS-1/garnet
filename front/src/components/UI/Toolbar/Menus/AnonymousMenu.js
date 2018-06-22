import React from 'react';
import {Nav, NavItem} from "react-bootstrap";


const AnonymousMenu = () => (
    <Nav pullRight>
    <LinkContainer to="/login" exact>
        <NavItem>Login</NavItem>
    </LinkContainer>
    </Nav>
);
export default AnonymousMenu;