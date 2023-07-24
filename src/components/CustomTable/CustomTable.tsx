import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AlignTextCenter, ColoredSpan, StyledContainer } from './CustomTable.Styles';

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
          <AlignTextCenter>
            <ColoredSpan color='green'>✔️</ColoredSpan>
          </AlignTextCenter>
        ) : (
          <AlignTextCenter>
            <ColoredSpan color='red'>❌</ColoredSpan>
          </AlignTextCenter>
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

  const gridOptions = {
    // Your AG Grid options go here
    // For example, columnDefs, rowData, etc.
    rowHeight: 50, // Increase this value to make the rows taller
    defaultColDef: {
      // Increase this value to make the columns wider
      width: 200,
      resizable: true, // Enable column resizing by dragging
    },
  };

  return (
    <>
      <StyledContainer className='ag-theme-material '>
        <AgGridReact
          suppressAutoSize
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          animateRows={true}
          rowSelection='multiple'
          pagination
          paginationPageSize={8}
          suppressHorizontalScroll
        />
      </StyledContainer>
    </>
  );
};

export default CustomTable;
