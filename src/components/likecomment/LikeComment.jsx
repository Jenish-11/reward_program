import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import ImageCommon from "../ImageComponents/ImageCommon";
import { comment, like } from "../../helpers/images";

export default function LikeComment() {
  return (
    <Box className="flex-column" gap={1}>
      <Typography variant="xs">
        4 Likes 0 comments <br /> <br />
        <Divider />
      </Typography>

      <Box className="flex-row" justifyContent={"space-around"}>
        <Button
          variant="text"
          sx={{ background: "none !important", color: "#858585" }}
          endIcon={<ImageCommon src={like} width="24px" height={"100%"} />}
        >
          Like
        </Button>
        <Button
          variant="text"
          sx={{ background: "none !important", color: "#858585" }}
          endIcon={<ImageCommon src={comment} width="24px" height={"100%"} />}
        >
          Comment
        </Button>
      </Box>
    </Box>
  );
}
