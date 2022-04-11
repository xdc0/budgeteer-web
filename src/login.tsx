import * as React from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';

export function Login (): JSX.Element {
  return (
    <Grid
      container
      bgcolor={'background.default'}
      justifyContent={'center'}
      alignContent={'center'}
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={6} lg={3} md={4}>
        <Stack spacing={2}>
          <Typography variant={'h4'}>Budgeteer</Typography>
          <TextField size={'small'} name={'email'} label={'Email'}/>
          <TextField size={'small'} type={'password'} name={'password'} label={'Password'}/>
          <Button variant={'contained'}>Sign in</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
