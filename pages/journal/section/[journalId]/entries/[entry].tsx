import { FunctionComponent } from "react";
import JournalSectionEntries from "components/JournalDiary/JournalSectionEntries";
import "react-calendar/dist/Calendar.css";

interface Props {}

const Entries: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <JournalSectionEntries />
    </div>
  );
};
export default Entries;
