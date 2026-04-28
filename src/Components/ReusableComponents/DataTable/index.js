import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import styled from 'styled-components';

const TableCustomStyle = styled.div`
.MuiDataGrid-root {
border-radius: 16px;
padding: 0 12px;
border: 1px solid rgba(18, 53, 91, 0.1);
color: #f4f4f4;
background-color: rgba(14, 36, 83, 1);
box-shadow: 3px 11px 61px 1px rgba(14,36,83,0.75);

    *{
    text-transform: capitalize;

    }
}

p{ 
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
        color:#7f156b;
        background-color: rgba(255, 255, 255, 0.8);
        font-family: 'Maison Neue';
    text-transform: uppercase;
    }
}
/* THE SORTING BUTTONS */
.MuiDataGrid-iconButtonContainer{ 
    button {
    width: 30px;
    height: 30px;
    margin: 0px 0px 0 10px !important;
        background-color: rgba(255, 255, 255, 0.8);
    visibility: visible;
    svg { 
        color:#7f156b; 
        opacity: 1 !important;

    }
    :hover {
        background-color:#7F156B;
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
            svg { color:#7F156B;}

        }
    }

}
/* ROWS */
.MuiDataGrid-root .MuiDataGrid-row{
    transition: all 0.3s ease;
    :hover {
        background-color: rgba(244, 244, 244, 0.1);
    }

}
.MuiDataGrid-root .MuiDataGrid-row.Mui-selected{
        color:#7f156b;
}
/* CELLS */
.MuiDataGrid-columnHeaders, .MuiDataGrid-root .MuiDataGrid-cell {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
}
.MuiDataGrid-root .MuiDataGrid-menuIcon button svg, .MuiDataGrid-root .MuiDataGrid-columnHeader--sorted .MuiDataGrid-iconButtonContainer, .css-r11z79-MuiDataGrid-root .MuiDataGrid-columnHeader--filtered .MuiDataGrid-iconButtonContainer{ display: none;}

.MuiDataGrid-columnHeaders {
    .MuiDataGrid-columnSeparator{
    opacity: 0 !important;
}
}
.MuiDataGrid-root .MuiDataGrid-cell:focus, .MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within{
    outline: none;
}

.MuiDataGrid-root .MuiDataGrid-actionsCell .MuiButtonBase-root .MuiSvgIcon-root {
    :hover {
        color:#7F156B;
    }
}
.MuiDataGrid-footerContainer {
    height: 50px;
    border-top: 0px solid rgba(255, 255, 255, 0.5);
}

p { margin-bottom: 0px !important; }
.MuiTablePagination-root{
    width: 100%;
    margin: 0  10px 0 0px;
    color: #f4f4f4;

}
.MuiToolbar-root{
    width: 100%;
    margin-left: -70px;
    padding-right: 0px !important;
    color: #f4f4f4;
}

.MuiTablePagination-actions {
    display: flex;
    height: 60%;
    margin-right: 20px;
    button {
        margin: 0 10px;
        height: 60%;
        background-color: rgba(255, 255, 255, 0.8);
        svg {color:#7F156B;}
        :hover { 
            background-color:#7F156B;
            svg { color: #fff; }
        }
    }
}
`;

const DataTable = ({type, rows, cols}) => {
    const [pageSize, setPageSize] = React.useState(10);    
    return (
    <TableCustomStyle style={{ display: 'flex', minHeight: 400, height: 'auto', width: '100%'}}>
        <DataGrid
            rows={rows}
            columns={cols}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            pagination
            components={{ Toolbar: GridToolbar }}
            columnVisibilityModel={{
                id: false
            }}
        />
    </TableCustomStyle>
    );
};

export default DataTable;