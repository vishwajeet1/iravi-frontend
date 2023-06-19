import { FunctionComponent, useContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import { drawerWidth } from "components/common/Layout/DrawerMenu/drawerConstant";
import { styled, useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import {
  ColorModeContext,
  ColorModeDto,
} from "components/MuiComponent/Theme/IraviTheme";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Box from "@mui/material/Box";

interface Props {
  handleDrawerToggle: () => void;
}

const TopNav: FunctionComponent<Props> = ({ handleDrawerToggle }) => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Iravi
          </Typography>
          <Box>
            <IconButton
              sx={{ mr: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === ColorModeDto.DARK ? (
                <Brightness7Icon color="primary" />
              ) : (
                <Brightness4Icon color="primary" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default TopNav;
