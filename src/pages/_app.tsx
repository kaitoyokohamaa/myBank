import type { AppProps /*, AppContext */ } from "next/app";
import React, { Fragment } from "react";
import { CSSReset } from "@chakra-ui/core";
import "../styles/globals.css";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CSSReset />
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
