import { FunctionComponent } from "react";
import UserProfile from "components/Profile/UserProfile";

interface Props {}

const ProfileScreen: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};
export default ProfileScreen;
