import { FunctionComponent } from "react";
import NavHeader from "components/common/Layout/NavHeader";
import { useSelector } from "react-redux";
import { ReduxState } from "Interface/ReduxState";
import MaterialHeader from "components/common/Layout/NavHeader/MaterialHeader";
import Navigation from "components/MuiComponent/Layout/Navigation";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { padding } from "@mui/system";

interface Props {}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const auth = useSelector((state: ReduxState) => state.auth.auth);
  return (
    <Box>
      <Navigation pages={[]} settings={[]} />
      {children}
    </Box>
  );
};
export default Layout;
