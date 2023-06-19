import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { AuthProps } from "components/decorator/WithAuth";
import { AuthToken } from "lib/auth_token";

const initialState: AuthProps = {
  auth: undefined,
};

// create your reducer
const reducer = (state: AuthProps = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        auth: new AuthToken(action.payload.auth?.auth?.token),
      };
    case "SAVE_AUTH":
      return {
        ...state,
        auth: new AuthToken(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
