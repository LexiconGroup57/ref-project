import React from 'react';
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {libraryData} from "../data/libraryData.js";

const SearchTable = ({search, setBackendData, backendData }) => {

    const columns = [
        {
            accessorKey: 'creator',
            header: 'Creator',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'title',
            header: 'Title',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'publisher',
            header: 'Publisher',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'date',
            header: 'Date',
            cell: (props) => <p>{props.getValue()}</p>
        }
    ]

    const table =  useReactTable({
        data: search,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <Table striped hover>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                        {header.column.columnDef.header}
                    </th>
                        ))}
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}

            </tbody>
        </Table>
    );
};


/*<Button variant="outline-primary" size="sm" onClick={() => setBackendData([...backendData, item])}>
    Add record
</Button></td>*/

export default SearchTable;