import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../utils/constants/type_constants";
import { api_handle } from "../config/api_handle";
import { dataWithFiles } from "../helper/common_function";

export const get_customers_async = createAsyncThunk(
  type_constants.GET_CUSTOMERS,
  async () => {
    try {
      const response = await api_handle.get(`/users?page=${1}`);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", { error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
