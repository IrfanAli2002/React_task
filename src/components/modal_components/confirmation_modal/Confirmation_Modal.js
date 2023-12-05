import React, { useState } from "react";
import Custom_Modal from "../../custom_modal/Custom_Modal";
import { Button, Stack, Typography } from "@mui/material";
import { IoTrashOutline } from "react-icons/io5";
import { app_theme } from "../../../styles_&_themes/global_theme/global_theme";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_customer,
  set_delete_state,
} from "../../../store/slices/customer_data_slice";

export const Confirmation_Modal = ({}) => {
  const { is_delete_state, delete_entry_id } = useSelector(
    (state) => state.customer_data
  );

  const dispatch = useDispatch();

  const on_close = () => {
    dispatch(set_delete_state({ id: "", state: false }));
  };

  const delete_handle = () => {
    dispatch(delete_customer(delete_entry_id));
    on_close();
  };

  return (
    <Custom_Modal
      is_open={is_delete_state}
      on_close={on_close}
      white_background={true}
    >
      <Stack py={4}>
        <Stack alignItems="center" spacing={3}>
          <IoTrashOutline size={80} color={app_theme.errorColor} />
          <Typography fontWeight="bold" fontSize={20}>
            Are you sure?
          </Typography>
          <Stack>
            <Typography>Do you really want to delete this customer?</Typography>
            <Typography>This process cannot be undone.</Typography>
          </Stack>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent={"space-around"}
          >
            <Button
              onClick={on_close}
              sx={{
                px: 4,
                backgroundColor: "lightgray",
                ":focus": {
                  backgroundColor: "lightgray",
                },
                ":hover": {
                  backgroundColor: "lightgray",
                },
              }}
              disableElevation
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              onClick={delete_handle}
              sx={{ px: 4 }}
              disableElevation
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Custom_Modal>
  );
};
