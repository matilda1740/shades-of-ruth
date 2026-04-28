import React from 'react'
import styled from 'styled-components';
import { useAxiosGet } from "../../../../Hooks/axiosHooks"
import { useFirestoreGet } from '../../../../Hooks/firebaseHooks';
import Button from '../../../ReusableComponents/Button';
import DataTable from '../../../ReusableComponents/DataTable'
import Loader from '../../../ReusableComponents/Loader';
import ModalOverlay from "../../../ReusableComponents/ModalOverlay"
import SectionHeading from '../../../ReusableComponents/SectionHeading';
import UpdateForms from '../../UpdateForms'
import { Delete, Edit, LibraryAddOutlined  } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';

export const ModuleStyle = styled.div`
  width: 94%;
  margin: 0 3%;
  display: flex;
  flex-direction: column;
  &.row{
      flex-direction: row;
  }



`;
export const StatusBox = styled.div`
    width: fit-content;
    height: fit-content;
    text-transform: capitalize;
    border-radius: 8px;
    padding: 4px 8px;

    &.cancelled, &.banned, &.out{
        background-color: rgba(231, 24, 27, 0.95);
    }
    &.processing, &.suspended{
        background-color: rgba(15, 73, 201, 0.95);
    }
    &.delivered, &.active, &.in{
        background-color: rgba(36, 133, 55, 0.95);
    }
`;

export function Products() {
  const { data, error, loaded } = useFirestoreGet("products");

  const handleEditClick = (data) => {
      // TRIGGER POP UP FORM
      console.log(data)

  }
  const handleDeleteClick = (id) => {
      // TRIGGER POP UP FORM
      console.log(id)
  }
  const columns = [
      { field: 'id', hideable: true },
      {
        field: "image",
        headerName: "Product",
          width: 80,
        renderCell: (params) => (
                <Avatar src={params.value} alt="Image" />
            ),      
      },
      {
          field: 'name',
          headerName: 'Name',
          description: '',
          sortable: false,
          width: 100,
      },
      {
          field: 'type',
          headerName: 'Type',
          description: '',
          sortable: false,
          width: 100,
      }, 
      {
          field: 'price',
          headerName: 'Price',
          description: '',
          sortable: false,
          width: 80,
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
      // {
      //     field: 'description',
      //     headerName: 'Product Description',
      //     description: '',
      //     sortable: false,
      //     width: 220,
      // }, 
      {
          field: 'createdAt',
          headerName: 'Date Created',
          description: '',
          sortable: false,
          width: 140,
          valueFormatter: (params) => params.value == null ? " " : new Date(params.value.seconds*1000).toLocaleDateString(),
      }, 
      {
          field: 'updatedAt',
          headerName: 'Date Updated',
          description: '',
          sortable: false,
          width: 140,
          valueFormatter: (params) => params.value == null ? " " : new Date(params.value.seconds*1000).toLocaleDateString(),

      },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: (rowData) => {
          return [
            <GridActionsCellItem
              icon={<Edit  />}
              label="Edit"
              className="textPrimary"
              onClick={(event) => handleEditClick(rowData.row)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<Delete />}
              label="Delete"
              onClick={(event) => handleDeleteClick(rowData.id)}
              color="inherit"
            />,
          ];
        }
      }
  ]
  return (
    <ModuleStyle>
      <SectionHeading
        title="Products"
        addText="New Product"
        pushlink="/admin/products/create"
        type="products"
      />     
      {
        loaded && error ? <p>Error Loading Products</p> 
            : loaded && !error ? <DataTable handleEditClick={handleEditClick} rows={data} cols={columns} />
        : <Loader />
      }
    </ModuleStyle>
  );
}