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
        return res.json(response.data);
      })
      .catch((err: any) => {
        console.log("status = ", err.response.status);
        console.log("message = ", err.response.data.message);
        if (err.response.status === 403) {
          res.json({
            success: false,
            message: "You are not authorized to take this action",
          });
        } else {
          throw err;
        }
      });
  } catch (error: any) {
    res.status(error.response.status).end(error.response.data.message);
  }
}
