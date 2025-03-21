import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patisseriesApi = createApi({
  reducerPath: 'patisseriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api', credentials: 'include' }),
  tagTypes: ['Patisseries'],
  endpoints: (builder) => ({
    getPatisseries: builder.query({
      query: () => '/patisseries',
      providesTags: ['Patisseries'],
    }),
    addPatisserie: builder.mutation({
      query: (data) => ({
        url: '/patisseries',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Patisseries'],
    }),
    updatePatisserie: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/patisseries/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Patisseries'],
    }),
    deletePatisserie: builder.mutation({
      query: (id) => ({
        url: `/patisseries/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Patisseries'],
    }),
  }),
});

export const { useGetPatisseriesQuery, useAddPatisserieMutation, useUpdatePatisserieMutation, useDeletePatisserieMutation } = patisseriesApi;