import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { comment, like, user1 } from "../../../helpers/images";
import ImageCommon from "../../ImageComponents/ImageCommon";
import LikeComment from "../../likecomment/LikeComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function AppreciationPost() {
  return (
    <>
      <Paper sx={{ py: 4,px:2 }} className="paper-border">
        <Grid container columnSpacing={3}>
          <Grid item lg={1.5}>
            <Avatar src={user1} sx={{ aspectRatio: "1" }} />
          </Grid>
          <Grid item lg={9}>
            <Box className="flex-column" gap={2}>
              <Typography variant="normal" component={"div"}>
                Jenitha appreciated for top performance <br />
                <Typography variant="xs">8 minutes ago . by malar </Typography>
              </Typography>

              <Typography variant="small">
                Your quality of work on the case was excellent. Keep up the good
                work.
              </Typography>
              <LikeComment />
            </Box>
          </Grid>
          <Grid item lg={1.5} textAlign={"right"}>
            <IconButton sx={{ padding: 0 }}>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
