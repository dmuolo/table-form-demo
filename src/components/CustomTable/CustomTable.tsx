import { FC, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

interface Props {
  // Define props (if any) here
}

const CustomTable: FC<Props> = () => {
  const [rowData] = useState([
    { name: 'John Doe', position: 'Director, Agile PMO', location: 'Remote' },
    { name: 'Jane Doe', position: 'Area Representative', location: 'Kansas City, MO' },
    { name: 'Michael Scott', position: 'Manager', location: 'Scranton, PA', isActive: true },
    {
      name: 'Scott Lee',
      position: 'Director of System Engineering',
      location: 'Kansas City, MO',
      isActive: true,
    },
    { name: 'Jack Sparrow', position: 'Ambassador', location: 'Lenexa, KS', isActive: true },
    { name: 'Sarah Lane', position: 'Ambassador', location: 'Kansas City, MO', isActive: true },
    { name: 'Jared Thomas', position: 'Janitor', location: 'Kansas City, MO', isActive: true },
    { name: 'Dennis Lin', position: 'Scrum Master', location: 'Remote', isActive: true },
    { name: 'James Sunderland', position: 'Software Engineer', location: 'Remote', isActive: true },
    { name: 'Tim Rowe', position: 'Software Engineer', location: 'Remote', isActive: false },
    { name: 'Tammy Finn', position: 'Director', location: 'Kansas City, MO', isActive: true },
    { name: 'Spencer Tate', position: 'Software Engineer', location: 'Remote', isActive: true },
  ]);

  const columnDefs = [
    { field: 'name', filter: true },
    { field: 'position', filter: true, width: 240 },
    { field: 'location' },
    {
      headerName: 'Is Active',
      field: 'isActive',
      cellRenderer: params => {
        return params.value ? (
          <span style={{ color: 'green' }}>✔️</span>
        ) : (
          <span style={{ color: 'red' }}>❌</span>
        );
      },
      width: 120,
    },
    {
      headerName: '',
      cellRenderer: () => {
        return (
          <>
            <IconButton size='small'>
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const defaultColDef = {
    cellStyle: {
      textAlign: 'left',
      fontFamily: 'Gotham A, Gotham B, Helvetica Neue, Helvetica, Arial, sans-serif',
    }, // Align all cell data to the left
  };

  return (
    <>
      <div className='ag-theme-material' style={{ height: 600, width: 900 }}>
        <AgGridReact
          suppressAutoSize
          rowData={rowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef}
          gridOptions={{}}
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection='multiple' // Options - allows click selection of rows
          pagination
          paginationPageSize={10}
          suppressHorizontalScroll
        />
      </div>
    </>
  );
};

export default CustomTable;
