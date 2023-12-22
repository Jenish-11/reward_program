import { Box, Button, Paper, Tab, Tabs, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import MoreIcon from "@mui/icons-material/MoreVert";
import CreatePostPopOver from "../../components/popOver/createPostPopOver";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SecondaryHeader() {
  const { open, setOpen } = React.useContext(UserContext);
  const [value, setValue] = useState("summary");
  const[popOver,setPopOver] =useState(null)
  const navigate = useNavigate();
  const handleChange = (e, v) => {
    setValue(v);
    navigate(`/reward-program/${v}`);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          size="small"
          className="w-full"
          aria-label="show 4 new mails"
          color="inherit"
        >
          Create Post
        </Button>
      </MenuItem>
      <MenuItem>
        <Button size="small" aria-label="show 4 new mails" color="inherit">
          Manage Rewards
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "#000000",
          boxShadow: "0px 0px 4px 0px #00000040 !important",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{}}>
            <Tabs
              value={window.location.pathname.split("/")[2]}
              onChange={handleChange}
              textColor="#ffff"
              // indicatorColor="secondary"
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ textTransform: "unset !important", fontSize: "20px" }}
                value={"summary"}
                label="Summary"
              />
              <Tab
                sx={{ textTransform: "unset !important", fontSize: "20px" }}
                label="Feed"
                value={"feed"}
              />
              <Tab
                sx={{ textTransform: "unset !important", fontSize: "20px" }}
                label="Details"
                value={"details"}
              />
            </Tabs>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex", gap: 6 } }}>
            <Button size="large" aria-label="show 4 new mails" id={"create"} color="inherit" onClick={(e)=>setPopOver(e.currentTarget)}>
              Create Post
            </Button>
            <Button size="large" aria-label="show 4 new mails" color="inherit">
              Manage Rewards
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <CreatePostPopOver id={"create"} open={popOver} onClose={()=>setPopOver(null)}/>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// export default function SecondaryHeader() {
//   const { open, setOpen } = React.useContext(UserContext);
//   const [value, setValue] = useState("summary");
//   const navigate = useNavigate();
//   const handleChange = (e, v) => {
//     setValue(v);
//     navigate(`/reward-program/${v}`);
//   };
//   return (
//     <>
//       <Paper
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           py: 1,
//           px: 2,
//           alignItems: "center",
//         }}
//       >
//         <Box sx={{}}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             textColor="black"
//             // indicatorColor="secondary"
//             aria-label="basic tabs example"
//           >
//             <Tab
//               sx={{ textTransform: "unset !important", fontSize: "14px" }}
//               value={"summary"}
//               label="Summary"
//             />
//             <Tab
//               sx={{ textTransform: "unset !important", fontSize: "14px" }}
//               label="Feed"
//               value={"feed"}
//             />
//             <Tab
//               sx={{ textTransform: "unset !important", fontSize: "14px" }}
//               label="Details"
//               value={"details"}
//             />
//           </Tabs>
//         </Box>

//         <Box sx={{ display: "flex", gap: 2 }}>
//           <Button onClick={() => setOpen("cp")}>+ Create</Button>
//           <Button>Managae Rewards</Button>
//         </Box>
//       </Paper>
//     </>
//   );
// }
