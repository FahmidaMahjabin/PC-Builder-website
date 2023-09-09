import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBuilder } = productSlice.actions;

export default productSlice.reducer;
