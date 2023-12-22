import { Box, Button, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

export default function PrimaryHeader() {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          py: 2,
          px: 2,
          alignItems: "center",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography fontSize={"24px"}>Reward Program</Typography>
        <Typography fontSize={"14px"} sx={{ opacity: 0.8 }}>
          Last Updated{dayjs().format("DD/MM/YYYY")}
        </Typography>

        {/* <Box>
          <Button>+ Create</Button>
          <Button>Managae Rewards</Button>
        </Box> */}
      </Paper>
    </>
  );
}
