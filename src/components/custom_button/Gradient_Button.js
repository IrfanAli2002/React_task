import React from "react";
import { app_theme } from "../../styles_&_themes/global_theme/global_theme";
import { CircularProgress } from "@mui/material";

export const Gradient_Button = ({ onClick, children, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        outline: "none",
        borderStyle: "none",
        backgroundImage: loading
          ? "none"
          : `linear-gradient(to right, ${app_theme.gradientGreenLight} , ${app_theme.gradientGreenDark})`,
        backgroundColor: loading ? "lightgray" : "transparent",

        padding: "15px 0",
        borderRadius: "7px",
        color: "white",
        fontWeight: "lighter",
        textTransform: "uppercase",
        pointerEvents: "all",
        cursor: loading ? "progress" : "pointer",
      }}
    >
      {loading ? <CircularProgress size={20} /> : children}
    </button>
  );
};
