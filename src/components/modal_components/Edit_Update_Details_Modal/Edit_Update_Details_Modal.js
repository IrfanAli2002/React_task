import React, { useEffect, useState } from "react";
import Custom_Modal from "../../custom_modal/Custom_Modal";
import { Stack, TextField, Typography } from "@mui/material";
import { Upload_File_Input } from "../../custom_button/Upload_File_Input";
import { app_theme } from "../../../styles_&_themes/global_theme/global_theme";
import { useDispatch, useSelector } from "react-redux";
import { Gradient_Button } from "../../custom_button/Gradient_Button";
import {
  add_customer,
  set_edit_state,
  update_customer,
} from "../../../store/slices/customer_data_slice";
import { Custom_Input_Field } from "../../Input_Field/Custom_Input_Field";
import { async_status } from "../../../utils/constants/async_status_constants";
import { displayInputSelectedImage } from "../../../helper/common_function";

export const Edit_Update_Details_Modal = ({
  modalType,
  showModal,
  on_close,
  editId,
  childToParent,
}) => {
  const [user_data, setUser_data] = useState({});

  const dispatch = useDispatch();
  const {
    user_input_data,
    edit_entry_id,
    edit_customer_data,
    post_edit_customers_status,
    post_edit_customers_error,
    customers_data,
  } = useSelector((state) => state.customer_data);

  const submit_handle = () => {
    if (modalType === "edit") {
      dispatch(update_customer({ ...user_data, id: editId }));
    } else if (modalType === "add") {
      console.log("aaaa");
      dispatch(add_customer({ ...user_data, id: customers_data?.length + 1 }));
    }
    setUser_data({});
    setImageName("");

    childToParent(true);
  };

  const on_change_handle = (key, value) => {
    setUser_data({ ...user_data, [key]: value });
  };
  const [imageName, setImageName] = useState("");
  console.log("user_data", user_data);
  return (
    <Custom_Modal is_open={showModal} on_close={on_close}>
      <Stack>
        <Stack
          sx={{
            backgroundImage: `linear-gradient(to right, ${app_theme.gradientGreenLight} , ${app_theme.gradientGreenDark})`,
            pt: 4,
            pb: 2,
          }}
          alignItems="center"
        >
          <Typography fontWeight="400" fontSize={25} color="white">
            {edit_entry_id ? "Edit Customer" : "Add New Customer"}
          </Typography>
        </Stack>
        <Stack sx={{ pt: 2, px: 2 }}>
          <Stack spacing={3} pb={2}>
            <Custom_Input_Field
              defaultValue={edit_customer_data?.username}
              onChange={(e) => on_change_handle("first_name", e)}
              size="small"
              placeholder="Username"
            />
            <Custom_Input_Field
              defaultValue={edit_customer_data?.customer_name}
              onChange={(e) => on_change_handle("last_name", e)}
              size="small"
              placeholder="Customer name"
            />
            <Custom_Input_Field
              defaultValue={edit_customer_data?.email}
              onChange={(e) => on_change_handle("email", e)}
              size="small"
              placeholder="Email"
            />

            <Upload_File_Input
              onFileChange={(e) => {
                let image = displayInputSelectedImage(e);
                on_change_handle("avatar", image);
                setImageName(e);
              }}
              selected_file={imageName || null}
            />

            <Gradient_Button
              loading={post_edit_customers_status === async_status.LOADING}
              onClick={submit_handle}
            >
              {modalType === "edit" ? "Edit Customer" : "Add Customer"}
            </Gradient_Button>
          </Stack>

          {post_edit_customers_status === async_status.ERROR && (
            <Stack pb={2}>
              <Typography align="center" color="red" fontSize={15}>
                {post_edit_customers_error?.message}*
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Custom_Modal>
  );
};
