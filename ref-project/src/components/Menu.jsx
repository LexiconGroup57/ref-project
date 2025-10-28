import React from 'react';
import {NavLink} from "react-router";

const Menu = ({styling, entries}) => {

    return (
        <ul className={styling}>
            {entries.map((entry) =>
                <li key={entry.index}>
                    <NavLink
                        to={`/${entry.content}`}
                    >
                        {entry.content}
                    </NavLink>
                </li>)}
        </ul>
    );
};

export default Menu;