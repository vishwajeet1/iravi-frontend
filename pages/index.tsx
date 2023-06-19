import type { NextPage } from "next";
import withAuth from "components/decorator/WithAuth";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ColorModeContext } from "components/MuiComponent/Theme/IraviTheme";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "components/common/Layout";
import Navigation from "components/MuiComponent/Layout/Navigation";

const Home: NextPage = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box>
      <Navigation pages={[]} settings={[]} />
      <Typography>Hello</Typography>
      <Button onClick={colorMode.toggleColorMode}>
        Toggle Mode {theme.palette.mode}
      </Button>
    </Box>
  );
};

export default withAuth(Home, true);
