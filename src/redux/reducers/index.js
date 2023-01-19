import { combineReducers } from "@reduxjs/toolkit";
import coctailReducer from "../slices/coctails";
import drinkReducer from "../slices/drink";

export default combineReducers({
  coctail: coctailReducer,
  drink: drinkReducer,
});
