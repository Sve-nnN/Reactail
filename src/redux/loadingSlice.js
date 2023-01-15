import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    value: false,
  },
  reducers: {
    loadingTrue: (state) => {
      state.value = true;
    },
    loadingFalse: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadingTrue, loadingFalse } = loadingSlice.actions;

export default loadingSlice.reducer;
