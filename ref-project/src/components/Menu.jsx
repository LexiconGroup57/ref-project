import React from 'react';

const Menu = (props) => {

    return (
        <ul className={props.styling}>
            {props.entries.map((entry) => <li key={entry.index}>{entry.content}</li>)}
        </ul>
    );
};

export default Menu;