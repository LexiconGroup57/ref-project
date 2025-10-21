import React from 'react';

const Cage = () => {

    const number = 4 + 8;
    return (
        <>
            <h1>{number + 56}</h1>
            <div id="card" className="card">
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    );
};

export default Cage;