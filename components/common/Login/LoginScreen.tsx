import React, { FunctionComponent } from "react";
import LoginForm from "components/common/From/LoginForm";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginApi } from "components/common/Login/LoginApi";
import { toast } from "react-toastify";
import { AuthToken } from "lib/auth_token";
import { saveCookie } from "utils/cookie-utiils";
import { authActions } from "components/decorator/redux/AuthActions";

interface Props {
  callbackFunction: Function;
}

const LoginScreen: FunctionComponent<Props> = ({ callbackFunction }) => {
  const dispatch = useDispatch();
  const onSubmit = async (data: any) => {
    try {
      let res = await loginApi(data);
      if (res) {
        storeToken(res);
        console.log("success");
        toast.success("successfully User created");
      } else {
        errorHandler("Fail to User created");
      }
    } catch (e) {
      errorHandler("Fail");
    }
  };

  const errorHandler = (errorMessage: string) => {
    console.log("err", errorMessage);
    toast.error(errorMessage);
  };

  const storeToken = (token: { access: string; refresh: string }) => {
    const auth = new AuthToken(token.access);
    if (auth.isValid) {
      saveCookie(null, "token", token.access);
      saveCookie(null, "refresh_token", token.refresh);
      dispatch(authActions.saveAuth(token));
      callbackFunction();
    }
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <div className="bg-white rounded">
          <div className="flex justify-center font-bold text-xl pt-4 italic text-red-500">
            Login
          </div>
          <div className="w-full relative">
            <div className="relative z-10 p-10">
              <LoginForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default LoginScreen;
