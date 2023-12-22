import React, { useEffect, useState } from "react";
import PrimaryHeader from "../../layout/header/PrimaryHeader";
import SecondaryHeader from "../../layout/header/SecondaryHeader";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ImageCommon from "../../components/ImageComponents/ImageCommon";
import { checked } from "../../helpers/images";
import { addPinPost, addPost, addSchedulePost, deletePost } from "../../redux/services/postService";

export default function RewardProgram() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { addPost: post, addSchedulePost: spost,deletepost,addpinpost } = useSelector((state) => ({
    addPost: state.postSlice.addPost?.data,
    addSchedulePost: state.postSlice.addSchedulePost?.data,
    deletepost: state.postSlice.deletePost?.data,
    addpinpost: state.postSlice.addPinPost?.data,
  }));
  useEffect(() => {
    if (post || spost||addpinpost||deletepost) {
      setShow(true);
      setTimeout(() => {
        dispatch(addPost("DESTROY"));
        dispatch(deletePost("DESTROY"));
        dispatch(addPinPost("DESTROY"));
        setShow(false);
      }, 3000);
    }

  }, [post,spost,addpinpost,deletepost]);
  return (
    <Box position={""}>
      <Box height={"133px !important"}>
        <Box position={"fixed"} zIndex={1} width={"-webkit-fill-available"}>
          <PrimaryHeader />
          <SecondaryHeader />
        </Box>
      </Box>

      {show && (
        <Box
          bgcolor={"#71FFA9"}
          textAlign={"center"}
          className="flex-row"
          justifyContent={"center"}
          gap={2}
          p={2}
        >
          <ImageCommon src={checked} width="19px" />
          <Typography variant="normal" fontWeight={600}>
            {post && "Post created Successfully" }
            {deletepost && "Post deleted Successfully" }
            {addpinpost?addpinpost?.pin ? "Post has been pinned successfully":"Post has been unpinned successfully":"" }
          </Typography>
        </Box>
      )}
      <Outlet />
    </Box>
  );
}
