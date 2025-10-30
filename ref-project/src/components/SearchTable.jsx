import React from 'react';
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SearchTable = ({search, setBackendData, backendData }) => {
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

            { search ?
                search.map((item) => (
                    <tr key={item.identifier}>
                        <td>{item.creator}</td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.publisher}</td>
                        <td>
                            <Button variant="outline-primary" size="sm" onClick={() => setBackendData([...backendData, item])}>
                                Add record
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

export default SearchTable;