import axios from "axios";

export const fetchPostCategory = async () => {
  try {
    const res = await axios.get("/api/route?path=category");
    return res.data;
  } catch (e) {
    console.log("err", e);
  }
};

export const fetchPostList = async () => {
  try {
    const res = await axios.get("/api/route?path=post");
    return res.data;
  } catch (e) {
    throw new Error("FAIL");
  }
};

export const createPosts = async (data: any) => {
  try {
    const res = await axios.post("/api/route?path=post", { ...data });
    return res.data;
  } catch (e) {
    console.log("err", e);
  }
};

export const createPostComment = async (data: any) => {
  try {
    const res = await axios.post("/api/route?path=comment", { ...data });
    return res.data;
  } catch (e) {
    console.log("err", e);
  }
};

export const fetchPostComments = async (postId: any) => {
  try {
    const res = await axios.get(`/api/route?path=post/${postId}/comment`);
    return res.data;
  } catch (e) {
    console.log("err", e);
  }
};
