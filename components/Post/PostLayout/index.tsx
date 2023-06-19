import { FunctionComponent } from "react";

interface Props {}

const PostLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="bg-slate-100 py-4 w-full h-full min-h-screen">
      <div className="grid grid-cols-1 gap-4 max-w-row mx-auto">{children}</div>
    </div>
  );
};
export default PostLayout;
