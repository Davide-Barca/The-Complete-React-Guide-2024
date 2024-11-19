import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logoff(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
