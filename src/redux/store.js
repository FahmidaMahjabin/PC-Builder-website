import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import productReducer from "./product";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
