import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserContext } from "../../App";

import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import PostImage from "../rewardprogram/feedComponents/PostImage";
import { useDispatch, useSelector } from "react-redux";
import { addPinPost, getAllPosts } from "../../redux/services/postService";
import ClearIcon from "@mui/icons-material/Clear";
import dayjs from "dayjs";
export default function PinedPostPop() {
  const { pinPop, setPinPop } = React.useContext(UserContext);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => ({
    posts: state.postSlice.posts?.data,
  }));

  const handleSetPin = async (id) => {
    try {
      let res = await dispatch(
        addPinPost({
          data: { pin: false, updated_at: dayjs().toString() },
          id: id,
        })
      ).unwrap();
      dispatch(getAllPosts());
    } catch (error) {
      console.log(error);
    }
  };

  let pinnedposts = posts?.map((item, i) => {
    if (item?.pin)
      return (
        <Box className="pinpost flex-column w-full" gap={3}>
          <Box className="flex-row" gap={2}>
            <span>Post{i + 1}</span>{" "}
            <Button
              className="unpin"
              endIcon={<ClearIcon fontSize="10px" />}
              onClick={() => handleSetPin(item.id)}
            >
              Unpin{" "}
            </Button>
          </Box>
          <PostImage data={item} index={i} key={i} className="pinpost" />
        </Box>
      );
  });

  React.useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={pinPop}
        onClose={() => setPinPop(null)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          All
          <hr />
        </DialogTitle>
        <DialogContent>
          <Box
            className="flex-column"
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            {pinnedposts ? pinnedposts : "No Pinned Post"}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
