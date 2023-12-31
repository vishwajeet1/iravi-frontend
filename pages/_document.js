import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const { ANALYTICS_WRITE_KEY, NODE_ENV } = process.env;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            as="style"
            onLoad="this.rel = 'stylesheet'"
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
          />
          {/* Inject the Segment snippet into the <head> of the document  */}
          <noscript>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
