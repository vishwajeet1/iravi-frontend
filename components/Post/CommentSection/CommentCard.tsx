import { FunctionComponent } from "react";

interface Props {
  text: string;
}

const CommentCard: FunctionComponent<Props> = ({ text }) => {
  return (
    <div className="rounded-xl p-4 text-sm bg-slate-500 text-gray-900">
      {text}
    </div>
  );
};
export default CommentCard;
