import { AuthProps } from "components/decorator/WithAuth";
import { PostReduceDto } from "components/Post/redux/PostSlice";
import { JournalStateInterface } from "components/JournalDiary/Journal/redux/journalSlice";
import { JournalSectionStateInterface } from "components/JournalDiary/JournalSection/redux/sectionSlice";

export interface ReduxState {
  auth: AuthProps;
  posts: PostReduceDto;
  journal: JournalStateInterface;
  journalSection: JournalSectionStateInterface;
}
