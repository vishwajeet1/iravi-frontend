import axios from "axios";

export const signupApi = async (data: any) => {
  try {
    const res = await axios.post("/api/route?path=users/signup", data);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const loginApi = async (data: any) => {
  try {
    const res = await axios.post("/api/login", data);
    return res.data.data;
  } catch (e) {
    return null;
  }
};
