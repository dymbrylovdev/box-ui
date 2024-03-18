import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import 'whatwg-fetch';

// Define a service using a base URL and expected splitEndpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: () => ({}),
});
