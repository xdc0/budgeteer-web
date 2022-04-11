import * as React from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { useLoginMutation } from './store/api/identity';
import { useState } from 'react';

export function Login (): JSX.Element {
  const [login, identity] = useLoginMutation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

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
          <TextField
            size={'small'}
            name={'email'}
            label={'Email'}
            value={credentials.email}
            onChange={(event) => {
              setCredentials({ ...credentials,
                email: event.target.value });
            }}
          />
          <TextField
            size={'small'}
            type={'password'}
            name={'password'}
            label={'Password'}
            value={credentials.password}
            onChange={(event) => {
              setCredentials({ ...credentials,
                password: event.target.value });
            }}
          />
          <Button variant={'contained'} onClick={() => {
            // eslint-disable-next-line no-console
            login(credentials).catch(console.log);
          }}>
            Sign in
          </Button>
        </Stack>
        <pre>
          {`${JSON.stringify(identity.data)}`}
        </pre>
      </Grid>
    </Grid>
  );
}
