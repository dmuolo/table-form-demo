import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AlignTextCenter, ColoredSpan, StyledContainer } from './CustomTable.Styles';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

interface CustomTableProps {
  rowData: any;
}

const CustomTable: FC<CustomTableProps> = ({ rowData }) => {
  const columnDefs = [
    {
      field: 'name',
      filter: true,
      cellRenderer: params => {
        return params.data.firstName + ' ' + params.data.lastName;
      },
    },
    { field: 'position', filter: true, width: '300vh' },
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
      headerName: 'View Details',
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
    rowHeight: 50,
    defaultColDef: {
      width: 200,
      resizable: true,
    },
  };

  return (
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
  );
};

export default CustomTable;
