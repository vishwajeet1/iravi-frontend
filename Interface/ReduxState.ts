import { AuthProps } from "components/decorator/WithAuth";
import { PostReduceDto } from "components/Post/redux/PostSlice";

export interface ReduxState {
  auth: AuthProps;
  posts: PostReduceDto;
}
