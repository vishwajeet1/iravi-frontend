import { ReactNode } from "react";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { routesPath } from "routes";

export interface DrawerItemsInterface {
  id: number;
  text: string;
  icon: ReactNode;
  url: string;
}
export const drawerArray: Array<DrawerItemsInterface> = [
  {
    id: 1,
    text: "Profile",
    icon: <PersonIcon width="30" height="30" />,
    url: routesPath.PROFILE_ACCOUNT,
  },
  {
    id: 2,
    text: "Dashboard",
    icon: <DashboardIcon width="30" height="30" />,
    url: routesPath.DASHBOARD,
  },
  {
    id: 3,
    text: "My Blogs",
    icon: <TextSnippetIcon width="30" height="30" />,
    url: routesPath.MY_BLOG,
  },
  {
    id: 4,
    text: "Write Blogs",
    icon: <DriveFileRenameOutlineIcon width="30" height="30" />,
    url: routesPath.MY_WRITING,
  },
];

export const drawerWidth = 240;
