import { createSlice } from "@reduxjs/toolkit";
import { fetchCoctailSuccess } from "./coctails";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const invCoctailSlice = createSlice({
  name: "invCoctail",
  initialState,
  reducers: {
    fetchInvCoctailLoading(state) {
      state.isLoading = true;
    },
    fetchInvCoctailError(state, action) {
      state.error = action.error;
    },
    fetchInvCoctailSuccess(state, action) {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchInvCoctailError,
  fetchInvCoctailLoading,
  fetchInvCoctailSuccess,
} = invCoctailSlice.actions;

export const fetchInvCoctails =
  (id = "11007") =>
  async (dispatch) => {
    try {
      dispatch(fetchInvCoctailLoading());
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
      );
      const result = await response.json();
      dispatch(fetchCoctailSuccess(result));
      return result.drinks;
    } catch (error) {
      dispatch(fetchInvCoctailError(error));
    }
  };

export default invCoctailSlice.reducer;
