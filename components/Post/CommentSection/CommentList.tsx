import { FunctionComponent } from "react";
import { CommentDto } from "components/Post/redux/PostSlice";
import CommentCard from "components/Post/CommentSection/CommentCard";

interface Props {
  commentList: Array<CommentDto>;
}

const CommentList: FunctionComponent<Props> = ({ commentList }) => {
  return (
    <div>
      {commentList.map((comment) => (
        <div key={comment.id} className="p-4">
          <CommentCard text={comment.comment} />
        </div>
      ))}
    </div>
  );
};
export default CommentList;
