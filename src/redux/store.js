import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authSlice';
import { apiSlice } from '../services/apiSlice';
import { patisseriesApi } from '../services/patisseriesApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [patisseriesApi.reducerPath]: patisseriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, apiSlice.middleware, patisseriesApi.middleware),
});