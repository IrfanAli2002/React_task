import { combineReducers } from "@reduxjs/toolkit";
import customer_data_slice from "./customer_data_slice";

const rootReducer = combineReducers({
  customer_data: customer_data_slice,
});

export default rootReducer;
