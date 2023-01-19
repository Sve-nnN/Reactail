import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    fetchDrinkLoading(state) {
      state.isLoading = true;
    },
    fetchDrinkError(state, action) {
      state.error = action.error;
    },
    fetchDrinkSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchDrinkError, fetchDrinkLoading, fetchDrinkSuccess } =
  drinkSlice.actions;

export const fetchDrink =
  (id = "11005") =>
  async (dispatch) => {
    try {
      dispatch(fetchDrinkLoading());
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const result = await response.json();
      dispatch(fetchDrinkSuccess(result.drinks));
    } catch (error) {
      dispatch(fetchDrinkError(error));
    }
  };

export default drinkSlice.reducer;
