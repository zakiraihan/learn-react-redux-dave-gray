import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";
import axios from "axios";

const usersAdapter = createEntityAdapter({
  // sortComparer: (a, b) => b.id.localecompare(a.id)
});

const initialState = usersAdapter.getInitialState();

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (responseData) => 
        usersAdapter.setAll(initialState, responseData),
      providesTags: (result, error, arg) => [
        { type: "User", id: "LIST" },
        ...result.ids.map(id => ({ type: "User", id }))
      ]
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      transformResponse: (responseData) => 
        usersAdapter.setAll(initialState, responseData),
      providesTags: (result, error, arg) => [
        ...result.ids.map(id => ({ type: "User", id }))
      ]
    })
  })
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery
} = userApiSlice;

export const selectUsersResult = userApiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => usersResult.data
)

export const {
  selectAll: selectAllUsers,
  selectById: selectUsersById,
  selectIds: selectUserIds
} = usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState)