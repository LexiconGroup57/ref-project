import React, {useEffect, useState} from 'react';
import RecordsTable from "../components/RecordsTable.jsx";
import axios from "axios";

const Saved = () => {

    const [altBackendData, setAltBackendData] = useState([])

    useEffect(() => {
        axios.get('/api/references')
            .then(response => {
                setAltBackendData(response.data);
            })
    })

    return (
        <div>
            <h2>Saved search</h2>
            <RecordsTable backendData={altBackendData} />
        </div>
    );
};

export default Saved;