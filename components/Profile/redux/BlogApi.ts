import axios from "axios";
import { apiRoutes } from "routes/apiRoutes";

export const createBlogApi = (content: string, tags: Array<string>) =>
  axios.post(apiRoutes.CREAT_BLOG, { postText: content, tags });

export const fetchBlogDetails = (blogId: string) =>
  axios.get(`${apiRoutes.CREAT_BLOG}/${blogId}`);
