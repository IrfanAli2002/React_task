import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Custom_Input_Field = ({
  defaultValue,
  onChange,
  placeholder,
  size,
}) => {
  const [input_text, setInput_text] = useState("");

  const on_change_handle = (val) => {
    setInput_text(() => {
      return val;
    });

    onChange(val);
  };

  useEffect(() => {
    setInput_text(() => {
      return defaultValue;
    });
  }, [defaultValue]);

  return (
    <TextField
      value={input_text}
      onChange={(e) => on_change_handle(e.target.value)}
      size={size || "small"}
      placeholder={placeholder}
    />
  );
};
