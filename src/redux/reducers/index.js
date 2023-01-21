import { combineReducers } from "@reduxjs/toolkit";
import coctailReducer from "../slices/coctails";
import drinkReducer from "../slices/drink";
import searchReducer from "../slices/search"
export default combineReducers({
  coctail: coctailReducer,
  drink: drinkReducer,
  search: searchReducer,
});
