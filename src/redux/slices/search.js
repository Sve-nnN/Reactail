import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchSearchLoading(state) {
      state.isLoading = true;
    },
    fetchSearchError(state, action) {
      state.error = action.error;
    },
    fetchSearchSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchSearchError, fetchSearchLoading, fetchSearchSuccess } =
  searchSlice.actions;

export const fetchSearch =
  (name = "margarita") =>
  async (dispatch) => {
    try {
      dispatch(fetchSearchLoading());
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      const result = await response.json();
      dispatch(fetchSearchSuccess(result.drinks));
    } catch (error) {
      dispatch(fetchSearchError(error));
    }
  };

export default searchSlice.reducer;
