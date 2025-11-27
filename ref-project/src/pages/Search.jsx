import React, {useEffect, useState} from 'react';
import SearchTable from "../components/SearchTable.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";
import RefHeadline from "../components/RefHeadline.jsx";

const Search = () => {

    const [searchString, setSearchString] = useState("http://libris.kb.se/xsearch?query=forf:(Ludwig+Wittgenstein)&format=json");
    const [search, setSearch] = useState([]);

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        console.log(searchString);
        axios.get(searchString)
            .then(response => {
                setSearch(response.data.xsearch.list);
            })
    }, [searchString])
    const postRecord = (item) => {
        axios.post("http://localhost:5287/api/references",
            {
                creator: item.creator,
                title: item.title,
                publisher: item.publisher,
                date: item.date,
                id: item.id,
            })

    }

    const actOnSubmit = (data) => {
        let hasForf = data.authorFirstName || data.authorLastName;
        let hasTitle = data.title.length > 0;
        let hasForl = data.publisher.length > 0;
        setSearchString(`http://libris.kb.se/xsearch?query=
        ${hasForf ? `forf:(${data.authorFirstName + "+" + data.authorLastName})`: ""}
        ${hasTitle ? `tit:(${data.title})` : ""}
        ${hasForl ? `forl:(${data.publisher})` : ""}
        &format=json`);
    }

    return (
        <div>
            <div className="container mx-auto w-1/2">
            <form onSubmit={handleSubmit(actOnSubmit)} className="flex justify-between">
                <div className="">
                    <div className="pb-4">
                        <label>Author first name: </label>
                        <input {...register("authorFirstName")} className="ml-3 border-1 border-slate-400"/>
                    </div>
                    <div>
                        <label >Author last name: </label>
                        <input {...register("authorLastName")} className="ml-3 border-1 border-slate-400"/>
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <label>Title: </label>
                        <input {...register("title")} className="ml-3 border-1 border-slate-400"/>
                    </div>
                    <div>
                        <label >Publisher: </label>
                        <input {...register("publisher")} className="ml-3 border-1 border-slate-400"/>
                    </div>

                </div>
                <div>
                    <button className="bg-slate-300 text-slate-950 py-1 px-4 hover:bg-slate-500 hover:text-white" type="Submit" >Search</button>
                </div>
            </form>
            </div>
            <RefHeadline>Search results</RefHeadline>
            <SearchTable search={search} postRecord={postRecord} />
        </div>
    );
};

export default Search;