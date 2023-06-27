import { FunctionComponent } from "react";
import { JournalInterface } from "components/JournalDiary/Interface/JournalInterface";
import Grid from "@mui/material/Grid";
import JournalCard from "components/JournalDiary/Journal/Card/JournalCard";
import { useRouter } from "next/router";
import { routesPath } from "routes";

interface Props {
  journalList: Array<JournalInterface>;
}

const JournalListing: FunctionComponent<Props> = ({ journalList }) => {
  const router = useRouter();
  const onExpandClick = (id: number) => {
    router.push(`${routesPath.JOURNAL_SECTION_PAGE}/${id}`);
  };
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 12 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
    >
      {journalList.map((journal) => (
        <Grid key={journal.id} item xs={4}>
          <JournalCard journalDetail={journal} onClick={onExpandClick} />
        </Grid>
      ))}
    </Grid>
  );
};
export default JournalListing;
