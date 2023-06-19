import { FunctionComponent, useState } from "react";
import DesktopLogo from "components/common/Logo/DesktopLogo";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {
  drawerArray,
  DrawerItemsInterface,
  drawerWidth,
} from "components/common/Layout/DrawerMenu/drawerConstant";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

interface Props {
  drawerItems: Array<DrawerItemsInterface>;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const DrawerMenu: FunctionComponent<Props> = ({
  drawerItems,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const router = useRouter();
  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  const onClick = (url: string) => {
    router.push(url);
  };

  const drawerList = (
    <>
      <div className="flex justify-center w-full py-4">
        <DesktopLogo />
      </div>
      <Divider />
      <List>
        {drawerItems.map((items, index) => (
          <ListItem
            key={items.id}
            disablePadding
            onClick={() => {
              onClick(items.url);
            }}
            className="px-4 py-1"
          >
            <ListItemButton
              className={[
                items.url == router.asPath
                  ? "text-white bg-[#2F3746]"
                  : "text-[#9DA4AE]",
                "rounded hover:bg-[#2F3746]",
              ].join(" ")}
            >
              <ListItemIcon
                className={[
                  "min-w-max",
                  items.url == router.asPath
                    ? "text-[#6366f1]"
                    : "text-[#9DA4AE]",
                ].join(" ")}
              >
                {items.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <p className="font-bold text-[14px] pl-2">{items.text}</p>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerList}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            // backgroundColor: "#1C2536",
          },
        }}
        open
      >
        {drawerList}
      </Drawer>
    </Box>
  );
};
export default DrawerMenu;
