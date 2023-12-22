import { Box, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SharThoughts from "./SharThoughts";
import AppreciationPost from "./AppreciationPost";
import PostImage from "./PostImage";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/services/postService";

export default function MyFeed() {
  const dispatch = useDispatch();
  const { posts = [], addPost,loading } = useSelector((state) => ({
    posts: state.postSlice.posts?.data,
    loading:state.postSlice.posts?.loading,
    addPost: state.postSlice.addPost?.data,
  }));
  console.log(posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [addPost]);
  return (
    <>
      <Box className="flex-column" gap={3}>
        <SharThoughts />
        <Grid container className="">
          <Grid item xs={2}>
            <Typography variant="normal" className="flex-row ">
              {" "}
              My Feed
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Divider
              variant="middle"
              textAlign=""
              component="div"
              sx={{ p: 0, m: "12px" }}
              className=""
            />
          </Grid>
        </Grid>
        {/* <AppreciationPost /> */}
        {loading&&<center><CircularProgress/></center>}
        <Box height={"80vh"} overflow={"auto"} className="flex-column" mb={2} gap={2}>
          {posts?.map((item, i) => {
            return <PostImage data={item} index={i} />;
          })}
        </Box>

        {/* <AppreciationPost /> */}
      </Box>
    </>
  );
}
