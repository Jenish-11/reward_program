import { Box, IconButton, Popover } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
export default function EmojiPick({setValue,name,value}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <>
        <IconButton id="emoji" onClick={handleClick}>
          <EmojiEmotionsIcon color="yellow" />
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
          <EmojiPicker onEmojiClick={(e) =>setValue(name,value+e.emoji) } />
        </Popover>
      </>
    </>
  );
}
