import Axios from "axios";
import { getTokenCookie } from "lib/auth-cookies-new";

export default async function list(req: any, res: any) {
  const serverUrl = process.env.BACKEND_URL;
  const accessToken = getTokenCookie({ req });

  var encodedPath = "";
  const queryObj = req.query;
  const parentKeys = Object.keys(queryObj);

  if (queryObj["path"]) {
    encodedPath += queryObj["path"];
    if (parentKeys.length > 1) {
      delete queryObj["path"];
      const keys = Object.keys(queryObj);

      encodedPath += "?";

      for (var i = 0; i < keys.length; i++) {
        if (i != 0) {
          encodedPath += "&";
        }
        encodedPath += keys[i] + "=" + encodeURIComponent(queryObj[keys[i]]);
      }
    }
  }

  try {
    let headers: { [key: string]: string } = {
      "Content-Type": req.headers["content-type"] || "application/json",
      PLATFORM: "WEB",
    };
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }
    headers["X-PLATFORM"] = "WEB";

    const config = {
      method: req.method,
      data: req.data,
      url: `${serverUrl}/${encodedPath}`,
      headers: headers,
    };
    if (req.method === "POST" || req.method === "PATCH") {
      config.data = req.body;
    }
    return await Axios(config)
      .then((response: any) => {
        console.log(response);
        return res.json({ success: true, data: response.data });
      })
      .catch((err: any) => {
        console.log("err", err.message);
        res.status(400).json({
          success: false,
          message: "You are not authorized to take this action",
        });
      });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
