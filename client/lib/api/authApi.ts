import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),

    signIn: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
