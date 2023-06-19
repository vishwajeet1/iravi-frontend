import { FunctionComponent } from "react";

interface Props {}

const MyBlogScreen: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <div className="font-bold text-[34px] text-[#101927] py-4">
        My Blog Screen
      </div>
      <div className="text-[#6c737f]">Content</div>
    </div>
  );
};
export default MyBlogScreen;
