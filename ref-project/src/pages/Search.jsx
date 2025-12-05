import React, {useEffect, useState} from 'react';
import SearchTable from "../components/SearchTable.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";
import RefHeadline from "../components/RefHeadline.jsx";
import SearchForm from "../components/SearchForm.jsx";
import {MdDeleteForever, MdEdit, MdOutlineSaveAlt} from "react-icons/md";
import {HiMiniDocumentDuplicate} from "react-icons/hi2";

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
        axios.post("/api/references",
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

    const trialFunction1 = (item) =>
        (
            <button onClick={() => postRecord(item)}  >
                <MdOutlineSaveAlt />
            </button>
        )

    const refActions = [
        trialFunction1
    ]

    return (
        <div>
            <div className="container mx-auto w-1/2">
            <SearchForm actOnSubmit={actOnSubmit}/>
            </div>
            <RefHeadline>Search results</RefHeadline>
            <SearchTable data={search} refActions={refActions}  />
        </div>
    );
};

export default Search;