import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import ImageCommon from "../../ImageComponents/ImageCommon";
import { gift, star2 } from "../../../helpers/images";
import { UserContext } from "../../../App";

export default function SharThoughts() {
  const { open, setOpen } = useContext(UserContext);
  return (
    <>
      <Paper className="paper-border flex-column" sx={{ p: 3, gap: 3 }}>
        <Box>
          <Typography variant="high">Share you thoughts...</Typography>
        </Box>
        <Box className="flex-row" justifyContent={"space-between"}>
          <Box
            bgcolor={"#FFFACD"}
            borderRadius={"50px"}
            pr={2}
            gap={2}
            className="flex-row"
            onClick={()=>setOpen("cp")}
          >
            <Box borderRadius={"100%"} bgcolor={"#FFEE54"} p={1}>
              <ImageCommon src={star2} width="21px" />
            </Box>
            <Box>
              <Typography variant="normal" sx={{cursor:"pointer"}}>Create Post</Typography>
            </Box>
          </Box>
          <Box
            bgcolor={"#C5D1FF"}
            borderRadius={"50px"}
            pr={2}
            className="flex-row"
            gap={2}
            onClick={() => setOpen("ap")}
          >
            <Box borderRadius={"100%"} bgcolor={"#0038FF"} p={1}>
              <ImageCommon src={gift} width="21px" objectFit="contaain" />
            </Box>
            <Box>
              <Typography variant="normal"  sx={{cursor:"pointer"}}>
                Create an Appreciation
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
