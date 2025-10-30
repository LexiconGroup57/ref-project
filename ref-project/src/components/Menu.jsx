import React from 'react';
import {NavLink} from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";

const Menu = ({entries}) => {

    return (
        <NavBar bg="secondary" expand="lg" >
            <Container>
                <Nav>
                        {entries.map((entry) =>
                                <Nav.Link as={NavLink} to={`/${entry.content}`} key={entry.index}>
                                    {entry.content}
                                </Nav.Link>
                            )}
                </Nav>

            </Container>
        </NavBar>
    );
};

export default Menu;