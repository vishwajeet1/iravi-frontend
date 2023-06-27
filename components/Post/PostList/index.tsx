import React, { FunctionComponent, useEffect } from "react";
import PostLayout from "components/Post/PostLayout";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "Interface/ReduxState";
import PostView from "components/Post/PostList/PostView";
import { getAllPost } from "components/Post/redux/PostSlice";

interface Props {}

const PostList: FunctionComponent<Props> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return <div></div>;
};
export default PostList;
