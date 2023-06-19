import { NextPage } from "next";
import PopModal from "components/common/Modal/PopModal";
import LoginForm from "components/common/From/LoginForm";
import Image from "next/image";
import { Paper, Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import LoginController from "components/common/Login/LoginController";
import SignupScreen from "components/common/Login/SignupScreen";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div className="relative">
      <PopModal open={true} handleClose={() => {}}>
        <SignupScreen />
      </PopModal>
      <div className="fixed w-full h-full z-0">
        <Image src="/images/background/background_login.jpg" layout="fill" />
      </div>
    </div>
  );
};
export default Login;
