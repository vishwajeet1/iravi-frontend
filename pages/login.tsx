import { NextPage } from "next";
import PopModal from "components/common/Modal/PopModal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoginScreen from "components/common/Login/LoginScreen";
import { useRouter } from "next/router";
import { routesPath } from "routes";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  const [callbackUrl, setCallbackUrl] = useState("");
  const router = useRouter();
  useEffect(() => {
    const cbUrl = (router.query.callbackUrl as string) || routesPath.HOME;
    setCallbackUrl(cbUrl);
  }, []);
  const handleSubmitSuccess = () => {
    router.push(callbackUrl);
  };
  return (
    <div className="relative">
      <PopModal open={true} handleClose={() => {}}>
        <LoginScreen callbackFunction={() => handleSubmitSuccess()} />
      </PopModal>
      <div className="fixed w-full h-full z-0">
        <Image src="/images/background/background_login.jpg" layout="fill" />
      </div>
    </div>
  );
};
export default Login;
