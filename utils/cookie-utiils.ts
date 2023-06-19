import {destroyCookie, parseCookies, setCookie} from 'nookies'
import * as next from "next";

const MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export type CookieReqContext =
  Pick<next.NextPageContext, 'req'>
  | { req: next.NextApiRequest }
  | null
  | undefined

export type CookieResContext =
  | Pick<next.NextPageContext, 'res'>
  | { res: next.NextApiResponse }
  | null
  | undefined

export function saveCookie(ctx: CookieResContext, key: string, value: string) {
  setCookie(ctx, key, value, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })
}

export function deleteCookie(ctx: CookieResContext, key: string) {
  destroyCookie(ctx, key, {
    maxAge: -1,
    path: '/',
  })
}

export function getCookie(ctx: CookieReqContext, key: string): string {
  const cookies = parseCookies(ctx)
  return cookies[key]
}
