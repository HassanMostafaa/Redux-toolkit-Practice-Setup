import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const getFetch = createAsyncThunk("getFetch", async () => {
  try {
    const fethced = await fetch("url");
    return fethced.data;
  } catch (error) {
    console.log(error);
  }
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
