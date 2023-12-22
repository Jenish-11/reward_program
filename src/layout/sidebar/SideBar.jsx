import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { SidebarHeader, StyledLogo } from './SideBarHeader'
import { Button, IconButton, Switch, Typography } from "@mui/material";
import { StyledLogo } from "../header/SIdeBarHeader";
import { UserContext } from "../../App";
import { Link, useNavigate, useParams } from "react-router-dom";
export const sidebarClasses = {
  root: "ps-sidebar-root",
  container: "ps-sidebar-container",
  image: "ps-sidebar-image",
  backdrop: "ps-sidebar-backdrop",
  collapsed: "ps-collapsed",
  toggled: "ps-toggled",
  rtl: "ps-rtl",
  broken: "ps-broken",
};

export const menuClasses = {
  root: "ps-menu-root",
  menuItemRoot: "ps-menuitem-root",
  subMenuRoot: "ps-submenu-root",
  button: "ps-menu-button",
  prefix: "ps-menu-prefix",
  suffix: "ps-menu-suffix",
  label: "ps-menu-label",
  icon: "ps-menu-icon",
  subMenuContent: "ps-submenu-content",
  SubMenuExpandIcon: "ps-submenu-expand-icon",
  disabled: "ps-disabled",
  active: "ps-active",
  open: "ps-open",
};
export default function SideBar({ openSidebar, setOpenSidebar }) {
  const themes = {
    light: {
      sidebar: {
        backgroundColor: "#ffffff",
        color: "#607489",
      },
      menu: {
        menuContent: "#fbfcfd",
        icon: "#0098e5",
        hover: {
          backgroundColor: "#c5e4ff",
          color: "#44596e",
        },
        disabled: {
          color: "#9fb6cf",
        },
        active: {
          background: "#0038FF",
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: "#0b2948",
        color: "#8ba1b7",
      },
      menu: {
        menuContent: "#082440",
        icon: "#59d0ff",
        hover: {
          backgroundColor: "#00458b",
          color: "#b6c8d9",
        },
        disabled: {
          color: "#3e5e7e",
        },
      },
    },
  };

  // hex to rgba converter
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const [collapsed, setCollapsed] = React.useState(false);
  const { toggle, setToggle } = useContext(UserContext);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(true);
  const [theme, setTheme] = React.useState("light");
  const [mount, setMount] = React.useState(true);
  // handle on RTL change event
  const handleRTLChange = (e) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  // handle on image change event
  const handleImageChange = (e) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      [`&.${menuClasses.active}`]: {
        background: themes[theme].menu.active.background,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <Sidebar
      //   backgroundColor={hexToRgba(
      //     themes[theme].sidebar.backgroundColor,
      //     hasImage ? 0.9 : 1
      //   )}
      collapsed={openSidebar}
      toggled={toggle}
      breakPoint={"xs"}
      // onBreakPoint={setBroken}
      onBackdropClick={() => setToggle(false)}
      backgroundColor="#ffff"
      //   backgroundColor={hexToRgba(
      //     themes[theme].sidebar.backgroundColor,
      //     hasImage ? 0.9 : 1
      //   )}
      rootStyles={{
        color: themes[theme].sidebar.color,
        position: "relative",
        border: "none",
      }}
      //   image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
    >
      {/* <SidebarHeader /> */}
      <Menu menuItemStyles={menuItemStyles}>
        <MenuItem
          //   component={<Link href={"/"} />}
          icon={<StyledLogo>JE</StyledLogo>}
        >
          <Typography
            variant="subtitle1"
            fontWeight={700}
            width={100}
            color="#0098e5"
          >
            JENISH
          </Typography>
        </MenuItem>
      </Menu>
      <Menu menuItemStyles={menuItemStyles}>
        <MenuItem
          //   component={<Link href={'/'} />}
          icon={
            <>
              <StyledLogo>D</StyledLogo>
            </>
          }
        >
          {" "}
          Dashboard
        </MenuItem>
        <MenuItem
          //   component={<Link href={'/category'} />}
          icon={
            <>
              <StyledLogo>C</StyledLogo>
            </>
          }
        >
          {" "}
          Category
        </MenuItem>
        <MenuItem
          component={<Link to={"/reward-program/summary"} />}
          active={window.location.pathname.split("/")[1]=="reward-program"}
          icon={
            <>
              <StyledLogo>R</StyledLogo>
            </>
          }
        >
          {" "}
          Reward
        </MenuItem>
      </Menu>

      {/* <IconButton
        // onClick={() => setCollapsed(!collapsed)}
        sx={{
          position: "absolute",
          background: "transparent",
          color: "blue",
          right: 0,
          top: "50vh",
          alignItems: "center",
        }}
      >
        {"▶"}
      </IconButton> */}
    </Sidebar>
  );
}