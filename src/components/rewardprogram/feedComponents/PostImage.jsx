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
import { gold, postimage, user1 } from "../../../helpers/images";
import LikeComment from "../../likecomment/LikeComment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageCommon from "../../ImageComponents/ImageCommon";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../../../App";
import { useDispatch } from "react-redux";
import { addPinPost, getAllPosts } from "../../../redux/services/postService";
import dayjs from "dayjs";

export default function PostImage({ data, index, className }) {
  const dispatch = useDispatch();
  const { setDeletePop } = useContext(UserContext);
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

  const handleSetPin = async () => {
    try {
      let res = await dispatch(
        addPinPost({
          data: { pin: true, updated_at: dayjs().toString() },
          id: data?.id,
        })
      ).unwrap();
      dispatch(getAllPosts())
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Paper sx={{ py: 4, px: 2,width:"100%" }} className={"paper-border " + className}>
        <Grid container columnSpacing={3} position={"relative"}>
          <Grid item lg={1.5} className="flex-column" gap={2}>
            <Avatar src={user1} sx={{ aspectRatio: "1" }} />
            {!index == 0 && <Avatar src={gold} sx={{ aspectRatio: "1" }} />}
          </Grid>
          <Grid item lg={9}>
            <Box className="flex-column" gap={2}>
              <Typography variant="normal" component={"div"}>
                {employee?.name}{" "}
                {data?.appreciated ? "Appreciated for" : "Recieved a"}{" "}
                {award?.name} <br />
                <Typography variant="xs">8 minutes ago . by malar </Typography>
              </Typography>

              <Typography
                variant="small"
                component={"div"}
                dangerouslySetInnerHTML={{ __html: data?.message }}
              ></Typography>
              {data?.image && (
                <ImageCommon src={data?.image} aspectRatio={"1"} />
              )}
              <LikeComment />
            </Box>
          </Grid>
          <Grid
            item
            lg={1.5}
            textAlign={"right"}
            position={"absolute"}
            top={0}
            right={0}
          >
            {/* <IconButton sx={{ padding: 0 }}>
              <MoreVertIcon />
            </IconButton> */}

            <IconButton
              sx={{ padding: 0 }}
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
              <Box className="flex-column" textAlign={"start"} p={3} gap={3}>
                <Button
                  startIcon={<DeleteIcon />}
                  variant="text-only"
                  sx={{ p: 0 }}
                  onClick={() => setDeletePop(data?.id)}
                >
                  Delete
                </Button>
                <Button
                  startIcon={<PushPinIcon />}
                  sx={{ p: 0 }}
                  variant="text-only"
                  onClick={() => handleSetPin()}
                >
                  Pin to Top
                </Button>
              </Box>
            </Popover>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
