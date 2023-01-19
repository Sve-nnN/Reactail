import { combineReducers } from "@reduxjs/toolkit";
import coctailReducer from "../slices/coctails";

export default combineReducers({
  coctail: coctailReducer,
});
