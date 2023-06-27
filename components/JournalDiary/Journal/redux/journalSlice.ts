import {
  BaseJournalInterface,
  JournalInterface,
} from "components/JournalDiary/Interface/JournalInterface";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JournalStateInterface {
  journalList: Array<JournalInterface>;
  isLoading: boolean;
  error: string;
  createJournalModal: boolean;
}

const initialState: JournalStateInterface = {
  journalList: [],
  isLoading: false,
  error: "",
  createJournalModal: false,
};

const journalSlice = createSlice({
  name: "journalDiary",
  initialState,
  reducers: {
    setJournalList(state, action: PayloadAction<Array<JournalInterface>>) {
      return { ...state, journalList: action.payload };
    },
    saveJournal(state, action: PayloadAction<JournalInterface>) {
      return {
        ...state,
        journalList: [action.payload, ...state.journalList],
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
      return { ...state, createJournalModal: action.payload };
    },
  },
});

export const fetchJournalListAction = createAction(
  `journalDiary/fetchJournalList`
);

export const createJournalAction = createAction<Record<string, any>>(
  `journalDiary/createJournal`
);

export const {
  setJournalList,
  setJournalLoading,
  setJournalError,
  saveJournal,
  setCreateJournalModal,
} = journalSlice.actions;
export default journalSlice.reducer;
