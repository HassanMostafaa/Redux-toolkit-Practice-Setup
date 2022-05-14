import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import nameReducer from "./name/nameSlice";
import { usersSlice } from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nameReducer,
    usersSlice: usersSlice.reducer,
  },
});
