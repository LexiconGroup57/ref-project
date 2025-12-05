import React, {useContext} from 'react';
import {RefContext} from "../contexts/contexts.js";
import {useForm} from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {loggedIn, handleLogIn} = useContext(RefContext);

    const onSubmit = (data) => {
        handleLogIn(data.email, data.password);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="border border-slate-500" {...register("email")} />
            <input className="border border-slate-500" {...register("password")} />
            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;