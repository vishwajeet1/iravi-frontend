import { FunctionComponent } from "react";
import { JournalSectionInterface } from "components/JournalDiary/Interface/JournalInterface";
import { useRouter } from "next/router";
import { routesPath } from "routes";
import Grid from "@mui/material/Grid";
import JournalCard from "components/JournalDiary/Journal/Card/JournalCard";
import JournalSectionCard from "components/JournalDiary/JournalSection/JournalSectionCard";

interface Props {
  sectionList: Array<JournalSectionInterface>;
}

const SectionListing: FunctionComponent<Props> = ({ sectionList }) => {
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
      {sectionList.map((section) => (
        <Grid key={section.id} item xs={4}>
          <JournalSectionCard {...section} onClick={onExpandClick} />
        </Grid>
      ))}
    </Grid>
  );
};
export default SectionListing;
