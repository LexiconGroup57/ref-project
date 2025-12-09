import React from 'react';
import {useForm} from "react-hook-form";

const EditForm = ({actOnSubmit, post}) => {

    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(actOnSubmit)} className="flex justify-between">
            <div className="">
                <div className="pb-4 flex justify-end">
                    <label>Creator: </label>
                    <input {...register("creator")} className="p-1 text-sm ml-3 border-1 border-slate-400" value={post.creator}/>
                </div>
                <div className="flex justify-end">
                    <label >Date: </label>
                    <input {...register("date")} className="p-1 text-sm ml-3 border-1 border-slate-400" value={post.date}/>
                </div>
            </div>
            <div>
                <div className="pb-4 flex justify-end">
                    <label>Title: </label>
                    <input {...register("title")} className="p-1 text-sm ml-3 border-1 border-slate-400" value={post.title}/>
                </div>
                <div className="flex justify-end">
                    <label >Publisher: </label>
                    <input {...register("publisher")} className="p-1 text-sm ml-3 border-1 border-slate-400" value={post.publisher}/>
                </div>

            </div>
            <div className="flex flex-col justify-end">
                <button className="bg-slate-300 text-slate-950 border border-slate-400 py-1 px-4 hover:bg-slate-500 hover:text-white" type="Submit" >
                    {post.id === "" ? "Add" : "Edit"}</button>
            </div>
        </form>
    );
};

export default EditForm;