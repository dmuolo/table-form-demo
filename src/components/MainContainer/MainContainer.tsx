import { Container, Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = props => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        marginTop: '2.5rem',
        textAlign: 'left',
        positiion: 'relative',
        width: '100vh',
        height: '100vh',
      }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        spacing={1}
        mt={1}
        mb={3}
        sx={{ position: 'absolute', top: 90, left: '30vh' }}
      >
        <Grid item xs={12}>
          <Typography variant='h4'>Employee Records</Typography>
        </Grid>
      </Grid>

      {/* Either Table or Form */}
      <Grid container spacing={2} mt={10} sx={{ position: 'absolute', top: 150, left: '30vh' }}>
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;
