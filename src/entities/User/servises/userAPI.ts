import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'entities/User';
import 'whatwg-fetch';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: () => ({}),
});

const splitUserApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<void, void>({
      query: () => 'users/',
    }),
    authUser: builder.mutation<IUser, { username: string, password: string } >({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export type UserReducerReturnType = ReturnType<typeof userApi.reducer>;
export const { useGetUsersQuery, useAuthUserMutation } = splitUserApi;
