import { configureStore } from '@reduxjs/toolkit';

import { identityApi } from './api/identity';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(identityApi.middleware),
  reducer: {
    [identityApi.reducerPath]: identityApi.reducer
  }
});
