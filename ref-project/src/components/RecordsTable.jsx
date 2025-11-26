import React, {useContext} from 'react';
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";
import {RefContext, ThemeContext} from "../contexts/contexts.js";

const RecordsTable = ({backendData, handleEdit, handleDelete, handleDuplicate}) => {

    let loggedIn = useContext(RefContext);
    let theme = useContext(ThemeContext);
    let buttonTheme = `outline-primary ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`;

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
                    <tr className="text-truncate" key={item.id}>
                        <td>{item.creator}</td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.publisher}</td>
                        <td>
                            <Button size="sm" onClick={()=> {handleEdit(item)}} className={buttonTheme} >
                                <MdEdit />
                            </Button>
                            <Button size="sm" onClick={()=> {handleDuplicate(item)}} className={buttonTheme} >
                                <HiMiniDocumentDuplicate />
                            </Button>
                            <Button size="sm"  onClick={()=> {handleDelete(item)}} className={buttonTheme} >
                                <MdDeleteForever />
                            </Button>
                        </td>
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