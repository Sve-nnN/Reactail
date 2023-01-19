import { combineReducers } from "@reduxjs/toolkit";
import coctailReducer from "../slices/coctails";
import invCoctailReducer from "../slices/invCoctail";

export default combineReducers({
  coctail: coctailReducer,
  invCoctail: invCoctailReducer,
});
