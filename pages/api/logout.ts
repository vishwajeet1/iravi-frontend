import { removeTokenCookie } from "lib/auth-cookies-new";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  removeTokenCookie({ res });
  res.writeHead(302, {
    Location: "/",
  });
  res.end();
};
