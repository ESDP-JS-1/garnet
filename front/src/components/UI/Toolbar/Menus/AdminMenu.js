import React, {Fragment} from 'react';
import {MenuItem, Nav, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const UserMenu = ({user, logout}) => {
    const navTitle = (
        <Fragment>
            Hello, <b>{user.username}</b>!
        </Fragment>
    );

    return (
        <Nav>
            {/*<LinkContainer to="/" exact>*/}
                {/*<NavItem>Resume</NavItem>*/}
            {/*</LinkContainer>*/}
            <LinkContainer to="/users-list" exact>
                <NavItem>Users List</NavItem>
            </LinkContainer>
            <LinkContainer to="/skills-categories" exact>
                <NavItem>Skills categories</NavItem>
            </LinkContainer>
            {/*<LinkContainer to="/" exact>*/}
                {/*<NavItem>Reference books</NavItem>*/}
            {/*</LinkContainer>*/}

            <NavDropdown title={navTitle} id="user-menu">
                <MenuItem divider/>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </NavDropdown>
        </Nav>
    )
};
export default UserMenu;
