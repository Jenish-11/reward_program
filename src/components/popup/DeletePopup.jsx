import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserContext } from "../../App";

import { Dialog, DialogContent, Typography } from "@mui/material";

import ImageCommon from "../ImageComponents/ImageCommon";
import { warning } from "../../helpers/images";
import { useDispatch } from "react-redux";
import { deletePost, getAllPosts } from "../../redux/services/postService";

export default function DeletePopuUp() {
  const dispatch = useDispatch();
  const { deletePop, setDeletePop } = React.useContext(UserContext);
  const handleDelete = async () => {
    try {
      await dispatch(deletePost(deletePop)).unwrap();
      dispatch(getAllPosts())
      setDeletePop(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog
        // fullScreen={fullScreen}
        open={deletePop}
        onClose={() => setDeletePop(null)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <Box
            className="flex-column"
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            textAlign={"center"}
          >
            <ImageCommon src={warning} width="50%" />
            <Typography variant="high">
              Are you sure you want to delete this post? All the points
              associated with this post will be reverted to the points basket
            </Typography>
            <Button onClick={handleDelete}>Confirm</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
