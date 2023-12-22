import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DougnutChart from "../Charts/DougnutChart";

export default function PointPaper({ total, balance, utilized }) {
  const [progress1, setProgress1] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const [progress3, setProgress3] = React.useState(0);

  useEffect(() => {
    setProgress1(100);
    let p2 = (utilized / total) * 100;
    setProgress2(p2);
    let p3 = (balance / total) * 100;
    setProgress3(p3);
  }, [total, utilized, balance]);

  return (
    <>
      <Paper sx={{ py: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box className="flex-column" textAlign={"center"} gap={2}>
            <DougnutChart value={progress1} points={total} />
            <Typography variant="normal">Total Limit</Typography>
          </Box>{" "}
          <Box className="flex-column" textAlign={"center"} gap={2}>
            <DougnutChart value={progress2} points={utilized} />{" "}
            <Typography variant="normal">Utilized Points</Typography>
          </Box>{" "}
          <Box className="flex-column" textAlign={"center"} gap={2}>
            <DougnutChart value={progress3} points={balance} />{" "}
            <Typography variant="normal">Balance Points</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
