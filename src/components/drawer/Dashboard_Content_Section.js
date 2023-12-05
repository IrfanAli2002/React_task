import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { sideBarData } from "../../utils/route_list/sideBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Paper, Stack, Typography } from "@mui/material";
export const Dashboard_Content_Section = ({ current_section }) => {
  return (
    <>
      <div className="body">
        <div>
          <Paper elevation={3}>
            <Stack py={2} px={2} direction="row">
              <Typography textAlign="left" fontWeight="bold" fontSize={30}>
                {current_section}
              </Typography>
            </Stack>
          </Paper>

          <Container maxWidth={false}>
            <Stack sx={{ mt: 5 }}>
              <Routes>
                {React.Children.toArray(
                  sideBarData.map((e, i) => {
                    return (
                      <Route key={i} path={e.linkTo} element={e.element} />
                    );
                  })
                )}
              </Routes>
            </Stack>
          </Container>
        </div>
      </div>
    </>
  );
};
