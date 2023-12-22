import {
  Badge,
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import TimelineCard from "./TimelineCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getSchedulePost } from "../../redux/services/postService";
import { UserContext } from "../../App";

export default function TimeLine() {
  const dispatch = useDispatch();
  const { posts, getspost, loading } = useSelector((state) => ({
    posts: state.postSlice.posts?.data,
    getspost: state.postSlice.getSchedulePost?.data,
    loading: state.postSlice.posts?.loading,
  }));
  const { schdulePop, setSchedulePop } = React.useContext(UserContext);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getSchedulePost());
  }, []);
  console.log(posts, "CJECK");
  let timelinepost = posts
    ?.filter((item, i) => item?.appreciated)
    ?.map((item, i) => {
      if (item?.appreciated) return <TimelineCard data={item} key={i} />;
    });

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="medium">Timeline</Typography>
        <Badge
          badgeContent={getspost?.length}
          color="error"
          sx={{ cursor: "pointer", zIndex: 0 }}
          onClick={() => setSchedulePop(true)}
        >
          <Typography variant="medium">View Scheduled Post</Typography>
        </Badge>
      </Box>
      <Paper sx={{ px: 2, py: 5, my: 2 }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxHeight: "100vh",
            overflow: "auto",
          }}
        >
          {loading && (
            <center>
              <CircularProgress />
            </center>
          )}
          {!loading &&
            (timelinepost ?? <center>No Appreciated Post Available</center>)}
        </Container>
      </Paper>
    </>
  );
}
