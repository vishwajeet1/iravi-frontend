import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CreateIcon from "@mui/icons-material/Create";
import { FunctionComponent } from "react";

export interface SpeedDialActionInterface {
  id: number;
  icon: React.ReactNode;
  name: string;
}

interface props {
  onClick: (eventId: number) => void;
  actionList: Array<SpeedDialActionInterface>;
}
const CustomSpeedDial: FunctionComponent<props> = ({ onClick, actionList }) => {
  return (
    <Box sx={{ height: 320, flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        icon={<SpeedDialIcon />}
      >
        {actionList.map((action) => (
          <SpeedDialAction
            key={action.id}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => onClick(action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default CustomSpeedDial;
