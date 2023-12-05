import "./style.css";
import * as React from "react";
import { Box, Button, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { sideBarData } from "../../utils/route_list/sideBar";
import logo from "../../assets/logo.png";
import { app_theme } from "../../styles_&_themes/global_theme/global_theme";
import logo_icon from "../../assets/logo_icon.png";
import logo_text from "../../assets/logo_text.png";

export const SideBar_Section = ({
  change_side_menu_handle,
  active_sidebar_index,
}) => {
  const navigation = useNavigate();

  return (
    <>
      <div className="dashboard-sidebar open">
        <Stack
          spacing={2}
          px={"10px"}
          mt={1}
          mb={8}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Stack direction='row' width={'100px'}> */}
          <img src={logo_icon} width="20px" />
          <Box component="span" sx={{ display: { xs: "none", lg: "block" } }}>
            <img src={logo_text} width="170px" />
          </Box>
          {/* </Stack> */}
        </Stack>

        {sideBarData.map((e, i) => {
          const { name, linkTo, Icon, list_in_sidebar } = e;
          return (
            <React.Fragment key={i}>
              {
                <Stack px={"10px"}>
                  <NavLink
                    to={`${linkTo}`}
                    onClick={() => change_side_menu_handle(i)}
                    style={{
                      borderRadius: "10px",

                      ":hover": {
                        backgroundColor: "#514e4e",
                        textDecoration: "none",
                      },
                      backgroundColor: i === active_sidebar_index && "#043933",
                      textDecoration: "none",
                    }}
                    className="iconsList"
                  >
                    {/* <Stack > */}

                    <div className="contentparent">
                      <Box className="iconsbtn">
                        {<Icon color={"white"} size={20} />}
                      </Box>
                      <Box
                        sx={{
                          textTransform: "uppercase",
                          fontSize: "16px",
                          color: "white",
                          display: {
                            md: "none",
                            sm: "none",
                            xs: "none",
                            lg: "block",
                          },
                        }}
                      >
                        {name}
                      </Box>
                    </div>

                    {/* </Stack> */}
                  </NavLink>
                </Stack>
              }
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
