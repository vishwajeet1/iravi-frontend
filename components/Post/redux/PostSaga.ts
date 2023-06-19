import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllCategory,
  getAllPost,
  saveCategory,
  savePost,
  toggleLoading,
  updateError,
} from "components/Post/redux/PostSlice";
import {
  fetchPostCategory,
  fetchPostList,
} from "components/Post/redux/PostApi";

function* fetchAllCategory(): Generator<any, any, any> {
  try {
    toggleLoading(true);
    const res = yield call(fetchPostCategory);
    toggleLoading(false);
    if (res) {
      yield put(saveCategory(res));
    } else yield put(updateError("fail"));
  } catch (e: any) {
    toggleLoading(false);
    yield put(updateError("something went wrong"));
  }
}
function* fetchAllPost(): Generator<any, any, any> {
  try {
    toggleLoading(true);
    const res = yield call(fetchPostList);
    // toggleLoading(false);
    if (res) {
      yield put(savePost(res));
    } else yield put(updateError("fail"));
  } catch (e: any) {
    toggleLoading(false);
    yield put(updateError("something went wrong"));
  }
}

function* postSaga() {
  yield takeLatest(getAllCategory, fetchAllCategory);
  yield takeLatest(getAllPost, fetchAllPost);
}

export default postSaga;
