import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import { star, user1 } from "../../../helpers/images";
import ImageCommon from "../../ImageComponents/ImageCommon";

export default function ProfileCard() {
  return (
    <>
      <Paper sx={{py:5}} className="paper-border">
        <Box className="flex-column" sx={{ justifyContent: "space-between",alignItems:"center",gap:2 }}>
          <Avatar src={user1} sx={{width:"100px",height:"100px"}} />
          <Typography variant="high">Sanjana Johnson</Typography>
          <Typography variant="normal">Super Admin</Typography>
          <Box
            className="flex-row"
            gap={1}
            sx={{ borderRadius: "50px", background: "#FFF1CB" ,pr:4}}
          >
            <ImageCommon src={star} width="45px" />
            <Typography variant="small" component={"div"}>
              Available Points <br />
              <Typography variant="small" component={"span"} fontWeight={600}>
                0 Points
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
