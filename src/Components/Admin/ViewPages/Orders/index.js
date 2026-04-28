import React from 'react'
import { useFirestoreGet } from '../../../../Hooks/firebaseHooks';

import { RemoveRedEyeRounded } from '@mui/icons-material';
import { GridActionsCellItem } from '@mui/x-data-grid';

import DataTable from '../../../ReusableComponents/DataTable'
import Loader from '../../../ReusableComponents/Loader';
import SectionHeading from '../../../ReusableComponents/SectionHeading';
import { StatusBox, ModuleStyle } from '../Products';

export function Orders() {
    const { data, error, loaded } = useFirestoreGet("orders");

    const columns = [
        { field: 'id', hideable: true },
        {
            field: 'customername',
            headerName: 'Customer Name',
            sortable: false,
            width: 160,
        }, 
        {
            field: 'locationname',
            headerName: 'Location',
            sortable: false,
            width: 120,
        }, 
        {
            field: 'amount',
            headerName: 'Amount',
            description: '',
            sortable: true,
            width: 120,
        }, 
        {
            field: "status",
            headerName: "Status",
            sortable: false,
            width: 120,        
            renderCell: (params) => (
                <StatusBox className={params.value}>{params.value}</StatusBox>
            ),      
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
            field: 'paymentMethod',
            headerName: 'Payment Method',
            sortable: false,
            width: 140,
        },        
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 80,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                <GridActionsCellItem
                    icon={<RemoveRedEyeRounded />}
                    label="Edit"
                    className="textPrimary"
                    color="inherit"
                />
                ];
            }
        }
    ]

  return (
    <ModuleStyle>
        <SectionHeading
        title="Orders"
        addText="New Order"
        pushlink="/admin/orders/create"
        type="orders"
        />        
        {
        loaded && error ? <p>Error Loading Orders</p> 
            : loaded && !error ? <DataTable rows={data} cols={columns} />
        : <Loader />
        }
    </ModuleStyle>
  );
}