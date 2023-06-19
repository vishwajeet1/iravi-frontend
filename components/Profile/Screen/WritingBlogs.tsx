import { FunctionComponent } from "react";
import RichTextSection from "components/BlogWritingSection/RichText/RichTextSection";

interface Props {}

const WritingBlogs: FunctionComponent<Props> = ({}) => {
  return (
    <div>
      <div className="font-bold text-[34px] text-[#101927] py-4">
        Writing Blogs
      </div>
      <div className="text-[#6c737f]">
        <RichTextSection />
      </div>
    </div>
  );
};
export default WritingBlogs;
