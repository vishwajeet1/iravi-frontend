import { FunctionComponent, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "Interface/ReduxState";
import {
  createJournalAction,
  fetchJournalListAction,
  setCreateJournalModal,
} from "components/JournalDiary/Journal/redux/journalSlice";
import Layout from "components/common/Layout";
import JournalListing from "components/JournalDiary/Journal/JournalListing";
import Box from "@mui/material/Box";
import CustomSpeedDial from "components/common/MuiComponent/CustomSpeedDial";
import CreateJournal from "components/JournalDiary/Journal/CreateJournal";
import { journalSpeedDialActionsList } from "components/JournalDiary/Journal/journalConstant";
import { sectionAction } from "components/JournalDiary/JournalSection/redux/sectionSlice";

interface Props {}

const Journal: FunctionComponent<Props> = ({}) => {
  const dispatch = useDispatch();
  const { isLoading, error, journalList, createJournalModal } = useSelector(
    (state: ReduxState) => state.journal
  );

  const toggleCreateJournalModal = (status: boolean) => {
    dispatch(sectionAction.setCreateJournalModal(status));
  };

  useEffect(() => {
    console.log("Journal useEffect");
    dispatch(fetchJournalListAction());
  }, []);

  const journalSpeedDialAction = (id: number) => {
    if (id === 1) return toggleCreateJournalModal(true);
  };

  const onSubmitJournal = (values: Record<string, any>) => {
    dispatch(createJournalAction(values));
  };

  return (
    <Layout>
      <Box sx={{ paddingX: "50px" }}>
        <Box sx={{ paddingTop: "30px" }}>
          <JournalListing journalList={journalList} />
        </Box>
      </Box>
      <CustomSpeedDial
        onClick={journalSpeedDialAction}
        actionList={journalSpeedDialActionsList}
      />
      <CreateJournal
        isOpen={createJournalModal}
        onClose={() => toggleCreateJournalModal(false)}
        onSubmit={onSubmitJournal}
      />
    </Layout>
  );
};
export default Journal;
