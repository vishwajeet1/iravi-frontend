import { FunctionComponent } from "react";
import { NextPage, NextPageContext } from "next";
import JournalSection from "components/JournalDiary/JournalSection";

interface Props {
  journalId: string;
}

const Section: NextPage<Props> = ({ journalId }) => {
  return (
    <div>
      <JournalSection journalId={journalId} />
    </div>
  );
};

Section.getInitialProps = async (ctx: NextPageContext) => {
  const journalId = ctx.query["journalId"] as string;
  return { journalId };
};
export default Section;
