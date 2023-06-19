import { authActions } from "components/decorator/redux/AuthActions";
import { getRefreshTokenCookie, getTokenCookie } from "lib/auth-cookies-new";
import { AuthToken } from "lib/auth_token";
import { NextPage, NextPageContext } from "next";
import React, { Component } from "react";
import axios from "axios";
import { saveCookie } from "utils/cookie-utiils";

export type AuthProps = {
  auth?: AuthToken;
};

export default function withAuth<P extends AuthProps>(
  WrappedComponent: NextPage<P>,
  shouldRedirect: boolean = true
) {
  // eslint-disable-next-line react/display-name
  return class extends Component<P> {
    static async getInitialProps(ctx: NextPageContext) {
      // const { protocol, host } = absoluteUrl(ctx.req);
      const { store } = ctx;
      const SEVER = process.env.BACKEND_URL;
      console.log(store, "getting store");
      const callbackPath = ctx.req?.url;
      let auth_page = null;

      const url = new URL("https://test.com" + callbackPath);
      auth_page = url.searchParams.get("auth_page");
      const utmSource = url.searchParams.get("utm_source") || undefined;
      const utmCampaign = url.searchParams.get("utm_campaign") || undefined;
      const utmTerm = url.searchParams.get("utm_term") || undefined;

      const isServer = !!ctx.req;
      console.log("withAuth, isServer = ", isServer);
      const token = getTokenCookie(ctx);
      console.log("privateRoute, Request = ", callbackPath, token);
      const auth = new AuthToken(token);
      const initialProps = { auth };
      store.dispatch(authActions.saveAuth(initialProps?.auth?.token));
      if (auth.isExpired) {
        if (shouldRedirect) {
          const refreshToken = getRefreshTokenCookie(ctx);
          let flag = 1;
          if (refreshToken) {
            try {
              const refreshTokenRes = await axios.post(
                `${SEVER}/user/token/refresh`,
                { refresh: refreshToken }
              );
              const newAuthToken = new AuthToken(refreshTokenRes.data.access);
              if (newAuthToken.token) {
                saveCookie(ctx, "token", newAuthToken.token);
                ctx.store.dispatch(authActions.saveAuth(newAuthToken.token));
                flag = 0;
              }
            } catch (e) {
              console.log(e);
            }
          }
          if (flag) {
            let pageName = "login";
            if (auth_page && auth_page !== "") {
              pageName = auth_page;
            }
            ctx.res?.writeHead(302, {
              Location: this.buildAuthUrl(
                pageName,
                callbackPath,
                utmSource,
                utmCampaign,
                utmTerm
              ),
            });
            ctx.res?.end();
          }
        }
      }
      if (WrappedComponent.getInitialProps) {
        const componentProps = await WrappedComponent.getInitialProps(ctx);
        return {
          ...componentProps,
          ...initialProps,
        };
      }
      return initialProps;
    }

    static buildAuthUrl(
      authPage: string,
      callbackPath?: string,
      utmSource?: string,
      utmCampaign?: string,
      utmTerm?: string
    ): string {
      let finalUrl = `/${authPage}?redirected=true&callbackUrl=${encodeURIComponent(
        callbackPath || ""
      )}`;
      if (utmSource) finalUrl += `&utm_source=${utmSource}`;
      if (utmCampaign) finalUrl += `&utm_campaign=${utmCampaign}`;
      if (utmTerm) finalUrl += `&utm_term=${utmTerm}`;
      return finalUrl;
    }

    get auth() {
      // the server pass to the client serializes the token
      // so we have to reinitialize the authToken class
      //
      // @see https://github.com/zeit/next.js/issues/3536
      return new AuthToken(this.props.auth?.token);
    }

    render() {
      return <WrappedComponent {...this.props} auth={this.auth} />;
    }
  };
}
