import {
  JournalInterface,
  JournalSectionInterface,
} from "components/JournalDiary/Interface/JournalInterface";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JournalSectionStateInterface {
  journalSectionList: Array<JournalSectionInterface>;
  activeJournal: JournalInterface | null;
  isLoading: boolean;
  error: string;
  createJournalSectionModal: boolean;
}

const initialState: JournalSectionStateInterface = {
  journalSectionList: [],
  activeJournal: null,
  isLoading: false,
  error: "",
  createJournalSectionModal: false,
};

const sectionSlice = createSlice({
  name: "journalDiarySection",
  initialState,
  reducers: {
    setJournalSectionList(
      state,
      action: PayloadAction<Array<JournalSectionInterface>>
    ) {
      return { ...state, journalSectionList: action.payload };
    },
    saveJournalSectionSection(
      state,
      action: PayloadAction<JournalSectionInterface>
    ) {
      return {
        ...state,
        journalSectionList: [action.payload, ...state.journalSectionList],
      };
    },
    setJournalLoading(state, action: PayloadAction<boolean>) {
      return { ...state, isLoading: action.payload };
    },
    setJournalError(state, action: PayloadAction<string>) {
      console.log("action:::", action);
      return { ...state, error: action.payload };
    },
    setCreateJournalModal(state, action: PayloadAction<boolean>) {
      return { ...state, createJournalSectionModal: action.payload };
    },
  },
});

const fetchJournalListAction = createAction<string>(
  `journalDiarySection/fetchJournalSectionList`
);
const createJournalSectionAction = createAction<Record<string, any>>(
  `journalDiarySection/createJournalSection`
);

const {
  setJournalSectionList,
  setJournalLoading,
  setJournalError,
  saveJournalSectionSection,
  setCreateJournalModal,
} = sectionSlice.actions;

export const sectionAction = {
  setJournalSectionList,
  setJournalLoading,
  setJournalError,
  saveJournalSectionSection,
  setCreateJournalModal,
  fetchJournalListAction,
  createJournalSectionAction,
};
export default sectionSlice.reducer;
