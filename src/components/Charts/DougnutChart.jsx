import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function DougnutChart(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" size={"100px"} {...props}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="medium"
          component="div"
        >{`${Math.round(props?.points)}`}</Typography>
      </Box>
    </Box>
  );
}
