import React, {useEffect, useState} from 'react';
import RecordsTable from "../components/RecordsTable.jsx";
import axios from "axios";

const Saved = () => {

    const [backendData, setBackendData] = useState([])

    useEffect(() => {
        axios.get('/api/references')
            .then(response => {
                setBackendData(response.data);
            })
    })

    const handleDelete = (item) => {}

    const handleDuplicate = (item) => {}

    const handleEdit = (item) => {}

    return (
        <div>
            <h2>Saved search</h2>
            <RecordsTable backendData={backendData} handleEdit={handleEdit} handleDelete={handleDelete} handleDuplicate={handleDuplicate}/>
        </div>
    );
};

export default Saved;