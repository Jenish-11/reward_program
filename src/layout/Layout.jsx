import React, { useState } from "react";
import SideBar from "./sidebar/SideBar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "./header/MainHeader";
import SecondaryHeader from "./header/SecondaryHeader";
import PrimaryHeader from "./header/PrimaryHeader";
import { UserContext } from "../App";

export default function Layout() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { open, setOpen, deletePop } = React.useContext(UserContext);
  return (
    <>
      <Box position={"relative"} height="100vh">
        <Box className="mainHeader">
          <MainHeader setOpenSidebar={setOpenSidebar} />
        </Box>
        <div
          style={{
            display: "flex",
            height: "100%",
            direction: false ? "rtl" : "ltr",
            filter: (open || deletePop) && `blur(1px)`,
            // background:"white"
          }}
        >
          <Box className="sidebar">
            <SideBar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          </Box>

          <section
            className="w-full"
            style={{
              // height: "100vh",
              width: "100%",
              overflow: "auto",
              background: "rgba(241,242,244,1.00)",
            }}
          >
            <Outlet />
          </section>
        </div>
      </Box>
    </>
  );
}
