import { FunctionComponent } from "react";
import ProfileScreen from "components/Profile/Screen/ProfileScreen";
import DashboardScreen from "components/Profile/Screen/DashboardScreen";
import MyBlogScreen from "components/Profile/Screen/MyBlogScreen";
import { useRouter } from "next/router";
import { routesPath } from "routes";
import WritingBlogs from "components/Profile/Screen/WritingBlogs";

interface Props {}

const ScreenView: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  switch (router.asPath) {
    case routesPath.PROFILE_ACCOUNT:
      return <ProfileScreen />;
    case routesPath.DASHBOARD:
      return <DashboardScreen />;
    case routesPath.MY_BLOG:
      return <MyBlogScreen />;
    case routesPath.MY_WRITING:
      return <WritingBlogs />;
    default:
      return null;
  }
};
export default ScreenView;
