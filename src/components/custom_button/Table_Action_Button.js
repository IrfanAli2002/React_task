import React from "react";
import { app_theme } from "../../styles_&_themes/global_theme/global_theme";
import "./button_action_button.css";
const variants = {
  common_style: {
    outline: "none",
    borderStyle: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    pointerEvents: "all",
    cursor: "pointer",
  },
  success: {
    color: app_theme.primaryColor,
    backgroundColor: app_theme.primaryColorLight,
  },
  error: {
    color: app_theme.errorColor,
    backgroundColor: app_theme.errorColorLight,
  },
};

export const Table_Action_Button = ({ variant, sx, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ ...variants.common_style, ...variants[variant], ...sx }}
    >
      {label}
    </button>
  );
};

Table_Action_Button.defaultProps = {
  variant: "success",
};
