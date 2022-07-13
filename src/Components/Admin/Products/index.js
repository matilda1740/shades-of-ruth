import { Delete, Edit, LibraryAddOutlined  } from '@material-ui/icons';
import { GridActionsCellItem } from '@mui/x-data-grid';
import React from 'react'
import Button from '../../ReusableComponents/Button';
import DataTable from '../../ReusableComponents/DataTable'
import ModalOverlay from "../../ReusableComponents/ModalOverlay"
import AddEditProduct from './AddEditProduct'

export function Products() {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleModal = () => setIsModalOpen(!isModalOpen);

    // API TO GET ALL PRODUCTS FROM FIREBASE

    const handleEditClick = (id) => {
        // TRIGGER POP UP FORM
    }

    const handleSaveClick = (id) => {
        // TRIGGER POP UP FORM
    }    

    const handleDeleteClick = (id) => {
        // GET ROW DETAILS & TRIGGER ARE YOU SURE POP UP - IF YES DELETE - IF NO CLOSE
        // IF YES - REMOVE FROM TABLE USING FILTER - TRIGGER FIREBASE DELETE
        
    }

const columns = [
    { field: 'id', headerName: 'productID', width: 100 },
    {
        field: 'name',
        headerName: 'Product Name',
        description: '',
        sortable: false,
        width: 120,
    },
    {
        field: 'type',
        headerName: 'Product Type',
        description: '',
        sortable: false,
        width: 160,
    }, 
    {
        field: 'price',
        headerName: 'Product Price',
        description: '',
        sortable: false,
        width: 180,
    }, 
    {
        field: 'description',
        headerName: 'Product Description',
        description: '',
        sortable: false,
        width: 180,
    }, 
    {
        field: 'createdAt',
        headerName: 'Date Created',
        description: '',
        sortable: false,
        width: 180,
    }, 
    {
        field: 'updatedAt',
        headerName: 'Date Updated',
        description: '',
        sortable: false,
        width: 180,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<Edit />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Delete />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      }
    }
]
  return (
    <>
        {/* <DataTable /> */}
        <Button
          icon={<LibraryAddOutlined/>}
          text={"Add New Product"}
          variant={"primary"}
          position={"end"}
          handleClick={handleModal}
        />

        {
          isModalOpen && 
          <ModalOverlay content={<AddEditProduct closeModal={handleModal}/>} />
        }
    </>
  );
}