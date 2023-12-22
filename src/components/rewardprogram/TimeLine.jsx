import { Badge, Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TimelineCard from "./TimelineCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/services/postService";
import { UserContext } from "../../App";

export default function TimeLine() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => ({
    posts: state.postSlice.posts?.data,
  }));
  const { schdulePop, setSchedulePop } = React.useContext(UserContext);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="medium">Timeline</Typography>
        <Badge
          badgeContent={5}
          
          color="error"
          sx={{ cursor: "pointer", zIndex:0}}
          onClick={() => setSchedulePop(true)}
        >
          <Typography variant="medium">View Scheduled Post</Typography>
        </Badge>
      </Box>
      <Paper sx={{ px: 2, py: 5 }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxHeight: "100vh",
            overflow: "auto",
          }}
        >
          {posts?.map((item, i) => {
            if (item?.appreciated) return <TimelineCard data={item} key={i} />;
          })}
        </Container>
      </Paper>
    </>
  );
}
