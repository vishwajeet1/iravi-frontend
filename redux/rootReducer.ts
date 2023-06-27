import { combineReducers } from "redux";
import AuthReducer from "components/decorator/redux/AuthReducer";
import postReducer from "components/Post/redux/PostSlice";
import journalSlice from "components/JournalDiary/Journal/redux/journalSlice";
import sectionSlice from "components/JournalDiary/JournalSection/redux/sectionSlice";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: postReducer,
  journal: journalSlice,
  journalSection: sectionSlice,
});
