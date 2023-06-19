import { FunctionComponent, useEffect, useState } from "react";
import { BlogInterface } from "components/Profile/redux/BlogInterface";
import parse from "html-react-parser";
import { fetchBlogDetails } from "components/Profile/redux/BlogApi";
import { Chip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CustomAvatar from "components/common/MuiComponent/CustomAvatar";

interface Props {
  blogId: string;
}

const BlogPostDetails: FunctionComponent<Props> = ({ blogId }) => {
  const [blogPost, setBlogPost] = useState<null | BlogInterface>(null);

  const getBlogData = async () => {
    try {
      const blogRes = await fetchBlogDetails(blogId);
      if (blogRes.status == 200) {
        setBlogPost(blogRes.data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getBlogData();
  }, []);

  if (blogPost)
    return (
      <div className="py-8 max-w-row mx-auto user_blogpost">
        <div className="py-2">
          <div>
            <CustomAvatar name="Vishwajeet rai" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-2/3">
            <div className="flex justify-start gap-4">
              {blogPost.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </div>
            <div>{parse(blogPost.postText)}</div>
          </div>
          <div className="w-1/3 border-l"></div>
        </div>
      </div>
    );
  return null;
};
export default BlogPostDetails;
