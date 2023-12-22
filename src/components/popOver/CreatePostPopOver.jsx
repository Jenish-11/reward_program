import { Box, Button, Popover } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

export default function CreatePostPopOver({ id, open, onClose }) {
  const { setOpen } = useContext(UserContext);
  const show = Boolean(open);
  const Idd = open ? { id } : undefined;
  return (
    <>
      <Popover
        id={Idd}
        open={show}
        anchorEl={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box className="flex-column" textAlign={"start"} p={3} gap={3}>
          <Button
            variant="text-only"
            sx={{ p: 0 }}
            onClick={() => setOpen("cp")}
          >
            Create Post
          </Button>
          <Button
            sx={{ p: 0 }}
            variant="text-only"
            onClick={() => setOpen("ap")}
          >
            Create Appreciation Post
          </Button>
        </Box>
      </Popover>
    </>
  );
}
