import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Popover,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { gold, user1 } from "../../helpers/images";
import ImageCommon from "../ImageComponents/ImageCommon";
import dayjs from "dayjs";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import relativeTime from "dayjs/plugin/relativeTime";
import { UserContext } from "../../App";
export default function TimelineCard({ data }) {
  const { deletePop, setDeletePop } = useContext(UserContext);
  const { employee, award } = data;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  dayjs.extend(relativeTime);

  const lastSeenTime = dayjs(data?.created_at);
  const currentTime = dayjs();

  const timeAgo = lastSeenTime.from(currentTime);

  return (
    <Paper
      sx={{
        padding: 1,
        border: 1,
        borderColor: "divider",
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", lg: "row" }}
        flexWrap={"nowrap"}
        padding={1}
      >
        <Grid item xs={12} sx={{ display: "flex", gap: 2 ,flexWrap:"wrap",justifyContent:{xs:"center",lg:"unset"}}}>
          <Avatar alt="Remy Sharp" src={user1} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="medium">
              {employee?.name} received an appreciation from Malar
            </Typography>
            <Box sx={{ display: "flex" }} gap={2}>
              <Typography
                fontWeight={500}
                color={"#fff"}
                fontSize={"14px"}
                component={"div"}
                sx={{
                  py: 1,
                  px: 2,
                  background: "#0038FF",
                  borderRadius: "19px",
                }}
              >
                {employee?.balance_points} Points
              </Typography>
              <Typography
                fontWeight={500}
                color={"#fff"}
                fontSize={"14px"}
                component={"div"}
                sx={{
                  py: 1,
                  px: 2,
                  background: "#FA7B17",
                  borderRadius: "19px",
                }}
              >
                {award?.name}
              </Typography>
            </Box>
            <Typography
              fontSize={"16px"}
              fontWeight={"500"}
              component={"div"}
              dangerouslySetInnerHTML={{ __html: data?.message }}
            ></Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <ImageCommon
            src={gold}
            aspectRatio={"1"}
            width="70px"
            objectFit="contain"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="small" component={"div"}>
              {timeAgo}
            </Typography>
            <Typography variant="small">
              {dayjs(data?.created_at).format("DD/MM/YYYY")}
            </Typography>
            <Typography variant="small">
              {dayjs(data?.created_at).format("HH:MM A UTC")}
            </Typography>
          </Box>

          <IconButton
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <MoreVertIcon color="black" />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button variant="no-bg" sx={{ p: 2 }} onClick={()=>setDeletePop(data?.id)}>
              Delete
            </Button>
          </Popover>
        </Grid>
      </Grid>
    </Paper>
  );
}
