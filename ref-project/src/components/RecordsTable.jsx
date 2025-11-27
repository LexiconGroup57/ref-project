import React, {useContext} from 'react';
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";
import {RefContext, ThemeContext} from "../contexts/contexts.js";

const RecordsTable = ({backendData, handleEdit, handleDelete, handleDuplicate}) => {

    let loggedIn = useContext(RefContext);
    let theme = useContext(ThemeContext);
    let buttonTheme = `outline-primary ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`;

    return (
        <table>
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
                            <button onClick={()=> {handleEdit(item)}} className={buttonTheme} >
                                <MdEdit />
                            </button>
                            <button onClick={()=> {handleDuplicate(item)}} className={buttonTheme} >
                                <HiMiniDocumentDuplicate />
                            </button>
                            <button onClick={()=> {handleDelete(item)}} className={buttonTheme} >
                                <MdDeleteForever />
                            </button>
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
        </table>
    );
};

export default RecordsTable;