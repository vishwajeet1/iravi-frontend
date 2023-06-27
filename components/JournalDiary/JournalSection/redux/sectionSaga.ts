import { call, put, takeLatest } from "redux-saga/effects";
import { sectionApi } from "components/JournalDiary/JournalSection/redux/sectionApi";
import { sectionAction } from "components/JournalDiary/JournalSection/redux/sectionSlice";
import { AnyAction } from "redux";
import { toast } from "react-toastify";

function* fetchJournalSectionSaga(action: AnyAction): Generator<any, any, any> {
  try {
    const res = yield call(
      sectionApi.fetchJournalSectionListApi,
      action.payload
    );
    if (res.data.success) {
      const { data } = res.data;
      yield put(sectionAction.setJournalSectionList(data));
    }
  } catch (error: any) {
    toast.error("Something went wrong");
    yield put(sectionAction.setJournalError(error.message));
  }
}

function* createJournalSectionSaga(
  action: AnyAction
): Generator<any, any, any> {
  try {
    const res = yield call(sectionApi.createJournalSectionApi, action.payload);
    if (res.data.success) {
      const { data } = res.data;
      toast.success("Journal created successfully");
      yield put(sectionAction.setCreateJournalModal(false));
      yield put(sectionAction.saveJournalSectionSection(data));
    } else {
      toast.error("Something went wrong");
    }
  } catch (error: any) {
    yield put(sectionAction.setJournalError(error.message));
    toast.error("Something went wrong");
  }
}

function* sectionSaga(): Generator<any, any, any> {
  yield takeLatest(
    sectionAction.fetchJournalListAction,
    fetchJournalSectionSaga
  );
  yield takeLatest(
    sectionAction.createJournalSectionAction,
    createJournalSectionSaga
  );
}

export default sectionSaga;
