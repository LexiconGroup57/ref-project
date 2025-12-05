import React, {useContext} from 'react';
import {NavLink} from "react-router";
import {RefContext, ThemeContext} from "../contexts/contexts.js";


const Menu = ({entries}) => {

    const {theme, setTheme} = useContext(ThemeContext);
    const { loggedIn, handleLogIn, user } = useContext(RefContext);

    return (
            <div className="flex justify-between py-2 mb-7 border-b-1">
                <nav className="flex justify-between w-60">
                        {entries.map((entry) =>
                                <NavLink className="" to={`/${entry.content}`} key={entry.index}>
                                    {entry.content}
                                </NavLink>
                            )}
                </nav>
                <div className="flex justify-between w-45">
                    <p className="">{user}</p>
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
                    {loggedIn ? <button onClick={handleLogIn}>Log out</button> : <NavLink to="/login">Log in</NavLink>}
                </div>
            </div>
    );
};

export default Menu;