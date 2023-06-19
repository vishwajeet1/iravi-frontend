import { parseCookies, setCookie, destroyCookie } from "nookies";

const TOKEN_NAME = "token";
const REFRESH_TOKEN = "refresh_token";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const USER_ID = "user_id";
const ANALYTICS_USER_ID = "ajs_user_id";

export function setTokenCookie(ctx, token) {
  console.log("new token cookie method, settingToken");
  setCookie(ctx, TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export function removeTokenCookie(ctx) {
  console.log("removing cookie, new logic");
  destroyCookie(ctx, TOKEN_NAME, {
    maxAge: -1,
    path: "/",
  });
  destroyCookie(ctx, REFRESH_TOKEN, {
    maxAge: -1,
    path: "/",
  });
  destroyCookie(ctx, USER_ID, {
    maxAge: -1,
    path: "/",
  });
  destroyCookie(ctx, ANALYTICS_USER_ID, {
    maxAge: -1,
    path: "/",
  });
}

export function getTokenCookie(ctx) {
  const cookies = parseCookies(ctx);
  return cookies.token;
}

export function getRefreshTokenCookie(ctx) {
  const cookies = parseCookies(ctx);
  return cookies["refresh_token"];
}
