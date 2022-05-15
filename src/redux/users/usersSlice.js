import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3001/data";
const initialState = {
  loading: false,
  users: [],
  stateStatus: "",
};

/*
this function contains a type and an action! ... 
pre-created actions are put in extraReducers in the slice
 but reducers creates an action creator function and responds to that action in the slice reducer
 */

/*
  createAsyncThunk ( type , action , option)
  the action have only one argument with the first arg passed through dispatch
  if u wanna pass multiple argument make it an object dispatch(action({arg1 , arg2}))

  LIKE IN UPDATE USER
 */

export const fetchApiUsers = createAsyncThunk(
  /*type*/ "FETCH API USERRS",
  /* action */ async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get(apiUrl);
      const users = await res.data;
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  /*type*/ "UpdateUserName",
  /*payloadCreator */ async (arg) => {
    await axios.put(`${apiUrl}/${arg.user.id}`, {
      ...arg.user,
      userName: arg.newName,
    });
  }
);

export const postUser = createAsyncThunk("createUser", async (arg) => {
  try {
    await axios.post(apiUrl, arg);
  } catch (error) {
    return error.message;
  }
});

export const usersSlice = createSlice({
  name: "Users",
  initialState,
  extraReducers: {
    [fetchApiUsers.pending]: (state) => {
      state.loading = true;
      state.stateStatus = "Loading";
    },
    [fetchApiUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
      state.stateStatus = "Success";
    },
    [fetchApiUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.stateStatus = `Failed To Fetch, ${payload}`;
    },
  },
});
