import Box from "@mui/material/Box";
import { FunctionComponent } from "react";
import Calendar from "react-calendar";
import CalenderViewer from "components/JournalDiary/JournalSectionEntries/CalenderViewer";

interface Props {}

const Entries: FunctionComponent<Props> = ({}) => {
  return (
    <Box>
      <CalenderViewer />
    </Box>
  );
};
export default Entries;
