import React from 'react'
import { useFirestoreGet } from '../../../Hooks/firebaseHooks';

import { DeleteRounded, EditRounded, RemoveRedEyeRounded } from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';

import DataTable from '../../ReusableComponents/DataTable'
import Loader from '../../ReusableComponents/Loader';
import SectionHeading from '../../ReusableComponents/SectionHeading';
import { StatusBox, ModuleStyle } from '../Products';

export function Users() {
    const { data, error, loaded } = useFirestoreGet("users");

    const columns = [
        { field: 'id', hideable: true },
        {
            field: 'name',
            headerName: 'Customer Name',
            sortable: false,
            width: 140,
        }, 
        {
            field: 'email',
            headerName: 'Email Address',
            sortable: false,
            width: 180,
        }, 
        {
            field: 'phone',
            headerName: 'Phone',
            description: '',
            sortable: false,
            width: 120,
        }, 
        {
            field: 'address',
            headerName: 'Address',
            description: '',
            sortable: false,
            width: 120,
        },
        {
            field: 'createdAt',
            headerName: 'Date Created',
            description: '',
            sortable: false,
            width: 140,
            valueFormatter: (params) => params.value == null ? " " : new Date(params.value.seconds*1000).toLocaleDateString(),
        }, 
        {
            field: "status",
            headerName: "Status",
            sortable: false,
            width: 100,        
            renderCell: (params) => (
                <StatusBox className={params.value}>{params.value}</StatusBox>
            ),      
        },      
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 160,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                <GridActionsCellItem
                    icon={<RemoveRedEyeRounded />}
                    label="View"
                    className="textPrimary"
                    color="inherit"
                />, 
                <GridActionsCellItem
                    icon={<EditRounded />}
                    label="Edit"
                    className="textPrimary"
                    color="inherit"
                />, 
                <GridActionsCellItem
                    icon={<DeleteRounded />}
                    label="Delete"
                    className="textPrimary"
                    color="inherit"
                />,                 
                ];
            }
        }
    ]

    return (
    <ModuleStyle>
        <SectionHeading
        title="Users"
        addText="New User"
        pushlink="/signup"
        type="users"
        />        
        {
        loaded && error ? <p>Error Loading Users</p> 
            : loaded && !error ? <DataTable rows={data} cols={columns} />
        : <Loader />
        }
    </ModuleStyle>
    );
}