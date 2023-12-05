import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { SideBar_Section } from "../components/drawer/SideBar_Section";
import { useNavigate } from "react-router-dom";
import { sideBarData } from "../utils/route_list/sideBar";
import { Dashboard_Content_Section } from "../components/drawer/Dashboard_Content_Section";
import { Edit_Update_Details_Modal } from "../components/modal_components/Edit_Update_Details_Modal/Edit_Update_Details_Modal";
import { Confirmation_Modal } from "../components/modal_components/confirmation_modal/Confirmation_Modal";

export const Dashboard = () => {
  const [active_sidebar_index, setactive_sidebar_index] = useState(0);
  const navigation = useNavigate();

  const change_side_menu_handle = (index) => {
    setactive_sidebar_index(index);
  };

  return (
    <>
      <Stack sx={{ position: "relative" }}>
        <SideBar_Section
          change_side_menu_handle={change_side_menu_handle}
          active_sidebar_index={active_sidebar_index}
        />
      </Stack>

      <Stack sx={{ marginLeft: 0 }}>
        <Dashboard_Content_Section
          current_section={sideBarData[active_sidebar_index].name}
        />
      </Stack>

      <Edit_Update_Details_Modal />
      <Confirmation_Modal />
    </>
  );
};
