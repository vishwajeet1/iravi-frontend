import { all } from "redux-saga/effects";
import postSaga from "components/Post/redux/PostSaga";
import journalSaga from "components/JournalDiary/Journal/redux/journalSaga";
import sectionSaga from "components/JournalDiary/JournalSection/redux/sectionSaga";

function* rootSaga() {
  yield all([postSaga(), journalSaga(), sectionSaga()]);
}

export default rootSaga;
