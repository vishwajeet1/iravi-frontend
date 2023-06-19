import { FunctionComponent } from "react";
import { Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

export interface TabsProps {
  id: number;
  text: string;
}
interface Props {
  activeTab: string;
  tabList: Array<TabsProps>;
  onClick: (id: string) => void;
}

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #f2f4f7",
  fontSize: "14px",
  "& .MuiTabs-indicator": {
    borderBottom: "0px solid #6366f1",
  },
  "& .Mui-selected": {
    color: "#6366f1",
  },
});
const CustomTabs: FunctionComponent<Props> = ({
  activeTab,
  tabList,
  onClick,
}) => {
  return (
    <AntTabs value={activeTab} onChange={(v, value) => onClick(value)}>
      {tabList.map((tab) => (
        <Tab
          label={tab.text}
          key={tab.id}
          value={tab.text}
          sx={{
            textTransform: "none",
          }}
        />
      ))}
    </AntTabs>
  );
};
export default CustomTabs;
