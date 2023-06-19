import * as React from "react";
import { FunctionComponent, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerMenu from "components/common/Layout/DrawerMenu";
import { drawerArray } from "components/common/Layout/DrawerMenu/drawerConstant";
import ScreenView from "components/Profile/Screen";
import TopNav from "components/common/Layout/NavHeader/TopNav";

interface Props {}
const ViewController: FunctionComponent<Props> = ({}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <TopNav handleDrawerToggle={handleDrawerToggle} />
      <CssBaseline />
      <DrawerMenu
        drawerItems={drawerArray}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <div className="pt-8">
          <ScreenView />
        </div>
      </Box>
    </Box>
  );
};
export default ViewController;
