import React, {useContext, useEffect, useState} from 'react';
import RecordsTable from "../components/RecordsTable.jsx";
import axios from "axios";
import RefHeadline from "../components/RefHeadline.jsx";
import {ThemeContext} from "../contexts/contexts.js";
import SearchTable from "../components/SearchTable.jsx";
import {MdDeleteForever, MdEdit} from "react-icons/md";
import {HiMiniDocumentDuplicate} from "react-icons/hi2";
import EditForm from "../components/EditForm.jsx";

const Saved = () => {

    const [detailedPost, setDetailedPost] = useState({
        creator: "",
        title: "",
        publisher: "",
        date: "",
        id: ""
    });
    const [backendData, setBackendData] = useState([])
    let theme = useContext(ThemeContext);
    let buttonTheme = `outline-primary ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`;
    useEffect(() => {
        axios.get('/api/references')
            .then(response => {
                setBackendData(response.data);
            })
    })

    const handleDelete = (item) => {
        axios.post(`api/references/delete/${item.id}`)
            .then(response => {console.log(response)});
    }

    const handleDuplicate = (item) => {
        axios.post(`api/references/duplicate/${item.id}`)
            .then(response => {console.log(response)});
    }

    const handleEdit = (item) => {
        axios.post(`api/references/edit/${item.id}`, item)
            .then(response => {console.log(response)});
    }

    const trialFunction2 = (item) =>
        (
            <button onClick={()=> {handleEdit(item)}} className={buttonTheme} >
                <MdEdit />
            </button>
        )

    const trialFunction3 = (item) =>
        (
            <button onClick={()=> {handleDuplicate(item)}} className={buttonTheme} >
                <HiMiniDocumentDuplicate />
            </button>
        )

    const trialFunction4 = (item) =>
        (
            <button onClick={()=> {handleDelete(item)}} className={buttonTheme} >
                <MdDeleteForever />
            </button>
        )

    const refActions = [
        trialFunction2, trialFunction3, trialFunction4
    ]

    return (
        <div>
            <EditForm actOnSubmit={handleEdit} post={detailedPost}/>
            <RefHeadline>Saved search</RefHeadline>
            <SearchTable data={backendData} refActions={refActions}/>
        </div>
    );
};

export default Saved;