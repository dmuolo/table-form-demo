import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

interface Props {
  rowData: any;
}

const CustomTable: FC<Props> = ({ rowData }) => {
  const columnDefs = [
    {
      field: 'name',
      filter: true,
      cellRenderer: params => {
        return params.data.firstName + ' ' + params.data.lastName;
      },
    },
    { field: 'position', filter: true, width: 240 },
    { field: 'location' },
    {
      headerName: 'Is Active',
      field: 'isActive',
      cellRenderer: params => {
        return params.value ? (
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: 'green' }}>✔️</span>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: 'red' }}>❌</span>
          </div>
        );
      },
      width: 120,
    },
    {
      headerName: '',
      cellRenderer: params => {
        return (
          <Link to={`/details/${params.data.id}`}>
            <IconButton size='small'>
              <ArrowForwardIosIcon />
            </IconButton>
          </Link>
        );
      },
    },
  ];

  const defaultColDef = {
    cellStyle: {
      textAlign: 'left',
      fontFamily: 'Gotham A, Gotham B, Helvetica Neue, Helvetica, Arial, sans-serif',
    },
  };

  return (
    <>
      <div className='ag-theme-material' style={{ height: 500, width: 1000 }}>
        <AgGridReact
          suppressAutoSize
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={{}}
          animateRows={true}
          rowSelection='multiple'
          pagination
          paginationPageSize={8}
          suppressHorizontalScroll
        />
      </div>
    </>
  );
};

export default CustomTable;
