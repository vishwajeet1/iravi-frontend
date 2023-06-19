import { FunctionComponent } from "react";
import CommentList from "components/Post/CommentSection/CommentList";

interface Props {}

const CommentSection: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <CommentList commentList={[]} />
    </div>
  );
};
export default CommentSection;
