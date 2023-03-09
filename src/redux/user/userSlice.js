import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      user: payload,
      isLoggedIn: true,
    }),
    logout: () => initialState,
  },
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
