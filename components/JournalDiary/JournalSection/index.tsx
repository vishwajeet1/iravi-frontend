import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sectionAction } from "components/JournalDiary/JournalSection/redux/sectionSlice";
import Layout from "components/common/Layout";
import Box from "@mui/material/Box";
import CustomSpeedDial from "components/common/MuiComponent/CustomSpeedDial";
import { journalSpeedDialActionsList } from "components/JournalDiary/Journal/journalConstant";
import CreateJournal from "components/JournalDiary/Journal/CreateJournal";
import { ReduxState } from "Interface/ReduxState";
import SectionListing from "components/JournalDiary/JournalSection/SectionListing";
import CreateJournalSection from "components/JournalDiary/JournalSection/CreateJournalSection";
import { BaseJournalSectionInterface } from "components/JournalDiary/Interface/JournalInterface";

interface Props {
  journalId: string;
}

const JournalSection: FunctionComponent<Props> = ({ journalId }) => {
  const dispatch = useDispatch();

  const { isLoading, error, journalSectionList, createJournalSectionModal } =
    useSelector((state: ReduxState) => state.journalSection);

  const toggleCreateJournalModal = (action: boolean) => {
    dispatch(sectionAction.setCreateJournalModal(action));
  };

  const journalSpeedDialAction = (id: number) => {
    toggleCreateJournalModal(true);
  };

  const onSubmitJournal = (values: Record<string, any>) => {
    if (isNaN(parseInt(journalId))) return alert("Please select journal");
    const updateValues = {
      ...values,
      journal: parseInt(journalId),
    };
    dispatch(sectionAction.createJournalSectionAction(updateValues));
  };

  useEffect(() => {
    if (journalId) {
      dispatch(sectionAction.fetchJournalListAction(journalId));
    }
  }, []);
  return (
    <Layout>
      <Box sx={{ paddingX: "50px" }}>
        <Box sx={{ paddingTop: "30px" }}>
          <SectionListing sectionList={journalSectionList} />
        </Box>
      </Box>
      <CustomSpeedDial
        onClick={journalSpeedDialAction}
        actionList={journalSpeedDialActionsList}
      />
      <CreateJournalSection
        isOpen={createJournalSectionModal}
        onClose={() => toggleCreateJournalModal(false)}
        onSubmit={onSubmitJournal}
      />
    </Layout>
  );
};
export default JournalSection;
