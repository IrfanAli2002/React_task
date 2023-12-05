import { createSlice } from "@reduxjs/toolkit";
import { async_status } from "../../utils/constants/async_status_constants";
import { get_customers_async } from "../../services/customer_services";

const initialState = {
  customers_data: null,
  edit_customer_data: null,
  user_input_data: {},
  delete_entry_id: "",
  edit_entry_id: "",
  is_delete_state: false,
  get_customers_status: async_status.IDLE,
  post_edit_customers_status: async_status.IDLE,
  post_edit_customers_error: null,
  get_customers_error: null,
};

const customer_data_slice = createSlice({
  name: "customer-data",
  initialState,
  reducers: {
    set_user_input_data(state, { payload }) {
      const { key, value } = payload;
      state.user_input_data[key] = value;
    },
    set_delete_state(state, { payload }) {
      const { id, state: delete_state } = payload;
      state.delete_entry_id = id;
      state.is_delete_state = delete_state;
    },
    add_customer(state, { payload }) {
      console.log("123456789", payload);
      let a = [...state.customers_data, payload];
      state.customers_data = a;
      localStorage.setItem("customer-data", JSON.stringify(a));
    },
    update_customer(state, { payload }) {
      console.log("edit", payload);
      const index = state.customers_data.findIndex(
        (customer) => customer.id === payload.id
      );
      if (index !== -1) {
        let a = state.customers_data;
        a[index] = payload;
        console.log("edit", a);
        localStorage.setItem("customer-data", JSON.stringify(a));
        state.customers_data = a;
      }
    },

    delete_customer(state, { payload }) {
      state.customers_data = state.customers_data.filter(
        (customer) => customer.id !== payload
      );
      localStorage.setItem(
        "customer-data",
        JSON.stringify(state.customers_data)
      );
    },
    sort_by_id(state, { payload }) {
      const { customers_data } = state;
      let a;
      if (payload === "ascend") {
        a = customers_data.slice().sort((a, b) => a.id - b.id);
      } else if (payload === "descend") {
        a = customers_data.slice().sort((a, b) => b.id - a.id);
      }
      state.customers_data = a;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_customers_async.pending, (state) => {
      state.get_customers_status = async_status.LOADING;
      state.get_customers_error = null;
    });
    builder.addCase(get_customers_async.fulfilled, (state, { payload }) => {
      state.get_customers_status = async_status.SUCCEEDED;
      let get_item = JSON.parse(localStorage.getItem("customer-data"));
      if (!get_item?.length) {
        state.customers_data = payload.data;
        localStorage.setItem("customer-data", JSON.stringify(payload.data));
      } else {
        state.customers_data = get_item;
      }
      state.get_customers_error = null;
    });
    builder.addCase(get_customers_async.rejected, (state, actions) => {
      state.get_customers_status = async_status.ERROR;
      state.get_customers_error = actions.error;
    });
  },
});

export const {
  set_user_input_data,
  set_delete_state,
  add_customer,
  update_customer,
  delete_customer,
  sort_by_id,
} = customer_data_slice.actions;
export default customer_data_slice.reducer;
