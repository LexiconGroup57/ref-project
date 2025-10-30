import React from 'react';
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RecordsTable = ({setBackendData, backendData}) => {
    return (
        <Table striped hover>
            <thead>
            <tr>
                <th>Creator</th>
                <th>Title</th>
                <th>Date</th>
                <th>Publisher</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            { backendData ?
                backendData.map((item) => (
                    <tr key={item.identifier}>
                        <td>{item.creator}</td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.publisher}</td>
                        <td>
                            <Button size="sm" variant="outline-primary" >
                                Edit
                            </Button></td>
                    </tr>
                ))
                :
                <tr>
                    <td>..</td>
                    <td>..</td>
                </tr>
            }

            </tbody>
        </Table>
    );
};

export default RecordsTable;