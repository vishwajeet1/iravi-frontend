import type { NextPage } from "next";
import withAuth from "components/decorator/WithAuth";
import Layout from "components/common/Layout";
import ViewController from "components/Profile/ViewController";

const Profile: NextPage = () => {
  return <ViewController />;
};

export default withAuth(Profile, true);
