import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light'
  }
});

export const defaultTheme = responsiveFontSizes(
  theme,
  {
    factor: 3
  }
);
