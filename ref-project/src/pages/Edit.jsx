import React from 'react';
import {Outlet} from "react-router";

const Edit = () => {
    return (
        <div>
            <h1>Edit</h1>
            <Outlet />
        </div>
    );
};

export default Edit;