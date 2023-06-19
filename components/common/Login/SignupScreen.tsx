import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import SignupForm from "components/common/From/SignUpForm";
import { signupApi } from "components/common/Login/LoginApi";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { routesPath } from "routes";

interface Props {}

const SignupScreen: FunctionComponent<Props> = ({}) => {
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      let res = await signupApi(data);
      if (res) {
        console.log("success");
        toast.success("successfully User created");
        setTimeout(() => router.push(routesPath.LOGIN), 3000);
      } else {
        console.log("fail");
        toast.error("Fail to User created");
      }
    } catch (e) {
      console.log("err", e);
      toast.error("Fail to User created");
    }
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <div className="bg-white rounded bg-opacity-70">
          <div className="flex justify-center font-bold text-xl pt-4 italic text-red-500">
            Sign up
          </div>
          <div className="w-full relative">
            <div className="relative z-10 p-10">
              <SignupForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default SignupScreen;
