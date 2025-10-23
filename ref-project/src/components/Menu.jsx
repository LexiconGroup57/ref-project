import React from 'react';

const Menu = ({styling, entries, setNavigation, navigation}) => {

    return (
        <ul className={styling}>
            {entries.map((entry) =>
                <li key={entry.index}>
                    <button
                        onClick={() => setNavigation(entry.index)}
                        className={navigation === entry.index ? "clicked" : ""}
                    >
                        {entry.content}
                    </button>
                </li>)}
        </ul>
    );
};

export default Menu;