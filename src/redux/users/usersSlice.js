import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  stateStatus: "",
};

export const fetchApiUsers = createAsyncThunk(
  "FETCH API USERRS",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get(arg);
      const users = await res.data;
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchApiUsers.pending]: (state) => {
      state.loading = true;
      state.users = [];
      state.stateStatus = "Loading";
    },
    [fetchApiUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.stateStatus = "Success";
    },
    [fetchApiUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.users = [];
      state.stateStatus = `Failed To Fetch, ${payload}`;
    },
  },
});
