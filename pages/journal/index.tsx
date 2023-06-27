import { NextPage } from "next";
import withAuth from "components/decorator/WithAuth";
import Journal from "components/JournalDiary/Journal";

const JournalPage: NextPage = ({}) => {
  return <Journal />;
};
export default withAuth(JournalPage, true);
