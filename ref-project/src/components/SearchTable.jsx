import React from 'react';
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {MdOutlineSaveAlt} from "react-icons/md";

const SearchTable = ({search, postRecord }) => {

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
        <table className="table-auto w-full">
            <thead className="text-left">
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                    <th className="py-2 my-2" key={header.id}>
                        {header.column.columnDef.header}
                    </th>
                        ))}
                    <th>Action</th>
                </tr>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="">
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    <td><button onClick={() => postRecord(row.original)}  >
                        <MdOutlineSaveAlt />
                    </button></td>
                </tr>
            ))}

            </tbody>
        </table>
    );
};


/*<Button variant="outline-primary" size="sm" onClick={() => setBackendData([...backendData, item])}>
    Add record
</Button></td>*/

export default SearchTable;