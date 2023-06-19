import { FunctionComponent, useState } from "react";
import BasicInfo from "components/Profile/UserProfile/General/BasicInfo";
import { Box, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CustomTabs from "components/common/Layout/CustomTabs";

interface Props {}

const accountTabList = [{ id: 1, text: "General" }];
const UserProfile: FunctionComponent<Props> = ({}) => {
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState<string>("General");
  return (
    <Box className="pt-8">
      <div className="text-[24px] md:text-[34px] font-bold py-4">Account</div>
      <CustomTabs
        activeTab={activeTab}
        tabList={accountTabList}
        onClick={setActiveTab}
      />
      <Card className="flex p-4 rounded">
        <BasicInfo />
      </Card>
    </Box>
  );
};
export default UserProfile;
