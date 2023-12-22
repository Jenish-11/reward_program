import { MenuItem, Select } from "@mui/material";
import React from "react";

export default function DivisionSelect() {
  return (
    <>
      <Select
        value={1}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        variant="outlined"
        size={"small"}
        sx={{
          width: "100%",
          background: "white",
          color: "black",
          borderRadius: "10px",
          fontSize: "14px !important",
          fontWeight:"normal"
        }}
        inputProps={{
          style: { color: "black",fontWeight:"" },
          "aria-label": "Without label",
        }}
      >
        <MenuItem value={1}>All Divisions</MenuItem>
      </Select>
    </>
  );
}
