import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<void, void>({
      query: () => 'users/',
    }),
  }),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export type UserReducerReturnType = ReturnType<typeof userApi.reducer>;

export const { useGetUsersQuery } = userApi;
