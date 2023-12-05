import React, { useEffect, useState } from "react";
import { app_theme } from "../styles_&_themes/global_theme/global_theme";
import {
  Avatar,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Table_Action_Button } from "../components/custom_button/Table_Action_Button";
import Custom_Modal from "../components/custom_modal/Custom_Modal";
import { Edit_Update_Details_Modal } from "../components/modal_components/Edit_Update_Details_Modal/Edit_Update_Details_Modal";
import { Confirmation_Modal } from "../components/modal_components/confirmation_modal/Confirmation_Modal";
import { useDispatch, useSelector } from "react-redux";
import { Gradient_Button } from "../components/custom_button/Gradient_Button";
import { IoMdAdd } from "react-icons/io";
import { async_status } from "../utils/constants/async_status_constants";
import { get_customers_async } from "../services/customer_services";
import {
  add_customer,
  delete_customer,
  set_delete_state,
  sort_by_id,
  update_customer,
} from "../store/slices/customer_data_slice";
import { FaSort } from "react-icons/fa6";

const table_header = [
  {
    label: "",
    minWidth: "200px",
    id: "image",
  },
  {
    label: "Customer ID",
    func: (dispatch, sorting_type) => {
      dispatch(sort_by_id(sorting_type));
    },
    minWidth: "200px",
    id: "customer_id",
  },
  {
    label: "Customer Name",
    minWidth: "200px",
    id: "customer_name",
  },
  {
    label: "Email",
    minWidth: "200px",
    id: "email",
  },
  {
    label: "",
    minWidth: "300px",
    id: "",
    action_buttons: true,
  },
];

export const Home = () => {
  const inner_height = window.innerHeight;
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState();
  const {
    customers_data,
    get_customers_status,
    get_customers_error,
    sort_option,
    sort_order,
  } = useSelector((state) => state.customer_data);

  const dispatch = useDispatch();

  const modalFunc = (type, id) => {
    setModalType(type);
    setEditId(id);
    setShowModal(true);
  };
  const delete_handle = (id) => {
    console.log("id", id);
    dispatch(set_delete_state({ id, state: true }));
    console.log("check");
  };
  useEffect(() => {
    dispatch(get_customers_async());
  }, []);

  console.log(customers_data);

  const childToParent = (a) => {
    setShowModal(!a);
  };
  const [sorting_type, setSorting_type] = useState("ascend");
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <Gradient_Button
          onClick={() => {
            modalFunc("add");
          }}
        >
          <Stack spacing={3} px={3} py={1} direction="row">
            <IoMdAdd size={18} /> <span>Add New Customer</span>
          </Stack>
        </Gradient_Button>
      </Stack>

      <Paper
        elevation={0}
        className="data-table"
        sx={{ overflowX: "auto", backgroundColor: "transparent" }}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundColor: app_theme.primaryColorLight,
            color: app_theme.primaryColor,
            borderRadius: 2,
            justifyContent: "flex-start",
          }}
        >
          <Stack
            style={{
              minWidth: {
                xl: "200px",
                lg: "190px",
                md: "150px",
                sm: "90px",
                xs: "50px",
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                backgroundColor: app_theme.primaryColorLight,
                color: app_theme.primaryColor,
                borderRadius: 2,
                justifyContent: "flex-start",
              }}
            >
              <Stack direction="row" sx={{ py: 2 }}>
                {table_header.map((elem) => {
                  const {
                    label,
                    minWidth,
                    id,
                    action_button,
                    button_id,
                    func,
                  } = elem;
                  return (
                    <Stack
                      sx={{
                        minWidth: {
                          xl: "200px",
                          lg: "190px",
                          md: "150px",
                          sm: "190px",
                          xs: "100px",
                        },
                      }}
                    >
                      {label && (
                        <Typography
                          fontSize={{ xl: 16, lg: 16, md: 14, sm: 12, xs: 10 }}
                          textAlign="left"
                          fontWeight="bold"
                          onClick={
                            func
                              ? () => {
                                  if (sorting_type === "ascend") {
                                    func(dispatch, "descend");
                                    setSorting_type("descend");
                                  } else {
                                    func(dispatch, "ascend");
                                    setSorting_type("ascend");
                                  }
                                }
                              : null
                          }
                        >
                          {label}
                          <FaSort style={{ cursor: "pointer" }} size={10} />
                        </Typography>
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            </Paper>
          </Stack>
        </Paper>
        <Stack
          className="data-table"
          spacing={4}
          sx={{ height: inner_height - 318, overflowY: "auto", py: 1 }}
        >
          <Edit_Update_Details_Modal
            editId={editId}
            showModal={showModal}
            childToParent={childToParent}
            modalType={modalType}
            on_close={() => setShowModal(false)}
          />
          {customers_data?.map((elem) => (
            <Paper
              key={elem.id}
              elevation={2}
              sx={{
                backgroundColor: "white",
                borderRadius: 2,
                justifyContent: "flex-start",
                width: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "830px",
                  xs: "450px",
                },
              }}
            >
              <Stack
                direction="row"
                sx={{ py: 1 }}
                alignItems="center"
                width={1}
              >
                {table_header.map((field) => {
                  const { label, minWidth, id, action_buttons } = field;
                  // console.log(id);
                  const field_data = elem[id];
                  return (
                    <Stack
                      sx={{
                        minWidth: {
                          xl: "200px",
                          lg: "190px",
                          md: "150px",
                          sm: "90px",
                          xs: "50px",
                        },
                        color: app_theme.primaryColor,
                      }}
                    >
                      {id === "image" ? (
                        <Stack pl={3}>
                          <Avatar
                            sx={{
                              width: {
                                xl: "100px",
                                lg: "90px",
                                md: "80px",
                                sm: "50px",
                                xl: "60px",
                              },
                              height: {
                                xl: "100px",
                                lg: "90px",
                                md: "80px",
                                sm: "80px",
                                xl: "60px",
                              },
                              objectFit: "cover",
                              borderRadius: "15px",
                              overflow: "hidden",
                            }}
                            src={elem.avatar}
                          />
                        </Stack>
                      ) : action_buttons ? (
                        <Stack
                          direction="row"
                          width={{
                            xl: "100%",
                            lg: "70%",
                            md: "50%",
                            sm: "30%",
                            xs: "30%",
                          }}
                          pl={5}
                          spacing={{ xl: 3, lg: 2.5, md: 2, sm: 1.5, xs: 1 }}
                        >
                          <Table_Action_Button
                            onClick={() => {
                              modalFunc("edit", elem.id);
                            }}
                            label="Edit"
                            variant="success"
                          />
                          <Table_Action_Button
                            onClick={() => delete_handle(elem.id)}
                            label="Delete"
                            variant="error"
                          />
                        </Stack>
                      ) : id === "email" ? (
                        <Typography
                          fontSize={{ xl: 16, lg: 16, md: 14, sm: 12, xs: 10 }}
                          textAlign="left"
                        >
                          {elem.email}
                        </Typography>
                      ) : id === "customer_name" ? (
                        <Typography
                          fontSize={{ xl: 16, lg: 16, md: 14, sm: 12, xs: 10 }}
                          textAlign="left"
                        >
                          {elem.first_name}
                        </Typography>
                      ) : (
                        <Typography
                          pl={4}
                          fontSize={{ xl: 16, lg: 16, md: 14, sm: 12, xs: 10 }}
                          textAlign="left"
                        >
                          {elem.id}
                        </Typography>
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};
