import React from "react";
import { router_list } from "../../utils/route_list/route_list";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Router_App = () => {
  return (
    <Router>
      <Routes>
        {React.Children.toArray(
          router_list.map((elem, index) => {
            const { linkTo, auth_required, nav_items, nav_caption, element } =
              elem;
            return <Route path={linkTo} element={element} />;
          })
        )}
      </Routes>
    </Router>
  );
};
