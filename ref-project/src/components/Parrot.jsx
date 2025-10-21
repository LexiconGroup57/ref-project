import React from 'react';
import reactLogo from "../assets/react.svg";
import Feather from "./Feather.jsx";

const Parrot = () => {
    return (
        <div className="parrot">
            <a href="https://vite.dev" target="_blank">
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <Feather />
        </div>
    );
};

export default Parrot;