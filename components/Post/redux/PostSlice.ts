import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryDto {
  id: number;
  categoryName: string;
}

export interface PostDto {
  id: number;
  postText: string;
  problemsCategory: number;
  author: number;
  likes: number;
  comments: number;
}

export interface CommentDto {
  id: number;
  comment: string;
  postId: number;
  author: number;
}

export interface PostReduceDto {
  categoryList: Array<CategoryDto>;
  postList: Array<PostDto>;
  isLoading: boolean;
  error: string;
}

const initialState: PostReduceDto = {
  categoryList: [],
  postList: [],
  isLoading: false,
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    saveCategory(state, action: PayloadAction<Array<CategoryDto>>) {
      return { ...state, categoryList: action.payload };
    },
    savePost(state, action: PayloadAction<Array<PostDto>>) {
      return { ...state, postList: action.payload };
    },
    toggleLoading(state, action: PayloadAction<boolean>) {
      return { ...state, isLoading: action.payload };
    },
    updateError(state, action: PayloadAction<string>) {
      return { ...state, error: action.payload };
    },
  },
});

export const getAllPost = createAction("posts/fetchPosts");
export const getAllCategory = createAction("posts/fetchCategory");

export const { saveCategory, savePost, toggleLoading, updateError } =
  postSlice.actions;

export default postSlice.reducer;
