import React from 'react';
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CustomTable = ({records, setBackendData, backendData, buttonList={buttonList}}) => {
    console.log("CustomTable" + records);
    return (
        <Table striped hover>
            <thead></thead>
            <tbody>

            { records ?
                records.map((item) => (
                    <tr key={item.identifier}>
                        <td>{item.creator}</td>
                        <td>{item.title}</td>
                        <td>
                            <Button size="sm" onClick={buttonList[0]}>
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

export default CustomTable;