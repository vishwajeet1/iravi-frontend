import { call, put, takeLatest } from "redux-saga/effects";
import { journalApi } from "components/JournalDiary/Journal/redux/journalApi";
import {
  createJournalAction,
  fetchJournalListAction,
  saveJournal,
  setCreateJournalModal,
  setJournalError,
  setJournalList,
} from "components/JournalDiary/Journal/redux/journalSlice";
import { AnyAction } from "redux";
import { toast } from "react-toastify";

function* fetchJournalSaga(): Generator<any, any, any> {
  try {
    const res = yield call(journalApi.fetchJournalListApi);
    console.log(res);
    if (res.data.success) {
      const { data } = res.data;
      yield put(setJournalList(data));
    }
  } catch (error: any) {
    toast.error("Something went wrong");
    yield put(setJournalError(error.message));
  }
}

function* createJournalSaga(action: AnyAction): Generator<any, any, any> {
  try {
    const res = yield call(journalApi.createJournalApi, action.payload);
    if (res.data.success) {
      const { data } = res.data;
      toast.success("Journal created successfully");
      yield put(setCreateJournalModal(false));
      yield put(saveJournal(data));
    } else {
      toast.error("Something went wrong");
    }
  } catch (error: any) {
    yield put(setJournalError(error.message));
    toast.error("Something went wrong");
  }
}

function* journalSaga(): Generator<any, any, any> {
  yield takeLatest(fetchJournalListAction, fetchJournalSaga);
  yield takeLatest(createJournalAction, createJournalSaga);
}

export default journalSaga;
