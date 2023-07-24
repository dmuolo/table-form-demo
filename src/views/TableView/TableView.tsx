import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CustomTable } from '../../components';
import { RootState } from '../../store/rootReducer';

interface Props {}

const TableView: FC<Props> = () => {
  const employeeData = useSelector((state: RootState) => state.employeeSlice.employees);

  return <CustomTable rowData={employeeData} />;
};

export default TableView;
