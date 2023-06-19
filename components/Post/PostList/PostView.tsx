import { FunctionComponent } from "react";
import { PostDto } from "components/Post/redux/PostSlice";
import PostCard from "components/Post/PostList/PostCard";

interface Props {
  data: PostDto;
}

const PostView: FunctionComponent<Props> = ({ data }) => {
  return (
    <div>
      <PostCard {...data} onLike={() => {}} onComment={() => {}} />
    </div>
  );
};
export default PostView;
