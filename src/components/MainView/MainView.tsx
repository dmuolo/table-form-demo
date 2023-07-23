import { FC } from 'react';
import CustomTable from '../CustomTable';
import { Typography } from '@mui/material';
import { View } from './MainView.Styles';

interface Props {
  // Define props (if any) here
}

const MainView: FC<Props> = () => {
  return (
    <>
      <View>
        {/* <Typography variant='h4' style={{ display: 'block', width: '100%' }}>
          Employee Records
        </Typography> */}
        {/* Some component */}
        <CustomTable />
      </View>

      {/* Can have a router that either renders a table of data or some form */}
    </>
  );
};

export default MainView;
