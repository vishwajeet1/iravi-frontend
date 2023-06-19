import { all } from "redux-saga/effects";
import postSaga from "components/Post/redux/PostSaga";

function* rootSaga() {
  yield all([postSaga()]);
}

export default rootSaga;
