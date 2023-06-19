import "styles/globals.css";
import "styles/module/blog.scss";
import type { AppContext, AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "redux/store";
import App from "next/app";
import { END } from "redux-saga";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IraviTheme from "components/MuiComponent/Theme/IraviTheme";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

declare module "next" {
  export interface NextPageContext {
    /**
     * Provided by next-redux-wrapper: The redux store
     */
    // @ts-ignore
    store: Store;
  }
}

class ScholarApp extends App<{}> {
  componentDidMount() {}

  componentWillUnmount() {}

  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);
    if (appContext.ctx.req && appContext.Component.getInitialProps) {
      appContext.ctx.store.dispatch(END);
      await (appContext.ctx.store as any).sagaTask.toPromise();
    }
    return {
      query: appContext.ctx.query,
      ...appProps,
    };
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <IraviTheme>
          <Component {...pageProps} />
        </IraviTheme>
        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
        />
      </>
    );
  }
}
export default wrapper.withRedux(ScholarApp);
