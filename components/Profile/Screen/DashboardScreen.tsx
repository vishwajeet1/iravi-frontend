import { FunctionComponent } from "react";
import Box from "@mui/material/Box";

interface Props {}

const DashboardScreen: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <Box className="font-bold text-[34px] py-4">Dashboard</Box>
      <Box className="">Content</Box>
    </div>
  );
};
export default DashboardScreen;
