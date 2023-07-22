import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface CustomIconButtonProps extends IconButtonProps {
  src: string;
  alt: string;
  pixels: number;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ src, alt, pixels, ...props }) => {
  const iconStyle = {
    width: pixels,
    height: pixels,
  };

  return (
    <IconButton {...props}>
      <img src={src} alt={alt} style={iconStyle} />
    </IconButton>
  );
};

export default CustomIconButton;