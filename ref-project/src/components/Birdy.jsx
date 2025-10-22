import React from 'react';
import Parrot from "./Parrot.jsx";
import Cage from "./Cage.jsx";
import Feather from "./Feather.jsx";

const Birdy = () => {
    const caught = true;
    return (
        <>
            <Parrot />
            {caught ? <Cage>
                { 4 + 7 }
            </Cage> : <Feather />}
        </>
    );
};

export default Birdy;