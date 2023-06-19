import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

let BACKEND_URL = process.env.BACKEND_URL;

type Data = {
  success: boolean;
  message?: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method != "POST")
      res
        .status(400)
        .json({ success: false, data: null, message: "method not allowed" });
    const createUser = await axios.post(BACKEND_URL + "/users/token", {
      ...req.body,
    });
    if (createUser.status == 200)
      res
        .status(200)
        .json({ success: true, data: createUser.data, message: "" });
    else
      res.status(400).json({
        success: false,
        data: createUser.data,
        message: "something went wrong",
      });
  } catch (e) {
    res
      .status(400)
      .json({ success: false, data: null, message: "something went wrong" });
  }
}
