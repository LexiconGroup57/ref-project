import React, {useContext} from 'react';
import {NavLink} from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import {RefContext, ThemeContext} from "../contexts/contexts.js";


const Menu = ({entries}) => {

    const {theme, setTheme} = useContext(ThemeContext);
    const { loggedIn, handleLogIn } = useContext(RefContext);

    return (
        <NavBar bg="secondary" expand="lg"  >
            <Container>
                <Nav>
                        {entries.map((entry) =>
                                <Nav.Link className="text-white" as={NavLink} to={`/${entry.content}`} key={entry.index}>
                                    {entry.content}
                                </Nav.Link>
                            )}
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
                    <button onClick={handleLogIn}>{loggedIn ? "Log out" : "Log in" }</button>
                </Nav>

            </Container>
        </NavBar>
    );
};

export default Menu;