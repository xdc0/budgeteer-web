import { api } from '../';

interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const identityApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginRequest>({
      query: (body) => ({
        body,
        method: 'POST',
        url: 'identity/login'
      })
    })
  }),
  overrideExisting: false
});

export const { useLoginMutation } = identityApi;
