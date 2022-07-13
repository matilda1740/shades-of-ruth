import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import styled from 'styled-components';

const TableCustomStyle = styled.div`
.MuiDataGrid-root {
border-radius: 16px;
padding: 0 12px;
border: 1px solid rgba(18, 53, 91, 0.1);
}

/* TOOLBAR */
.MuiDataGrid-toolbarContainer{
    display: flex;
    justify-content: flex-end !important;
    width: 100%;
    margin-left: auto;
    button{
        height: 40px;
        width: 120px;
        border-radius: 16px;
        padding: 12px 24px;
        margin: 10px 10px;
        color: rgba(88, 50, 218, 1);
        /* border: 1px solid rgba(88, 50, 218, 0.2); */
        background-color: rgba(88, 50, 218, 0.15);
        font-family: 'Maison Neue';
    }
}
/* THE SORTING BUTTONS */
.MuiDataGrid-iconButtonContainer{ 
    button {
    width: 30px;
    height: 30px;
    margin: 0px 0px 0 10px !important;
    background-color: rgba(88, 50, 218, 0.2);
    visibility: visible;
    svg { 
        color: rgba(88, 50, 218, 1); 
        opacity: 1 !important;

    }
    :hover {
        background-color: #5832DA;
        svg { color: #fff; }
    }
    }
}

/* THE 3 DOTS */
.MuiDataGrid-root .MuiDataGrid-menuIcon {
    margin-right: -10px;
    width: 20px;
    visibility: visible;
    button { 
        background-color: transparent !important;
        margin: 0 !important;
        width: 20px;
        svg { color: rgba(18, 53, 91, 0.5);}

        :hover { 
            svg { color: #5832DA;}

        }
    }

}
/* ROWS */
.MuiDataGrid-root .MuiDataGrid-row{
    :hover {
        background-color: rgba(88, 50, 218, 0.1);
    }

}
.MuiDataGrid-root .MuiDataGrid-row.Mui-selected{
        background-color: rgba(88, 50, 218, 0.1);
        color: rgba(88, 50, 218, 1);
}
/* CELLS */
.MuiDataGrid-root .MuiDataGrid-cell:focus, .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within{
    outline: none;
}

.MuiDataGrid-footerContainer {
    height: 50px;
}

p { margin-bottom: 0px !important; }
.MuiTablePagination-root{
    width: 100%;
    margin: 0  10px 0 0px;
}
.MuiToolbar-root{
    width: 100%;
    margin-left: -70px;
    padding-right: 0px !important;
}

.MuiTablePagination-actions {
    display: flex;
    height: 100%;
    margin-right: 20px;
    button {
        margin: 0 10px;
        height: 80%;
        background-color: rgba(88, 50, 218, 0.1);
        svg {color: #5832DA;}
        :hover { 
            background-color: #5832DA;
            svg { color: #fff; }
        }
    }
}
    /* p.pending, svg { color: #12355B; } */
.status_bar {
    /* width: 80%;
    height: 80%;
    margin: 10%; */

}
    .status_bar.active {
        background-color: rgba(125, 191, 16, 0.1);
        color: rgba(125, 191, 16, 1);
    }
    .status_bar.banned {
        background-color: rgba(255, 12, 62, 0.1);
        color: rgba(255, 12, 62, 1);     
    }

`;

const DataTable = ({type, datarows, datacols}) => {
    const [pageSize, setPageSize] = React.useState(10);    
    return (
    <TableCustomStyle style={{ display: 'flex', height: 600, width: '100%'}}>
        <DataGrid
            rows={datarows}
            columns={datacols}
            // checkboxSelection
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            getCellClassName={((params) => {
                if(params.field === 'status'){
                    return params.value === 0  ? "banned" : "active"
                }
            })}
            
            getRowId={((row) => {
                if(type==="products"){
                    return row.productID
                }else if(type === "invites"){
                    return row.inviteID
                }else{
                    return row.id
                }
            })}
            components={{ Toolbar: GridToolbar }}
        />
    </TableCustomStyle>
    );
};

export default DataTable;