import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),  // Replace with your real API base URL
  endpoints: (builder) => ({
    getPatisseries: builder.query({
      query: () => 'patisseries',  // Adjust according to your API endpoint
    }),
  }),
});
export const { useGetPatisseriesQuery } = apiSlice;