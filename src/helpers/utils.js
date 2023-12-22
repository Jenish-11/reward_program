import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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

export const lastseen = (date) => {
  try {
    dayjs.extend(relativeTime);

    const lastSeenTime = dayjs(date);
    const currentTime = dayjs();

    const timeAgo = lastSeenTime.from(currentTime);
    return timeAgo;
  } catch (error) {
    console.log(error);
  }
};
