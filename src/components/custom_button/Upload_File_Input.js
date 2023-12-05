import React, { useRef } from "react";
import { app_theme } from "../../styles_&_themes/global_theme/global_theme";
import { Stack } from "@mui/material";

export const Upload_File_Input = ({ onFileChange, selected_file }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(e.target.files[0]);
    if (selectedFile) {
      onFileChange(selectedFile);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Stack sx={{ textAlign: "start" }} direction="row" alignItems="flex-end">
      <>
        <input
          accept=".jpg, .jpeg, .png"
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <button
          style={{
            outline: "none",
            borderStyle: "none",
            backgroundColor: "transparent",
            color: app_theme.gradientGreenLight,
            fontSize: 15,
            fontWeight: "bolder",
            textDecorationLine: "underline",
          }}
          onClick={handleClick}
        >
          Upload Photo
        </button>
      </>

      <span style={{ fontSize: 14, marginLeft: "10px" }}>
        {selected_file?.name}
      </span>
    </Stack>
  );
};
