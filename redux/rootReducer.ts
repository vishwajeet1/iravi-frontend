import { combineReducers } from "redux";
import AuthReducer from "components/decorator/redux/AuthReducer";
import postReducer from "components/Post/redux/PostSlice";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: postReducer,
});
