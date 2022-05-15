import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const getFetch = createAsyncThunk("getFetch", async () => {
  const fethced = await fetch("url");
  return fethced.data;
});

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    resetName: (state) => {
      state.name = "";
    },
  },

  extraReducers: {
    [getFetch.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getFetch.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { setName, resetName } = nameSlice.actions;
export default nameSlice.reducer;
