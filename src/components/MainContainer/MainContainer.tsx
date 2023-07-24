import { Container, Grid, Typography } from '@mui/material';
import { FC } from 'react';

const MainContainer: FC = props => {
  return (
    <Container maxWidth='xl' sx={{ marginTop: '2.5rem', textAlign: 'left', positiion: 'relative' }}>
      {/* Header */}
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={1}
        mt={1}
        mb={3}
        sx={{ position: 'absolute', top: 75, left: 220 }}
      >
        <Grid item xs={12}>
          <Typography variant='h4'>Employee Records</Typography>
        </Grid>
      </Grid>

      {/* Either Table or Form */}
      <Grid container spacing={2} mt={10}>
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;
