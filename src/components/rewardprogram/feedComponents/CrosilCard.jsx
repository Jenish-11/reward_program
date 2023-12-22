import React, { useContext } from "react";
import ImageCommon from "../../ImageComponents/ImageCommon";
import { gold, postimage } from "../../../helpers/images";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { UserContext } from "../../../App";
import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";

export default function CarosilCard() {
  const { pinnedposts } = useSelector((state) => ({
    pinnedposts: state.postSlice.posts?.data,
  }));
  console.log(pinnedposts)
  const { pinPop, setPinPop } = useContext(UserContext);
  return (
    <Paper sx={{ position: "relative", p: 3 }}>
     {pinnedposts?.[0]&& <Carousel autoPlay interval={3000} sx={{ zIndex: 0 }} navButtonsAlwaysInvisible={true}  strictIndexing >
        {pinnedposts?.map((item, i) => {
          if (item.pin==true) {
            return (
              <Box
                key={i}
                className="flex-column"
                gap={3}
                textAlign={"center"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="normal">
              {item?.award?.name}
                </Typography>
                {item?.image&&<ImageCommon src={item?.image} aspectRatio={"1"} width="100%" />}

                {/* <ImageCommon src={postimage} aspectRatio={"1"} /> */}
                <Typography variant="high">{item?.employee?.name}</Typography>
              </Box>
            );
          }
        })}

      </Carousel>}

      <IconButton
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => setPinPop(true)}
      >
        <EditNoteIcon />
      </IconButton>
    </Paper>
  );
}
