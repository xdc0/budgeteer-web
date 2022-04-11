import * as React from 'react';
import { ThemeProvider } from '@mui/material';

import { Login } from './login';
import { defaultTheme } from './themes/default';

export function Layout (): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
    </ThemeProvider>
  );
}
