import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const coctailSlice = createSlice({
  name: "coctail",
  initialState,
  reducers: {
    fetchCoctailLoading(state) {
      state.isLoading = true;
    },
    fetchCoctailError(state, action) {
      state.error = action.error;
    },
    fetchCoctailSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchCoctailError, fetchCoctailLoading, fetchCoctailSuccess } =
  coctailSlice.actions;

export const fetchCoctails =
  (id = "a") =>
  async (dispatch) => {
    try {
      dispatch(fetchCoctailLoading());
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${id}`
      );
      const result = await response.json();
      dispatch(fetchCoctailSuccess(result.drinks));
    } catch (error) {
      dispatch(fetchCoctailError(error));
    }
  };

export default coctailSlice.reducer;
