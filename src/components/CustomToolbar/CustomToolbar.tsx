import { AppBar, Toolbar, Typography } from '@mui/material';
import CustomIconButton from '../CustomIconButton/CustomIconButton';
import pngLogo from '../../assets/logo.png';
import { FC } from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

interface CustomToolbarProps {
  title: string;
  headerElementVariant?: TypographyVariant;
}

const CustomToolbar: FC<CustomToolbarProps> = ({ title, headerElementVariant }) => {
  return (
    <AppBar position='absolute'>
      <Toolbar disableGutters>
        <CustomIconButton src={pngLogo} alt='Main Logo' pixels={48} />
        <Typography
          variant={headerElementVariant || 'body1'}
          noWrap
          component='div'
          sx={{ marginLeft: 3 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomToolbar;
