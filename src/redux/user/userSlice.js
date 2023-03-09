import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        user: payload,
      };
    },
    setIsLogin: (state, { payload }) => {
      return {
        ...state,
        isLoggedIn: payload,
      };
    },
    logout: () => initialState,
  },
});

export const authReducer = authSlice.reducer;
export const { logout, setUser, setToken, setIsAuth } = authSlice.actions;
