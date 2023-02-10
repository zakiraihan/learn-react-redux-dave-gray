import { apiSlice } from "../features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(apiSlice.middleware)
})