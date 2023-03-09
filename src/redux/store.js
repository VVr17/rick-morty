import { configureStore } from "@reduxjs/toolkit";
import { characterApi } from "./api/characterApi";
import { authReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
    user: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});
